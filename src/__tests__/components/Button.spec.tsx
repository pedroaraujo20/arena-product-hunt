import { render } from '@testing-library/react';
import React from 'react';

import Button from '../../components/Button';

describe('Button Component', () => {
  it('Should render button', () => {
    const { findByText } = render(<Button>Click here</Button>);

    const buttonElement = findByText('Click here');

    expect(buttonElement).toBeTruthy();
  });
});
