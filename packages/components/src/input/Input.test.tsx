import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import Input from '.';

test('Input scenarios', () => {
  const defaultInput = TestRenderer.create(<Input type="text" value="foo" />);
  expect(defaultInput).toMatchSnapshot();
});
