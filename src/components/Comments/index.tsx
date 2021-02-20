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
      {data.map(commentInfo => (
        <PostComment key={commentInfo.node.user.name}>
          <UserInfo>
            <img
              src={commentInfo.node.user.profileImage}
              alt={commentInfo.node.user.name}
            />
            <span>{commentInfo.node.user.name}</span>
          </UserInfo>
          <Body>{commentInfo.node.body}</Body>
        </PostComment>
      ))}
    </Container>
  );
};

export default Comments;
