import React from 'react';
import { FiHeart } from 'react-icons/fi';

import Button from '../../components/Button';
import Comments from '../../components/Comments';
import Error from '../../components/Error';
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

  if (loading)
    return (
      <Container>
        <Loading test-id="loader" />
      </Container>
    );

  if (error) {
    return (
      <Container>
        <Error message={error.message} test-id="error" />
      </Container>
    );
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
    <Container>
      {data && (
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
      )}
    </Container>
  );
};

export default Post;
