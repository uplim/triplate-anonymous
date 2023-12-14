import { EditField } from '../edit-field/edit-field';
import { InputText } from '../input-text/input-text';

import { InputError } from './input-error';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof InputError> = {
  title: 'components/InputError',
  component: InputError,
  argTypes: {
    id: {
      description:
        '一意のid。エラーとinputフィールドは紐づける必要があるため、idは必須で受け取る',
    },
    message: {
      description: 'エラーの文言',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputError>;

export const Default: Story = {
  args: {
    id: 'id',
    message: '必須です',
  },
};

export const WithInput: Story = {
  render: ({ id, message }) => (
    <EditField id={id} label="表示される名前">
      <InputText id={id} defaultValue="" onChange={() => 0} />
      <InputError id={id} message={message} />
    </EditField>
  ),
  args: {
    id: 'id',
    message: '必須です',
  },
};
