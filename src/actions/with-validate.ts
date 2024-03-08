'use server';

import type { Result, ServerAction, Validator } from './types';

// https://github.com/vercel/next.js/discussions/51139#discussioncomment-6149945

export const withValidate = <InferredData, QueryArg, ResultType = unknown>(
  validator: Validator<InferredData, QueryArg>,
  action: ServerAction<InferredData, ResultType>
) => {
  return async (args: QueryArg): Promise<Result<ResultType>> => {
    const result = validator(args);

    if (!result.success) {
      return {
        isSuccess: false,
        error: {
          type: 'ValidationError',
          errors: result.error.flatten((issue) => issue.message).fieldErrors,
        },
      };
    }

    return action(result.data);
  };
};
