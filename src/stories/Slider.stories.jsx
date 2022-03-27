import React from 'react';
import '../index.css';

import { Slider } from '../components/Slider';

export default {
  title: 'UIBuckets/Background',
  component: Slider,
  argTypes: {
    stepsize: { control: { type: 'number' } },
    data: { control: { type: 'object' } },
    minimum: { control: { type: 'number' } },
    maximum: { control: { type: 'number' } },
    slidervalue: { control: { type: 'number' } }

  }
};

const Template = (args) => <Slider {...args} />;

export const SliderPrimary = Template.bind({});
SliderPrimary.args = {
  minimum: 0,
  maximum: 100,
  slidervalue: 20,
  stepsize: 20,
  data: {}
};

