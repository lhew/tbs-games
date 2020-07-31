import React from 'react';
import { withTests } from '@storybook/addon-jest';
import { withKnobs, optionsKnob } from '@storybook/addon-knobs';
import results from '../../.jest-test-results.json';
import FormField from '.';

export const Default = (): ReactElement => {
  // const isLoading = optionsKnob('Loading', { Yes: 'true', No: 'false' }, 'false', { display: 'inline-radio' });

  const align = optionsKnob(
    'Align',
    {
      Columns: 'columns',
      Rows: 'rows',
    },
    'rows',
    { display: 'inline-radio' },
  );

  const message = optionsKnob(
    'Message',
    {
      Yes: 'yes',
      No: 'no',
    },
    'no',
    { display: 'inline-radio' },
  );

  return (
    <>
      <FormField
        align={align}
        message={message === 'yes' && <span>There is a warning here</span>}
        label="Your name"
        name="name"
        type="email"
      />
    </>
  );
};

Default.story = {
  name: 'default',
  parameters: {
    jest: ['FormField.test.tsx'],
  },
};
export default {
  title: 'FormField',
  component: FormField,
  decorators: [withTests({ results }), withKnobs],
};
