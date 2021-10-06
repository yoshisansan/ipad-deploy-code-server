import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Board from '../components/molecular/Board'

export default {
  title: 'Example/Button',
  component: Board,
  argTypes: {
    squares: { control: 'squares' },
  },
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: true,
  label: 'Button',
};
