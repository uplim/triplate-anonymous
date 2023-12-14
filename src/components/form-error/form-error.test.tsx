import { render, screen } from '@testing-library/react';

import { FormError } from './form-error';

describe('FormError', () => {
  test('指定したエラーメッセージが表示される', () => {
    render(<FormError id="errorId" message="error message" />);

    expect(screen.getByRole('alert')).toHaveTextContent('error message');
  });

  test('エラーメッセージを指定しない場合は表示されない', () => {
    render(<FormError id="errorId" />);

    expect(screen.getByRole('alert')).toHaveClass('disable');
  });
});
