import { FirebaseError, isFirebaseError } from './errors';

export const executeFirebaseOperation = async <T>(operation: () => Promise<T>) => {
  try {
    return await operation();
  } catch (error) {
    if (isFirebaseError(error)) {
      throw new FirebaseError(error.code);
    }

    throw error;
  }
};
