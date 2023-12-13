import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { EditField } from './edit-field';

describe('EditField', () => {
  test('propsに応じて表示される', () => {
    render(
      <EditField id="edit-field" label="label" description="description">
        <input />
      </EditField>
    );

    const field = screen.getByTestId('edit-field');

    expect(field).toHaveTextContent('label');
    expect(field).toHaveTextContent('description');

    // 子コンポーネントが表示されている
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('ラベルをクリックしたらinputがフォーカスされる', async () => {
    render(
      <EditField id="id" label="label">
        <input id="id" />
      </EditField>
    );

    await userEvent.click(screen.getByTestId('edit-field'));

    expect(screen.getByRole('textbox')).toHaveFocus();
  });
});
