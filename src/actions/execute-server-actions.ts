// https://speakerdeck.com/mugi_uno/next-dot-js-app-router-deno-mpa-hurontoendoshua-xin?slide=62

import { createServerActionsError } from './errors';
import { Result } from './types';

export const executeServerActions = async <T>(action: () => Promise<Result<T>>) => {
  const res: Result<T> | undefined = await action();

  if (res?.isSuccess) {
    return res;
  }

  throw createServerActionsError(res?.error);
};
