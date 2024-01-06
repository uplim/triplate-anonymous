import { Timestamp } from 'firebase-admin/firestore';

export type TriplinksDocumentType = {
  id: string;
  name: string;
  password: string;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
};

export type TriplinksType = {
  id: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date | null;
};
