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

  const { data, loading, error } = useGetPost(query.get('id') as string);

  const renderPost = useMemo(() => {
    if (loading) return <Loading test-id="loader" />;

    if (error) {
      return <div test-id="error">{error.message}</div>;
    }

    const {
      name,
      thumbnail,
      votesCount,
      description,
      media,
      website,
      comments,
    } = data.post;

    return (
      <PostContainer test-id="post-container">
        <CompanyHeader>
          <div>
            <Thumbnail src={thumbnail.url} alt={name} />
            <span>{name}</span>
          </div>
          <Votes>
            <FiHeart size={20} color="#c74f2f" />
            <strong>{votesCount}</strong>
          </Votes>
        </CompanyHeader>
        <Description>{description}</Description>
        <Media src={media[0].url} alt={name} />
        <Button target="_blank" href={website}>
          Official Website
        </Button>
        <Comments data={comments.edges} />
      </PostContainer>
    );
  }, [data, loading, error]);

  return <Container>{renderPost}</Container>;
};

export default Post;
