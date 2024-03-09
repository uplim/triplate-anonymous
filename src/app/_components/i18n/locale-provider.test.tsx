import { render, renderHook } from '@testing-library/react';
import { type ReactNode, useContext } from 'react';

import { initI18next } from '@/functions/client/i18n/init-i18next';

import { LocaleContext, LocaleProvider } from './locale-provider';

describe('LocaleContext', () => {
  test('初期値が設定される', () => {
    const { result } = renderHook(() => useContext(LocaleContext));

    expect(result.current).toBe('ja');
  });

  test('localeを設定できる', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <LocaleProvider locale="ja">{children}</LocaleProvider>
    );
    const { result } = renderHook(() => useContext(LocaleContext), {
      wrapper,
    });

    // LocaleProviderのlocaleにセットした値が設定されている
    expect(result.current).toBe('ja');
  });

  test('i18nextの初期化処理が呼ばれる', async () => {
    render(<LocaleProvider locale="ja">children</LocaleProvider>);

    expect(initI18next).toHaveBeenCalled();
  });
});
