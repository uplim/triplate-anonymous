'use server';

import { withValidate } from '@/actions/with-validate';

import { validator } from './validators';

import type { ServerAction } from '@/actions/types';

/**
 * 旅程を新規に作成する
 */
export const createTriplink: ServerAction = withValidate(async () => {
  try {
    return { isSuccess: true };
  } catch {
    return { isSuccess: false };
  }
}, validator);
