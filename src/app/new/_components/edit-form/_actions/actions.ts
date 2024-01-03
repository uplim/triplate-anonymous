'use server';

import { withValidate } from '@/actions/with-validate';
import { converter } from '@/functions/server/firebase/converter';
import { getFirebaseAdmin } from '@/functions/server/firebase/get-firebase';

import { validator } from './validators';

import type { ServerAction } from '@/actions/types';

const { db } = getFirebaseAdmin();

/**
 * 旅程を新規に作成する
 */
export const createTriplink: ServerAction<FormData> = withValidate(
  validator,
  async (data) => {
    try {
      await db
        .collection('triplinks')
        .doc()
        .withConverter(converter<typeof data>())
        .create(data);

      return { isSuccess: true };
    } catch {
      return { isSuccess: false };
    }
  }
);
