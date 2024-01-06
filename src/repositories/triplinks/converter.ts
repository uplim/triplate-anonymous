import 'server-only';

import { Timestamp } from 'firebase-admin/firestore';

import { Converter } from '@/repositories/types';

import { TriplinksDocument, TriplinksRetrieve, TriplinksPost } from './types';

export const converter: Converter<
  TriplinksDocument,
  TriplinksRetrieve,
  TriplinksPost
> = {
  toFirestore: (data) => ({
    name: data.name,
    password: data.password,
    createdAt: Timestamp.fromDate(data.createdAt),
    updatedAt: data.updatedAt ? Timestamp.fromDate(data.updatedAt) : null,
  }),
  fromFirestore: (snapshot) => {
    const data = snapshot.data();

    return {
      id: snapshot.id,
      name: data.name,
      password: data.password,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt ? data.updatedAt.toDate() : null,
    };
  },
};
