'use server';

import { Result, ServerAction, Validator } from './types';

// https://github.com/vercel/next.js/discussions/51139#discussioncomment-6149945

type WithValidate<ResultType = unknown, QueryArg = FormData> = (
  action: ServerAction<ResultType, QueryArg>,
  validator: Validator<QueryArg>
) => ServerAction<ResultType, QueryArg>;

export const withValidate: WithValidate = (action, validator) => {
  return async (args) => {
    const error = validator(args);

    if (error) {
      return { isSuccess: false, error };
    }

    return action(args);
  };
};
