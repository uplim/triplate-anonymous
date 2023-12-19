import 'server-only';

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { cache } from 'react';

const initFirebaseAdmin = () => {
  const encodedServiceAccountKey = Buffer.from(
    process.env.SERVICE_ACCOUNT_KEY || '',
    'base64'
  ).toString('utf8');
  const serviceAccountKey = JSON.parse(encodedServiceAccountKey);

  const serviceAccount = {
    projectId: serviceAccountKey.project_id,
    clientEmail: serviceAccountKey.client_email,
    privateKey: serviceAccountKey.private_key.replace(/\\n/g, '\n'),
  };

  initializeApp({
    credential: cert(serviceAccount),
    storageBucket: `${serviceAccountKey.project_id}.appspot.com`,
  });
};

export const getFirebaseAdmin = cache(() => {
  initFirebaseAdmin();

  return {
    firestore: getFirestore(),
    storage: getStorage(),
  };
});
