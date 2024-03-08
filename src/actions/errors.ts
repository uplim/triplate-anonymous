import type { z } from 'zod';

export type ServerActionsErrorResponse = ValidationErrorResponse;

type ValidationErrorResponse = {
  type: 'ValidationError';
  errors: z.typeToFlattenedError<any, string>['fieldErrors'];
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

export const createServerActionsError = (error: ServerActionsErrorResponse | undefined) => {
  if (isValidationError(error)) {
    return ValidationError.createFromError(error);
  }

  return new Error(error);
};

const isValidationError = (
  errorResponse: ServerActionsErrorResponse | undefined
): errorResponse is ValidationErrorResponse => {
  return errorResponse?.type === 'ValidationError';
};
