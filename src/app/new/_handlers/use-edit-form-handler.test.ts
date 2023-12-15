import { jest } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import { ChangeEvent } from 'react';

import { useEditFormHandler } from '../handlers./../_handlers/use-edit-form-handler';

describe('useEditFormHandler', () => {
  const setName = jest.fn();
  const setIsLoading = jest.fn();
  const setPassword = jest.fn();

  describe('handleChangeName', () => {
    test('旅程の入力状態を変更できる', () => {
      const { result } = renderHook(() =>
        useEditFormHandler({
          name: '',
          isLoading: false,
          password: '',
          setName,
          setIsLoading,
          setPassword,
        })
      );

      act(() => {
        result.current.handleChangeName({
          target: { value: 'updated name' },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(setName).toHaveBeenCalledWith('updated name');
    });
  });

  describe('handleChangePassword', () => {
    test('あいことばの入力状態を変更できる', () => {
      const { result } = renderHook(() =>
        useEditFormHandler({
          name: '',
          isLoading: false,
          password: '',
          setName,
          setIsLoading,
          setPassword,
        })
      );

      act(() => {
        result.current.handleChangePassword({
          target: { value: 'password' },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(setPassword).toHaveBeenCalledWith('password');
    });
  });
});
