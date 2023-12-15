import { ChangeEventHandler, useCallback } from 'react';

import { Actions, State } from '../_store/use-page-store';

export type HandlerArgsType = State & Actions;

export const useEditFormHandler = ({
  setName,
  setPassword,
  setIsLoading,
}: State & Actions) => {
  const handleChangeName: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName]
  );

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        setPassword(e.target.value);
      },
      [setPassword]
    );

  const handleSaveTriplink = useCallback(async () => {
    try {
      setIsLoading(true);

      // repository層で保存処理
    } catch (e) {
      console.error(e);
    }
  }, [setIsLoading]);

  return {
    handleChangeName,
    handleChangePassword,
    handleSaveTriplink,
  };
};
