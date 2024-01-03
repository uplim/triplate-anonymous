import 'server-only';

import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  WithFieldValue,
} from 'firebase-admin/firestore';

/**
 * firestoreを型安全に利用するためのconverter
 * 型をつけるだけでconverter自体はデータ形式を変えない
 */
export const converter = <
  T extends DocumentData,
>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: WithFieldValue<T>) => {
    return data;
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<T>) => {
    return snapshot.data();
  },
});
