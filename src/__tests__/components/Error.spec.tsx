import { render } from '@testing-library/react';
import React from 'react';

import Error from '../../components/Error';

describe('Error Component', () => {
  it('should render error', () => {
    const { findByText } = render(<Error message="Error" />);

    const ErrorContainer = findByText('Click here');

    expect(ErrorContainer).toBeTruthy();
  });
});
