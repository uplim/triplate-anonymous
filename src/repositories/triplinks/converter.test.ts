import { Timestamp } from 'firebase-admin/firestore';

import { converter } from './converter';

describe('converter', () => {
  test('データ送信時、createdAtとnullでないupdatedAtをTimestamp型に変換する', () => {
    const date = '2024-01-06T10:03:40.573Z';

    const data = {
      id: 'id',
      name: 'たびの名前',
      password: 'password',
      createdAt: new Date(date),
      updatedAt: new Date(date),
    };

    // createdAtとupdatedAtをTimestamp型に変換する
    expect(converter.toFirestore(data)).toStrictEqual({
      id: data.id,
      name: data.name,
      password: data.password,
      createdAt: Timestamp.fromDate(data.createdAt),
      updatedAt: Timestamp.fromDate(data.updatedAt),
    });

    // updatedAtがnullの時はnullを送る
    expect(converter.toFirestore({ ...data, updatedAt: null })).toHaveProperty(
      'updatedAt',
      null
    );
  });

  test('データ取得時、createdAtとnullでないupdatedAtをDate型に変換する', () => {
    const date = '2024-01-06T10:03:40.573Z';
    const docId = '54df372a-6a45-420e-a117-fa6e41f106f5';

    const data = {
      id: 'id',
      name: 'たびの名前',
      password: 'password',
      createdAt: Timestamp.fromDate(new Date(date)),
      updatedAt: Timestamp.fromDate(new Date(date)),
    };

    // createdAtとupdatedAtをDate型に変換する
    expect(
      converter.fromFirestore({
        data: () => data,
      } as any)
    ).toStrictEqual({
      id: data.id,
      name: data.name,
      password: data.password,
      createdAt: new Date(date),
      updatedAt: new Date(date),
    });

    // updatedAtがnullの時はnullを返す
    expect(
      converter.fromFirestore({
        data: () => ({ ...data, updatedAt: null }),
        id: docId,
      } as any)
    ).toHaveProperty('updatedAt', null);
  });
});
