import { Header } from './header';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'header',
  component: Header,
  argTypes: {
    title: {
      description: 'headerに表示される文字',
    }
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
