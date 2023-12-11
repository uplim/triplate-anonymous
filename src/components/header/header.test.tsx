import { render, screen } from '@testing-library/react';

import { Header } from './header';

describe('header', () => {
  test('propsに応じて表示される', () => {
    render(<Header title="新しい旅程の作成" />);

    // 見出しが表示される
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      '新しい旅程の作成'
    );
  });
});
