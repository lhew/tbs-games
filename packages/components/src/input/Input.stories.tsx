import React from 'react';
import { withTests } from '@storybook/addon-jest';
import { withKnobs, optionsKnob } from '@storybook/addon-knobs';
import results from '../../.jest-test-results.json';
import Input from '.';
import Button from '../button';

export const Default = () => {
  return (
    <>
      <Input type="text" placeholder="input values" />
      &nbsp;
      <Button>Input btn</Button>
    </>
  );
};

Default.story = {
  name: 'default',
  parameters: {
    jest: ['Button.test.tsx'],
  },
};
export default {
  title: 'Input',
  component: Input,
  decorators: [withTests({ results }), withKnobs],
};
