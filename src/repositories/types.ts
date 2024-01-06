import { DocumentData, QueryDocumentSnapshot } from 'firebase-admin/firestore';

/**
 * Converterの型
 * Document: Firestoreに保存されている型
 * Retrieve: Firestoreから取得したときの型
 * Post: Firestoreに投げるときの型
 * Retrieve，PostとDocumentの差異をConverterが吸収する
 */
export type Converter<
  Document extends DocumentData,
  Retrieve extends DocumentData,
  Post extends DocumentData,
> = {
  toFirestore: (data: Post) => Document;
  fromFirestore: (snapshot: QueryDocumentSnapshot<Document>) => Retrieve;
};
