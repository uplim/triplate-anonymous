import { Header } from './header';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'components/Header',
  component: Header,
  argTypes: {
    title: {
      description: 'headerに表示される文字',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
export const WithTitle: Story = {
  args: {
    title: '新しい旅程の作成',
  },
};
