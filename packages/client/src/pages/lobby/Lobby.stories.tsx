import React from 'react';
// import { action } from '@storybook/addon-actions';
import Home from '.';
import { ReactElement } from 'react';

export const Default = (): ReactElement => {
  return <Home />;
};

Default.story = {
  name: 'default',
  parameters: {
    jest: ['Home.test.tsx'],
  },
};

export default {
  title: 'Home',
  component: Home,
};
