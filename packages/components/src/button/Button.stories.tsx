import React from 'react';
import { action } from '@storybook/addon-actions';
import { withTests } from '@storybook/addon-jest';
import { withKnobs, optionsKnob } from '@storybook/addon-knobs';
import results from '../../.jest-test-results.json';
import Button from '.';

export const Default = () => {
  // const isLoading = optionsKnob('Loading', { Yes: 'true', No: 'false' }, 'false', { display: 'inline-radio' });

  const sizes = optionsKnob(
    'Sizes',
    {
      Default: 'default',
      Small: 'small',
      Large: 'large',
    },
    'default',
    { display: 'inline-radio' },
  );

  return (
    <>
      <Button size={sizes} onClick={action('clicked')}>
        Hello user
      </Button>
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
  title: 'Button',
  component: Button,
  decorators: [withTests({ results }), withKnobs],
};
