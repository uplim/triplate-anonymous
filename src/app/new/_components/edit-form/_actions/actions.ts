'use server';

import { withValidate } from '@/actions/with-validate';

import { validator } from './validators';

import type { ServerAction } from '@/actions/types';

/**
 * 旅程を新規に作成する
 */
export const createTriplink: ServerAction<FormData, string> = withValidate(validator, async () => {
  try {
    return { isSuccess: true, data: '123' };
  } catch {
    return { isSuccess: false };
  }
});
