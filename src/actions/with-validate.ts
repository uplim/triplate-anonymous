'use server';

import { Result, ServerAction, Validator } from './types';

// https://github.com/vercel/next.js/discussions/51139#discussioncomment-6149945

export const withValidate = <InferredData, QueryArg, ResultType = unknown>(
  validator: Validator<InferredData, QueryArg>,
  action: ServerAction<InferredData, ResultType>
) => {
  return async (args: QueryArg): Promise<Result<ResultType>> => {
    const result = validator(args);

    if (!result.isParsed) {
      return {
        isSuccess: false,
        error: result.error,
      };
    }

    return action(result.data);
  };
};
