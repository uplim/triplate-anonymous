type FirebaseErrorType = {
  code: number;
  message: string;
  stack: string;
};

export class FirebaseError extends Error {
  constructor(
    readonly code: number,
    readonly message: string,
    readonly stack: string
  ) {
    super(stack);
  }
}

export function isFirebaseError(error: unknown): error is FirebaseErrorType {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    'message' in error &&
    'stack' in error
  );
}
