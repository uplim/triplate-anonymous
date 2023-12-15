import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button';

describe('Button', () => {
  test('渡したテキストが描画される', () => {
    render(<Button>Button Click!</Button>);

    expect(screen.getByRole('button')).toHaveTextContent('Button Click!');
  });
  test('variantがcontainedのボタンが表示できる', () => {
    // size md
    render(
      <Button variant="contained" size="md">
        variant contained size md
      </Button>
    );

    // variantがcontainedでsizeがmdのクラスが当たっている
    expect(screen.getByRole('button')).toHaveClass(
      'base variant-contained size-md'
    );
  });
  test('disable時、ボタンを押せないがtabキーでのフォーカスは当たる', async () => {
    const handleClick = jest.fn();

    render(<Button aria-disabled="true" onClick={handleClick} />);

    const button = screen.getByRole('button');

    // tabキーを押す
    await userEvent.tab();

    // フォーカスが当たる
    expect(button).toHaveFocus();

    // inputとタイプ
    await userEvent.click(button);

    // イベントハンドラが呼ばれない
    expect(handleClick).not.toHaveBeenCalled();
  });
});
