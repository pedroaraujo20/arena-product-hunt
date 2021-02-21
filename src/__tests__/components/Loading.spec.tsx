import { render } from '@testing-library/react';
import React from 'react';

import Loading from '../../components/Loading';

describe('Loading component', () => {
  it('Should render loading component', () => {
    const { findByTestId } = render(<Loading />);

    expect(findByTestId('loader')).toBeTruthy();
  });
});
