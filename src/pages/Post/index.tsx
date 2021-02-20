import React, { useMemo } from 'react';
import { FiHeart } from 'react-icons/fi';
import Button from '../../components/Button';
import Comments from '../../components/Comments';
import Loading from '../../components/Loading';
import { useGetPost } from '../../hooks';
import { useQueryParams } from '../../utils/useQueryParams';

import {
  Container,
  PostContainer,
  Media,
  Thumbnail,
  CompanyHeader,
  Description,
  Votes,
} from './styles';

const Post: React.FC = () => {
  const query = useQueryParams();

  const { data, loading } = useGetPost(query.get('id') as string);

  const renderPost = useMemo(() => {
    if (loading) return <Loading />;

    return (
      <PostContainer>
        <CompanyHeader>
          <div>
            <Thumbnail src={data.post.thumbnail.url} alt={data.post.name} />
            <span>{data.post.name}</span>
          </div>
          <Votes>
            <FiHeart size={20} color="#c74f2f" />
            <strong>{data.post.votesCount}</strong>
          </Votes>
        </CompanyHeader>
        <Description>{data.post.description}</Description>
        <Media src={data.post.media[0].url} alt={data.post.name} />
        <Button target="_blank" href={data.post.website}>
          Official Website
        </Button>
        <Comments data={data.post.comments.edges} />
      </PostContainer>
    );
  }, [loading, data]);

  return <Container>{renderPost}</Container>;
};

export default Post;
