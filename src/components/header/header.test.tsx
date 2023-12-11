import { render, screen } from '@testing-library/react';

import { Header } from './header';

describe('header', () => {
  test('propsに応じて表示される', () => {
    render(<Header title="header title" />);

    // 見出しが表示される
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'header title'
    );
  });
});
