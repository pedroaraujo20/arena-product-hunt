import { render } from '@testing-library/react';
import React from 'react';

import Comments, { Comment } from '../../components/Comments';

const comments: Comment[] = [
  {
    node: {
      body: 'Thats a great feature',
      user: {
        name: 'Pedro Araujo',
        profileImage: '',
      },
    },
  },
  {
    node: {
      body: 'This is the best company ever',
      user: {
        name: 'James',
        profileImage: '',
      },
    },
  },
];

describe('Comments component', () => {
  it('should be able to render an comment', () => {
    const { getByText } = render(<Comments data={comments} />);

    expect(getByText('Pedro Araujo')).toBeTruthy();
  });
});
