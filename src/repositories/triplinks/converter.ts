import 'server-only';

import { Timestamp } from 'firebase-admin/firestore';

import { Converter } from '@/repositories/types';

import { TriplinksType, TriplinksDocumentType } from './types';

export const converter: Converter<TriplinksDocumentType, TriplinksType> = {
  toFirestore: (data) => ({
    id: data.id,
    name: data.name,
    password: data.password,
    createdAt: Timestamp.fromDate(data.createdAt),
    updatedAt: data.updatedAt ? Timestamp.fromDate(data.updatedAt) : null,
  }),
  fromFirestore: (snapshot) => {
    const data = snapshot.data();

    return {
      id: data.id,
      name: data.name,
      password: data.password,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt ? data.updatedAt.toDate() : null,
    };
  },
};
