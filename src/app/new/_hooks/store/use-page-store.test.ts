import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { usePageStore } from './use-page-store';

describe('usePageStore', () => {
  test('storeの初期値が指定した値である', () => {
    const { result } = renderHook(() => usePageStore());

    expect(result.current.name).toBe('');
    expect(result.current.password).toBe('');
    expect(result.current.isLoading).toBe(false);
  });

  test('それぞれの状態を更新できる', () => {
    const { result } = renderHook(() => usePageStore());

    // setNameを実行するとnameの状態が更新される
    expect(result.current.name).toBe('');
    act(() => result.current.setName('name'));
    expect(result.current.name).toBe('name');

    // setPasswordを実行するとpasswordの状態が更新される
    expect(result.current.password).toBe('');
    act(() => result.current.setPassword('password'));
    expect(result.current.password).toBe('password');

    // setIsLoadingを実行するとisLoadingの状態が更新される
    expect(result.current.isLoading).toBe(false);
    act(() => result.current.setIsLoading(true));
    expect(result.current.isLoading).toBe(true);
  });
});
