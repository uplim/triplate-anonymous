import { generateKeyPairSync } from 'node:crypto';

export default function setup() {
  process.env.TZ = 'Asia/Tokyo';

  // Firebase Admin SDK
  process.env.FIREBASE_PROJECT_ID = 'sample-id';
  process.env.FIREBASE_ADMIN_CLIENT_EMAIL = 'sample-email@example.com';
  process.env.FIREBASE_ADMIN_PRIVATE_KEY = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  }).privateKey;
}
