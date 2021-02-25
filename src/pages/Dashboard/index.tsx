import React, { useCallback, useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';

import { Order } from '../../hooks/useGetPosts';
import { useGetPosts } from '../../hooks';

import logo from '../../assets/logo.png';

import { Container, StyledTabList, Logo } from './styles';
import MainContent from './containers/MainContent';

const first = 10;

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [order, setOrder] = useState<Order>('RANKING');

  const onSelectTab = useCallback((index: number) => {
    setTabIndex(index);
    setOrder(index === 0 ? 'RANKING' : 'NEWEST');
  }, []);

  const { data, loading, error, fetchMore, networkStatus } = useGetPosts(
    order,
    first,
  );

  const isFetchingMore = networkStatus === 3;

  const getMorePosts = () => {
    fetchMore({
      variables: {
        order,
        first,
        after: data.posts.pageInfo.endCursor,
      },
    });
  };

  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
        <Tabs selectedIndex={tabIndex} onSelect={onSelectTab}>
          <StyledTabList>
            <Tab>Popular</Tab>
            <Tab>Newest</Tab>
          </StyledTabList>
          <TabPanel>
            <MainContent
              loading={loading && !isFetchingMore}
              error={error}
              data={data}
              onListEnd={getMorePosts}
            />
          </TabPanel>
          <TabPanel>
            <MainContent
              loading={loading && !isFetchingMore}
              error={error}
              data={data}
              onListEnd={getMorePosts}
            />
          </TabPanel>
        </Tabs>
      </Container>
    </>
  );
};

export default Dashboard;
