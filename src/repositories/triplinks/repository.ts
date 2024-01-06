import 'server-only';

import { randomUUID } from 'crypto';

import { getFirebaseAdmin } from '@/functions/server/firebase/get-firebase';

import { converter } from './converter';
import { TriplinksPost } from './types';

const { db } = getFirebaseAdmin();

export const findById = async (triplinkId: string) => {
  const data = await db
    .collection('triplinks')
    .withConverter(converter)
    .doc(triplinkId)
    .get();

  return data.data();
};

export const create = async (data: TriplinksPost) => {
  const docId = randomUUID();

  await db
    .collection('triplinks')
    .withConverter(converter)
    .doc(docId)
    .create(data);

  return docId;
};
