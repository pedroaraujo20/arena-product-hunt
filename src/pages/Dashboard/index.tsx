import React, { useCallback, useMemo, useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Order } from '../../hooks/useGetPosts';
import { useGetPosts } from '../../hooks';
import Error from '../../components/Error';
import ListItem from '../../components/ListItem';
import Loading from '../../components/Loading';

import logo from '../../assets/logo.png';

import { Container, StyledTabList, Logo } from './styles';

const first = 10;

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [order, setOrder] = useState<Order>('RANKING');

  const { data, loading, error, fetchMore, networkStatus } = useGetPosts(
    order,
    first,
  );

  const onSelectTab = useCallback((index: number) => {
    setTabIndex(index);
    setOrder(index === 0 ? 'RANKING' : 'NEWEST');
  }, []);

  const renderPosts = useMemo(() => {
    const isRefetching = networkStatus === 3;

    if (loading && !isRefetching) return <Loading test-id="loader" />;

    if (error) {
      return <Error message={error.message} test-id="error" />;
    }

    const { hasNextPage } = data.posts.pageInfo;

    return (
      <InfiniteScroll
        test-id="infinite-scroll"
        dataLength={data.posts.edges.length}
        hasMore={hasNextPage}
        next={() => {
          fetchMore({
            variables: {
              order,
              first,
              after: data.posts.pageInfo.endCursor,
            },
          });
        }}
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
  }, [loading, data, networkStatus, fetchMore, order, error]);

  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
        <Tabs selectedIndex={tabIndex} onSelect={onSelectTab}>
          <StyledTabList>
            <Tab>Popular</Tab>
            <Tab>Newest</Tab>
          </StyledTabList>
          <TabPanel>{renderPosts}</TabPanel>
          <TabPanel>{renderPosts}</TabPanel>
        </Tabs>
      </Container>
    </>
  );
};

export default Dashboard;
