import { notFound } from 'next/navigation';
import { FirebaseError, isFirebaseError } from './errors';

export const executeFirebaseOperation = async <T>(operation: () => Promise<T>) => {
  try {
    const res = await operation();

    if (res) {
      return res;
    }

    return notFound();
  } catch (error) {
    if (isFirebaseError(error)) {
      throw new FirebaseError(error.code);
    }

    throw error;
  }
};
