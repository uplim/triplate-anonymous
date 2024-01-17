import { FirebaseError, isFirebaseError } from './errors';

export const executeFirebaseOperation = async (operation: () => Promise<any>): Promise<any> => {
  try {
    return await operation();
  } catch (error) {
    if (isFirebaseError(error)) {
      throw new FirebaseError(error.code);
    }

    throw error;
  }
};
