import React from 'react';
import '../index.css';

import { Background } from '../components/Background';

export default {
  title: 'UIBuckets/Background',
  component: Background,
  argTypes: {
    width: { control: { type: 'text' } },
    height: { control: { type: 'text' } },
  }
};

const Template = (args) => <Background {...args} />;

export const BackgroundPrimary = Template.bind({});
BackgroundPrimary.args = {
  height: '200px',
  width: '300px',
};

