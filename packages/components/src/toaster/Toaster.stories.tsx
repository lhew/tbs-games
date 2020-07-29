import React from 'react';
import { withTests } from '@storybook/addon-jest';
import { withKnobs, optionsKnob } from '@storybook/addon-knobs';
import results from '../../.jest-test-results.json';
import Toaster from '.';

export const Default = () => {
  // const isLoading = optionsKnob('Loading', { Yes: 'true', No: 'false' }, 'false', { display: 'inline-radio' });

  const state = optionsKnob(
    'State',
    {
      Open: 'open',
      Closed: 'closed',
    },
    'open',
    { display: 'inline-radio' },
  );

  return (
    <>
      <Toaster isOpen={state === 'open'}>This is a toaster message</Toaster>
    </>
  );
};

Default.story = {
  name: 'default',
  parameters: {
    jest: ['Toaster.test.tsx'],
  },
};
export default {
  title: 'Toaster',
  component: Toaster,
  decorators: [withTests({ results }), withKnobs],
};
