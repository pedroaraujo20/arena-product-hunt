import React, { useCallback, useMemo, useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import ListItem from '../../components/ListItem';
import Loading from '../../components/Loading';
import { Order } from '../../hooks/useGetPosts';
import { useGetPosts } from '../../hooks';

import logo from '../../assets/logo.png';

import { Container, StyledTabList, Logo } from './styles';

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [order, setOrder] = useState<Order>('RANKING');

  const { posts, loading, errorMessage } = useGetPosts(order);

  const onSelectTab = useCallback((index: number) => {
    setTabIndex(index);
    setOrder(index === 0 ? 'RANKING' : 'NEWEST');
  }, []);

  const renderPosts = useMemo(() => {
    if (loading) return <Loading />;

    return posts.map(({ node: post }) => (
      <ListItem
        key={post.id}
        id={post.id}
        name={post.name}
        description={post.description}
        thumbnail={post.thumbnail.url}
        votes={post.votesCount}
      />
    ));
  }, [loading, posts]);

  if (errorMessage) return <h1>{errorMessage}</h1>;

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
