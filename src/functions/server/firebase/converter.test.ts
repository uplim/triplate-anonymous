import { DocumentData, FirestoreDataConverter } from 'firebase-admin/firestore';

import { converter } from './converter';

describe('converter', () => {
  test('データ形式を変えない', () => {
    const data = {
      foo: 'foo',
      bar: 'bar',
    };

    // toFirestore
    expect(converter<typeof data>().toFirestore(data)).toStrictEqual(data);

    // fromFirestore
    expect(
      converter<typeof data>().fromFirestore({
        data: () => data,
      } as any)
    ).toStrictEqual(data);
  });

  test('型引数に渡した型に推論される', () => {
    type Data = {
      foo: string;
    };

    const result = converter<Data>();

    expect(result).toEqualType<FirestoreDataConverter<Data, DocumentData>>();
  });
});
