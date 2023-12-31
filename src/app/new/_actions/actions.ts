'use server';

import type { ServerAction } from '@/actions/types';

/**
 * 旅程を新規に作成する
 */
export const createTriplink: ServerAction = async (formData) => {
  try {
    return { isSuccess: true };
  } catch {
    return { isSuccess: false };
  }
};
