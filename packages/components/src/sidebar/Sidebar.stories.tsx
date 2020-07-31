import React from 'react';
import { withTests } from '@storybook/addon-jest';
import { withKnobs, optionsKnob } from '@storybook/addon-knobs';
import results from '../../.jest-test-results.json';
import Sidebar from '.';

export const Default = () => {
  // const isLoading = optionsKnob('Loading', { Yes: 'true', No: 'false' }, 'false', { display: 'inline-radio' });

  const isOpen = optionsKnob(
    'Opened',
    {
      Yes: 'yes',
      No: 'no',
    },
    'yes',
    { display: 'inline-radio' },
  );

  return (
    <Sidebar isOpen={isOpen === 'yes'}>
      <h3>TBS Games</h3>
      <ul>
        <li>Simple item</li>
        <li>Other item</li>
      </ul>
    </Sidebar>
  );
};

Default.story = {
  name: 'default',
  parameters: {
    jest: ['Sidebar.test.tsx'],
  },
};
export default {
  title: 'Sidebar',
  component: Sidebar,
  decorators: [withTests({ results }), withKnobs],
};
