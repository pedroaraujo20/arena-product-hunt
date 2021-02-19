import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_POSTS } from '../services/productHunt/queries/post';

export type Order = 'RANKING' | 'NEWEST';

interface Posts {
  node: {
    id: string;
    name: string;
    votesCount: number;
    description: string;
    thumbnail: {
      url: string;
    };
  };
}

function useGetPosts(
  order: Order,
): {
  posts: Posts[];
  loading: boolean;
  errorMessage: string;
} {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { loading } = useQuery(GET_POSTS, {
    variables: {
      order,
    },
    onCompleted: data => {
      if (data) {
        setPosts(data.posts.edges);
      }
    },
    onError: err => {
      if (err) {
        const errMessage = err.graphQLErrors
          .filter(({ extensions }) => extensions && extensions.toUser)
          .map(({ message }) => message)
          .join('\n');
        setErrorMessage(errMessage || 'Ocorreu um erro inesperado');
      }
    },
  });

  return {
    posts,
    loading,
    errorMessage,
  };
}

export default useGetPosts;
