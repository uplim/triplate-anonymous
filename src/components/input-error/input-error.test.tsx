import { render, screen } from '@testing-library/react';

import { InputError } from './input-error';

describe('InputError', () => {
  test('指定したエラーメッセージが表示される', () => {
    render(<InputError id="errorId" message="error message" />);

    expect(screen.getByRole('alert')).toHaveTextContent('error message');
  });

  test('エラーメッセージを指定しない場合は表示されない', () => {
    render(<InputError id="errorId" />);

    expect(screen.getByRole('alert')).toHaveClass('disable');
  });
});
