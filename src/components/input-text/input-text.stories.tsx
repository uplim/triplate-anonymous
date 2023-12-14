import { useState } from 'react';

import { InputText, InputTextProps } from './input-text';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof InputText> = {
  title: 'components/InputText',
  component: InputText,
  argTypes: {
    id: {
      description: '一意なid。labelと同じ値を指定する',
    },
    placeholder: {
      description: '初期値が空の時に表示されているテキスト',
    },
    defaultValue: {
      description: '初期値',
    },
    onChange: {
      description: '入力時に呼ばれるイベントハンドラ',
    },
    'aria-labelledby': {
      description:
        'この要素のラベルを参照するためのid。labelと同じidを指定する',
    },
    'aria-describedby': {
      description:
        'この要素を説明するテキストを参照するためのid。基本的に説明する要素はないため、errorが表示されている時のみその要素のidを指定する',
    },
    'aria-invalid': {
      description: '不正な値が入力されたらtrueにする',
    },
    'aria-disabled': {
      description:
        '無効で編集操作ができない状態の時trueにする。無効だがtabでのフォーカスは当たるので、知覚できる',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputText>;

const DefaultTemplate = ({
  defaultValue,
  placeholder,
  ...ariaAttributes
}: InputTextProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <InputText
      defaultValue={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      aria-disabled={ariaAttributes['aria-disabled']}
      aria-invalid={ariaAttributes['aria-invalid']}
    />
  );
};

export const Default: Story = {
  render: DefaultTemplate,
  args: {
    placeholder: 'ともだちと京都旅行',
    defaultValue: '',
    'aria-invalid': 'false',
    'aria-disabled': 'false',
  },
};

export const Invalid: Story = {
  render: InputText,
  args: {
    defaultValue:
      'ロングロング文字ロングロング文字ロングロング文字ロングロング文字',
    'aria-invalid': 'true',
  },
};

export const Disabled: Story = {
  render: InputText,
  args: {
    placeholder: 'ともだちと京都旅行',
    defaultValue: '',
    'aria-disabled': 'true',
  },
};
