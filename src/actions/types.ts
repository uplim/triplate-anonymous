import type { z } from 'zod';

import type { ServerActionsErrorResponse } from './errors';

/**
 * Server Actionsの関数の型
 */
export type ServerAction<QueryArg = unknown, ResultType = unknown> = (
  args: QueryArg
) => Promise<Result<ResultType>>;

/**
 * フォームバリデーションする関数
 */
export type Validator<InferredData, QueryArg> = (
  formData: QueryArg
) => z.SafeParseReturnType<InferredData, InferredData>;

/**
 * Result型
 * https://dev.classmethod.jp/articles/error-handling-practice-of-typescript/
 */
export type Result<T> = Success<T> | Failure;

type Success<T> = {
  isSuccess: true;
  data?: T;
};

type Failure = {
  isSuccess: false;
  error?: ServerActionsErrorResponse;
};
