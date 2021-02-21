import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';

jest.mock('../../hooks', () => {
  return {
    useGetPosts: () => ({
      data: {
        posts: {
          edges: [
            {
              node: {
                name: 'Randomish Races',
                thumbnail: {
                  url:
                    'https://ph-files.imgix.net/95a8e111-7c6d-4927-8c0e-4ba8629ccb0c.png?auto=format&fit=crop&w=200',
                },
                description:
                  'Once played in front of thousands of fans in stadiums and arenas, dot races has now made its way to your computer.',
                votesCount: 200,
              },
            },
          ],
          pageInfo: {
            hasNextPage: true,
            endCursor: 'MTA=',
          },
        },
      },
      loading: false,
      error: false,
      networkStatus: 7,
      fetchMore: jest.fn(),
    }),
  };
});

describe('Dashboard Page', () => {
  it('should render posts', () => {
    const { findByTestId } = render(
      <Router>
        <Dashboard />
      </Router>,
    );

    expect(findByTestId('infinite-scroll')).toBeTruthy();
  });

  jest.mock('../../hooks', () => {
    return {
      useGetPosts: () => ({
        data: undefined,
        loading: true,
        error: false,
        networkStatus: 3,
        fetchMore: jest.fn(),
      }),
    };
  });

  it('should be loading', () => {
    const { findByTestId } = render(
      <Router>
        <Dashboard />
      </Router>,
    );

    expect(findByTestId('loader')).toBeTruthy();
  });

  jest.mock('../../hooks', () => {
    return {
      useGetPosts: () => ({
        data: undefined,
        loading: false,
        error: true,
        networkStatus: 7,
        fetchMore: jest.fn(),
      }),
    };
  });

  it('should has error', () => {
    const { findByTestId } = render(
      <Router>
        <Dashboard />
      </Router>,
    );

    expect(findByTestId('error')).toBeTruthy();
  });
});
