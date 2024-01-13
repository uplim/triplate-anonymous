import { Button } from './button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    type: {
      description: 'button、submit、resetが入る。デフォルトはbutton',
    },
    variant: {
      description: '見た目の種類',
    },
    size: {
      description: '大きさ',
    },
    children: {
      description: 'ボタンに表示されるテキスト',
    },
    'aria-disabled': {
      description:
        '無効で編集操作ができない状態の時trueにする。無効だがtabでのフォーカスは当たるので、知覚できる',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => (
    <div>
      <h2>Contained</h2>
      <Button {...props} variant="contained" size="md">
        size md
      </Button>
      <Button {...props} aria-disabled="true" variant="contained" size="md">
        disabled
      </Button>
    </div>
  ),
  args: {
    'aria-disabled': 'false',
  },
};
