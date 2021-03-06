import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query getPosts($order: PostsOrder!, $first: Int!, $after: String) {
    posts(order: $order, first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          votesCount
          description
          thumbnail {
            url
          }
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($id: ID) {
    post(id: $id) {
      name
      description
      thumbnail {
        url(width: 200)
      }
      votesCount
      website
      media {
        url
      }
      comments {
        edges {
          node {
            body
            user {
              name
              profileImage
            }
          }
        }
      }
    }
  }
`;
