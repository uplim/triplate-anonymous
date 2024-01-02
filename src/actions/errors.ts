export type ServerActionsErrorResponse = ValidationErrorResponse;

type ValidationErrorResponse = {
  type: 'ValidationError';
  message: string;
};
export class ValidationError extends Error {
  readonly message: string;

  constructor(message: string) {
    super('Validation Error');
    this.message = message;
  }

  static createFromError(error: ValidationErrorResponse) {
    return new ValidationError(error.message);
  }
}

export const createServerActionsError = (
  error: ServerActionsErrorResponse | undefined
) => {
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
