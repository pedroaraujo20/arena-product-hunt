import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_POST } from '../services/productHunt/queries/post';

interface Post {
  name: string;
  votesCount: number;
  description: string;
  website: string;
  media: Array<{ url: string }>;
  thumbnail: {
    url: string;
  };
}

function useGetPosts(
  id: string,
): {
  post: Post;
  loading: boolean;
  errorMessage: string;
} {
  const [post, setPost] = useState<Post>({} as Post);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { loading } = useQuery(GET_POST, {
    variables: {
      id,
    },
    onCompleted: data => {
      if (data && data.post) {
        setPost(data.post);
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
    post,
    loading,
    errorMessage,
  };
}

export default useGetPosts;
