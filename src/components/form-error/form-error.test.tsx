import { render, screen } from '@testing-library/react';

import { FormError } from './form-error';

describe('FormError', () => {
  test('propsに応じて表示される', () => {
    render(<FormError id="errorId" messages={['message1', 'message2']} />);

    const error = screen.getByRole('alert');

    // 複数メッセージは改行区切りで表示される
    expect(error.textContent).toBe('message1\nmessage2');

    // idを持つ
    expect(error).toHaveAttribute('id', 'errorId');
  });

  test('エラーメッセージを指定しない場合は表示されない', () => {
    render(<FormError id="errorId" />);

    // CSSの情報は取得できないのでクラスの付与有無で判定する
    expect(screen.getByRole('alert')).toHaveClass('disable');
  });
});
