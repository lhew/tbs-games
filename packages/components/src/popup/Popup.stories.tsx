import React from 'react';
import { withTests } from '@storybook/addon-jest';
import { withKnobs, optionsKnob } from '@storybook/addon-knobs';
import results from '../../.jest-test-results.json';
import Popup from '.';
import Button from '../button';

export const Default = () => {
  // const isLoading = optionsKnob('Loading', { Yes: 'true', No: 'false' }, 'false', { display: 'inline-radio' });

  const mode = optionsKnob(
    'Transparent mode',
    {
      On: 'on',
      Off: 'off',
    },
    'on',
    { display: 'inline-radio' },
  );

  return (
    <Popup transparent={mode === 'on'}>
      <div style={{ width: '300px' }}>
        <h2>This is a popup</h2>
        <p>And this is a paragraph</p>
        <Button>ok</Button>
      </div>
    </Popup>
  );
};

Default.story = {
  name: 'default',
  parameters: {
    jest: ['Popup.test.tsx'],
  },
};
export default {
  title: 'Popup',
  component: Popup,
  decorators: [withTests({ results }), withKnobs],
};
