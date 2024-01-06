'use server';

import { withValidate } from '@/actions/with-validate';
import * as triplinksAPI from '@/repositories/triplinks/repository';

import { validator } from './validators';

import type { ServerAction } from '@/actions/types';

/**
 * 旅程を新規に作成する
 */
export const createTriplink: ServerAction<FormData, string> = withValidate(
  validator,
  async (data) => {
    try {
      const id = await triplinksAPI.create({
        ...data,
        createdAt: new Date(),
        updatedAt: null,
      });
      return { isSuccess: true, data: id };
    } catch {
      return { isSuccess: false };
    }
  }
);
