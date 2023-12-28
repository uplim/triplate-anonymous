/**
 * @jest-environment node
 */

import * as admin from 'firebase-admin/app';
import * as adminFirestore from 'firebase-admin/firestore';
import * as adminStorage from 'firebase-admin/storage';

import { getFirebaseAdmin } from './get-firebase';

jest.unmock('./get-firebase');

describe('getFirebaseAdmin', () => {
  test('Firebase Admin SDKの初期化処理が呼ばれる', () => {
    const mockInitializeApp = jest.spyOn(admin, 'initializeApp');
    const mockCert = jest.spyOn(admin, 'cert');
    const mockDb = jest.spyOn(adminFirestore, 'getFirestore');
    const mockStorage = jest.spyOn(adminStorage, 'getStorage');

    // まだ初期化されていない
    expect(mockInitializeApp).not.toHaveBeenCalled();
    expect(mockDb).not.toHaveBeenCalled();
    expect(mockStorage).not.toHaveBeenCalled();

    // 初期化する
    getFirebaseAdmin();

    // certに環境変数で指定した値が渡されていることを確認
    expect(mockCert).toHaveBeenCalledWith({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
    });

    // 初期化処理が呼ばれる
    expect(mockInitializeApp).toHaveBeenCalled();
    expect(mockDb).toHaveBeenCalled();
    expect(mockStorage).toHaveBeenCalled();
  });
});
