import { EditField } from '../../app/new/_components/edit-field/edit-field';
import { InputText } from '../input-text/input-text';

import { FormError } from './form-error';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof FormError> = {
  title: 'components/FormError',
  component: FormError,
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

type Story = StoryObj<typeof FormError>;

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
      <FormError id={id} message={message} />
    </EditField>
  ),
  args: {
    id: 'id',
    message: '必須です',
  },
};
