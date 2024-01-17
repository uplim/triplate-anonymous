export type FirebaseErrorType = {
  code: number;
  message: string;
  stack: string;
};

const ErrorCodeMap = {
  1: 'cancelled',
  2: 'unknown-error',
  3: 'invalid-argument',
  4: 'deadline-exceeded',
  5: 'not-found',
  6: 'already-exists',
  7: 'permission-denied',
  8: 'resource-exhausted',
  9: 'failed-precondition',
  10: 'aborted',
  11: 'out-of-range',
  13: 'internal-error',
  14: 'service-unavailable',
  15: 'data-loss',
  16: 'unauthenticated',
};

export class FirebaseError extends Error {
  readonly key: string;

  constructor(readonly code: number) {
    super('Firebase Error');

    this.key =
      code in ErrorCodeMap ? ErrorCodeMap[code as keyof typeof ErrorCodeMap] : ErrorCodeMap[2];
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
