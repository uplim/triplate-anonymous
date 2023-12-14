import { InputText } from '../../../../components/input-text/input-text';

import { EditField } from './edit-field';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof EditField> = {
  title: 'pages/new/EditField',
  component: EditField,
  argTypes: {
    id: {
      description: 'labelにつける一意なid。input要素などと同じidをつける',
    },
    label: {
      description: 'labelとして表示される文字',
    },
    description: {
      description: 'labelの横に表示される説明文',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EditField>;

export const Default: Story = {
  args: {
    id: 'input-text',
    label: '自己紹介',
    description: '任意',
  },
};

export const WithInput: Story = {
  render: (props) => (
    <EditField {...props}>
      <InputText id={props.id} defaultValue="" onChange={() => 0} />
    </EditField>
  ),
  args: {
    id: 'input-text',
    label: '自己紹介',
    description: '任意',
  },
};
