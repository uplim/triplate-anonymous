import { render, screen } from '@testing-library/react';

import { FormError } from './form-error';

describe('FormError', () => {
  test('propsに応じて表示される', () => {
    render(<FormError id="errorId" message="error message" />);

    const error = screen.getByRole('alert');

    expect(error).toHaveTextContent('error message');
    expect(error).toHaveAttribute('id', 'errorId');
  });

  test('エラーメッセージを指定しない場合は表示されない', () => {
    render(<FormError id="errorId" />);

    expect(screen.getByRole('alert')).toHaveClass('disable');
  });
});
