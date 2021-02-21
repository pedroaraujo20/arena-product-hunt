import React from 'react';

import { Container, PostComment, UserInfo, Body } from './styles';

export type Comment = {
  node: {
    body: string;
    user: {
      name: string;
      profileImage: string;
    };
  };
};

interface CommentsProps {
  data: Comment[];
}

const Comments = ({ data }: CommentsProps) => {
  return (
    <Container>
      {data.map(({ node }) => (
        <PostComment key={node.user.name}>
          <UserInfo>
            <img src={node.user.profileImage} alt={node.user.name} />
            <span>{node.user.name}</span>
          </UserInfo>
          <Body>{node.body}</Body>
        </PostComment>
      ))}
    </Container>
  );
};

export default Comments;
