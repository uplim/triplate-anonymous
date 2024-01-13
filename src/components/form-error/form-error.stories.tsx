import { EditField } from '../../app/new/_components/edit-field/edit-field';
import { InputText } from '../input-text/input-text';

import { FormError } from './form-error';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormError> = {
  title: 'components/FormError',
  component: FormError,
  argTypes: {
    id: {
      description: '一意のid。エラーとinputフィールドは紐づける必要があるため、idは必須で受け取る',
    },
    messages: {
      description: 'エラーの文言を配列で受け取る',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormError>;

export const Default: Story = {
  args: {
    id: 'id',
    messages: ['必須です'],
  },
};

export const WithInput: Story = {
  render: ({ id, messages }) => (
    <EditField id={id} label="表示される名前">
      <InputText id={id} defaultValue="" />
      <FormError id={id} messages={messages} />
    </EditField>
  ),
  args: {
    id: 'id',
    messages: ['必須です', '20文字以内にしてください'],
  },
};
