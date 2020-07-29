import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import Toaster from '.';

test('Toaster scenarios', () => {
  const defaultBtn = TestRenderer.create(<Toaster>Hello</Toaster>);
  expect(defaultBtn).toMatchSnapshot();
});
