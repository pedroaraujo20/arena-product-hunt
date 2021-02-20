import { ApolloError, useQuery } from '@apollo/client';
import { GET_POST } from '../services/productHunt/queries/post';
import { Comment } from '../components/Comments';

interface Post {
  post: {
    name: string;
    votesCount: number;
    description: string;
    website: string;
    media: Array<{ url: string }>;
    thumbnail: {
      url: string;
    };
    comments: {
      edges: Comment[];
    };
  };
}

function useGetPosts(
  id: string,
): {
  data: Post;
  loading: boolean;
  error: ApolloError | undefined;
} {
  const { data, loading, error } = useQuery(GET_POST, {
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
    error,
  };
}

export default useGetPosts;
