import React, { useMemo } from 'react';
import Loading from '../../components/Loading';
import { useGetPost } from '../../hooks';
import { useQuery } from '../../utils/useQuery';

// import { Container } from './styles';

const Post: React.FC = () => {
  const query = useQuery();

  const { post, loading } = useGetPost(query.get('id') as string);

  const renderPost = useMemo(() => {
    if (loading) return <Loading />;

    return (
      <div>
        <p>{post.name}</p>
        <p>{post.description}</p>
        <p>{post.votesCount}</p>
        <p>{post.website}</p>
        <img src={post.thumbnail.url} alt={post.name} />
      </div>
    );
  }, [loading, post]);

  return <>{renderPost}</>;
};

export default Post;
