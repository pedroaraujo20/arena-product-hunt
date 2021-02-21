import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ListItem, { ListItemProps } from '../../components/ListItem';

const item: ListItemProps = {
  id: '1234',
  name: 'ReactJS',
  thumbnail: '',
  description: 'Best frontend framework.',
  votes: 300,
};

describe('ListItem Component', () => {
  it('Should render a List Item', () => {
    const { findByText } = render(
      <Router>
        <ListItem {...item} />
      </Router>,
    );

    expect(findByText('ReactJS')).toBeTruthy();
  });
});
