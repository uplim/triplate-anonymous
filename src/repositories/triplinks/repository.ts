import 'server-only';

import { randomUUID } from 'crypto';

import { getFirebaseAdmin } from '@/repositories/get-firebase';

import { converter } from './converter';
import { TriplinksType } from './types';

const { db } = getFirebaseAdmin();

export const findById = async (triplinkId: string) => {
  const data = await db.collection('triplinks').withConverter(converter).doc(triplinkId).get();

  return data.data();
};

export const create = async (data: Omit<TriplinksType, 'id'>) => {
  const docId = randomUUID();

  await db
    .collection('triplinks')
    .withConverter(converter)
    .doc(docId)
    .create({
      ...data,
      id: docId,
    });

  return docId;
};
