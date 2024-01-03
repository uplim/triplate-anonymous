'use server';

import { withValidate } from '@/actions/with-validate';
import { getFirebaseAdmin } from '@/functions/server/firebase/get-firebase';

import { validator } from './validators';

import type { ServerAction } from '@/actions/types';

const { db } = getFirebaseAdmin();

/**
 * 旅程を新規に作成する
 */
export const createTriplink: ServerAction = withValidate(async () => {
  try {
    const doc = db.collection('triplinks').doc();

    return { isSuccess: true };
  } catch {
    return { isSuccess: false };
  }
}, validator);
