import { Timestamp } from 'firebase-admin/firestore';

export type TriplinksDocument = {
  name: string;
  password: string;
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
};

export type TriplinksRetrieve = {
  id: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export type TriplinksPost = {
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date | null;
};
