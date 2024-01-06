import 'server-only';

import {
  initializeApp,
  cert,
  ServiceAccount,
  getApps,
  getApp,
} from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { cache } from 'react';

const initFirebaseAdmin = () => {
  const serviceAccount: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  };

  const app =
    getApps().length === 0
      ? initializeApp({
          credential: cert(serviceAccount),
          storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
        })
      : getApp();

  return app;
};

export const getFirebaseAdmin = cache(() => {
  const app = initFirebaseAdmin();

  return {
    db: getFirestore(app),
    storage: getStorage(app),
  };
});
