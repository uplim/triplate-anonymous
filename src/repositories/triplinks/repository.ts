import 'server-only';

import { randomUUID } from 'crypto';
import { getFirebaseAdmin } from '@/repositories/get-firebase';

import { cache } from 'react';
import { executeFirebaseOperation } from '../execute-firebase-operation';
import { converter } from './converter';
import { TriplinksType } from './types';

const { db } = getFirebaseAdmin();

export const findById = cache((triplinkId: string) =>
  executeFirebaseOperation(async () => {
    const res = await db.collection('triplinks').withConverter(converter).doc(triplinkId).get();

    return res.data();
  })
);

export const create = cache((data: Omit<TriplinksType, 'id'>) =>
  executeFirebaseOperation(async () => {
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
  })
);
