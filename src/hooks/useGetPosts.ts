import { ApolloError, NetworkStatus, useQuery } from '@apollo/client';
import { GET_POSTS } from '../services/productHunt/queries/post';

export type Order = 'RANKING' | 'NEWEST';

export interface Posts {
  posts: {
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
    edges: Array<{
      node: {
        id: string;
        name: string;
        votesCount: number;
        description: string;
        thumbnail: {
          url: string;
        };
      };
    }>;
  };
}

function useGetPosts(
  order: Order,
  first: number,
): {
  data: Posts;
  loading: boolean;
  error?: ApolloError;
  fetchMore: Function;
  networkStatus: NetworkStatus;
} {
  const { data, loading, fetchMore, networkStatus, error } = useQuery(
    GET_POSTS,
    {
      variables: {
        order,
        first,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-only',
    },
  );

  return {
    data,
    loading,
    error,
    fetchMore,
    networkStatus,
  };
}

export default useGetPosts;
