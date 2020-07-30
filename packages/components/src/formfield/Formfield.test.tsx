import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import FormField from '.';
import { StyledFormField } from './styles';

test('FormField scenarios', () => {
  const defaultFormField = TestRenderer.create(
    <FormField
      align="rows"
      message={<span>There is a warning here</span>}
      label="Your name"
      name="name"
      type="email"
    />,
  );
  expect(defaultFormField).toMatchSnapshot();

  //should show a Select component without label
  const selectFormField = TestRenderer.create(
    <FormField align="columns" name="name" type="select">
      <option>Option 1</option>
      <option>Option 2</option>
    </FormField>,
  );
  expect(selectFormField).toMatchSnapshot();

  // should have 'rows' as default align
  const defaultAlignFormField = TestRenderer.create(
    <FormField name="name" type="select">
      <option>Option 1</option>
      <option>Option 2</option>
    </FormField>,
  );
  expect(defaultAlignFormField).toMatchSnapshot();

  //Should reflect grid changes on StyledFormField

  const rowStyledFormField = TestRenderer.create(<StyledFormField align="rows">Default FormField</StyledFormField>);
  expect(rowStyledFormField).toMatchSnapshot();

  const columnStyledFormField = TestRenderer.create(
    <StyledFormField align="columns">Default FormField</StyledFormField>,
  );
  expect(columnStyledFormField).toMatchSnapshot();

  const defaultStyledFormField = TestRenderer.create(<StyledFormField>Default FormField</StyledFormField>);
  expect(defaultStyledFormField).toMatchSnapshot();
});
