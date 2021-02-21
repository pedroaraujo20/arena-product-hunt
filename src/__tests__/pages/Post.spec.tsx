import { render } from '@testing-library/react';
import React from 'react';

import Post from '../../pages/Post';

jest.mock('react-router-dom', () => {
  return {
    useLocation: () => ({
      search: String,
    }),
  };
});

jest.mock('../../hooks', () => {
  return {
    useGetPost: () => ({
      data: {
        post: {
          name: 'Randomish Races',
          thumbnail: {
            url:
              'https://ph-files.imgix.net/95a8e111-7c6d-4927-8c0e-4ba8629ccb0c.png?auto=format&fit=crop&w=200',
          },
          description:
            'Once played in front of thousands of fans in stadiums and arenas, dot races has now made its way to your computer.',
          media: [
            {
              url:
                'https://ph-files.imgix.net/d25e749c-ac29-4187-af00-eb8d59a6e594.jpeg?auto=format&fit=crop',
            },
          ],
          website: 'https://google.com',
          votesCount: 200,
          comments: {
            edges: [
              {
                node: {
                  body: 'Thats pretty good! Thank you!!',
                  user: {
                    name: 'Pedro Araujo',
                    profileImage:
                      'https://ph-avatars.imgix.net/2075748/original?auto=format&fit=crop&crop=faces&w=original&h=original',
                  },
                },
              },
            ],
          },
        },
      },
      loading: false,
      error: false,
    }),
  };
});

describe('Post page', () => {
  it('Should render post page', () => {
    const { findByTestId } = render(<Post />);

    expect(findByTestId('post-container')).toBeTruthy();
  });

  jest.mock('../../hooks', () => {
    return {
      useGetPost: () => ({
        data: undefined,
        loading: true,
        error: false,
      }),
    };
  });

  it('Should be loading', () => {
    const { findByTestId } = render(<Post />);

    expect(findByTestId('loader')).toBeTruthy();
  });

  jest.mock('../../hooks', () => {
    return {
      useGetPost: () => ({
        data: undefined,
        loading: false,
        error: {
          message: 'Error',
        },
      }),
    };
  });

  it('Should has error', () => {
    const { findByTestId } = render(<Post />);

    expect(findByTestId('error')).toBeTruthy();
  });
});
