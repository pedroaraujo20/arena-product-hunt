import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ListItem from '../ListItem';
import Loading from '../Loading';
import { Posts } from '../../hooks/useGetPosts';

interface ListProps {
  data: Posts;
  onListEnd: () => void;
}

const List = ({ data, onListEnd }: ListProps) => {
  const { hasNextPage } = data.posts.pageInfo;

  return (
    <InfiniteScroll
      test-id="infinite-scroll"
      dataLength={data.posts.edges.length}
      hasMore={hasNextPage}
      next={onListEnd}
      className="infinite-scroll"
      loader={<Loading />}
    >
      {data.posts.edges.map(({ node: post }) => (
        <ListItem
          key={post.id}
          id={post.id}
          name={post.name}
          description={post.description}
          thumbnail={post.thumbnail.url}
          votes={post.votesCount}
        />
      ))}
    </InfiniteScroll>
  );
};

export default List;
