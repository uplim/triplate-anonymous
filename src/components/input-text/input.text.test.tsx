import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { InputText } from './input-text';

describe('InputText', () => {
  test('propsに応じて表示される', () => {
    render(
      <InputText
        id="input-text"
        name="input-text"
        defaultValue="default value"
        placeholder="placeholder"
        aria-labelledby="input-text"
        aria-describedby="error-id"
        aria-invalid={false}
        aria-disabled={false}
      />
    );

    const textbox = screen.getByRole('textbox');

    expect(textbox).toHaveValue('default value');
    expect(textbox).toHaveAttribute('id', 'input-text');
    expect(textbox).toHaveAttribute('name', 'input-text');
    expect(textbox).toHaveAttribute('placeholder', 'placeholder');
    expect(textbox).toHaveAttribute('aria-labelledby', 'input-text');
    expect(textbox).toHaveAttribute('aria-describedby', 'error-id');
    expect(textbox).toHaveAttribute('aria-invalid', 'false');
    expect(textbox).toHaveAttribute('aria-disabled', 'false');
  });

  test('disable時は入力ができないが、tabキーでのフォーカスは当たる', async () => {
    render(<InputText defaultValue="" aria-disabled="true" />);

    const input = screen.getByRole('textbox');

    // tabキーを押す
    await userEvent.tab();

    // フォーカスが当たる
    expect(input).toHaveFocus();

    // inputとタイプ
    await userEvent.type(input, 'input');
  });
});
