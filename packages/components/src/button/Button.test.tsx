import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import Button from '.';

test('Button scenarios', () => {
  const defaultBtn = TestRenderer.create(<Button>Hello</Button>);
  expect(defaultBtn).toMatchSnapshot();
});
