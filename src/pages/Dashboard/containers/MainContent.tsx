import { ApolloError } from '@apollo/client';
import React from 'react';
import Error from '../../../components/Error';
import List from '../../../components/List';
import Loading from '../../../components/Loading';
import { Posts } from '../../../hooks/useGetPosts';

interface MainContentProps {
  data: Posts;
  loading: boolean;
  error?: ApolloError;
  onListEnd: () => void;
}

const MainContent = ({ data, loading, error, onListEnd }: MainContentProps) => {
  if (loading) return <Loading test-id="loader" />;

  if (error) {
    return <Error message={error.message} test-id="error" />;
  }

  return data && <List data={data} onListEnd={onListEnd} />;
};

export default MainContent;
