import { z } from 'zod';

export type ServerActionsErrorResponse = ValidationErrorResponse | FirebaseErrorResponse;

type ValidationErrorResponse = {
  type: 'ValidationError';
  errors: z.typeToFlattenedError<any, string>['fieldErrors'];
};

type FirebaseErrorResponse = {
  type: 'FirebaseError';
  errors: {
    code: number;
    key: string;
  };
};

export class ValidationError extends Error {
  readonly errors: ValidationErrorResponse['errors'];

  constructor(errorResponse: ValidationErrorResponse) {
    super('Validation Error');
    this.errors = errorResponse.errors;
  }

  static createFromError(errorResponse: ValidationErrorResponse) {
    return new ValidationError(errorResponse);
  }
}

export class FirebaseError extends Error {
  readonly errors: FirebaseErrorResponse['errors'];

  constructor(errorResponse: FirebaseErrorResponse) {
    super('Firebase Error');
    this.errors = errorResponse.errors;
  }

  static createFromError(errorResponse: FirebaseErrorResponse) {
    return new FirebaseError(errorResponse);
  }
}

export const createServerActionsError = (error: ServerActionsErrorResponse | undefined) => {
  if (isValidationError(error)) {
    return ValidationError.createFromError(error);
  }

  if (isFirebaseError(error)) {
    return FirebaseError.createFromError(error);
  }

  return new Error(error);
};

const isValidationError = (
  errorResponse: ServerActionsErrorResponse | undefined
): errorResponse is ValidationErrorResponse => {
  return errorResponse?.type === 'ValidationError';
};

const isFirebaseError = (
  errorResponse: ServerActionsErrorResponse | undefined
): errorResponse is FirebaseErrorResponse => {
  return errorResponse?.type === 'FirebaseError';
};
