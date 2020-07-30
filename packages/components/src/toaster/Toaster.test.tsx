import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import Toaster from '.';
import { StyledToaster } from './styles';

test('Toaster scenarios', () => {
  const defaultToaster = TestRenderer.create(<Toaster>Hello</Toaster>);
  expect(defaultToaster).toMatchSnapshot();

  const defaultStyledToaster = TestRenderer.create(<StyledToaster>Styled toaster</StyledToaster>);
  expect(defaultStyledToaster).toMatchSnapshot();

  const defaultOpenStyledToaster = TestRenderer.create(<StyledToaster isOpen>Styled opened toaster</StyledToaster>);
  expect(defaultOpenStyledToaster).toMatchSnapshot();
});
