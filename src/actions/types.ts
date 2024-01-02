import { ServerActionsErrorResponse } from './errors';

/**
 * Server Actionsの関数の型
 * 移行コスト削減のためRTK Queryに型定義寄せる
 */
export type ServerAction<ResultType = unknown, QueryArg = FormData> = (
  args: QueryArg
) => Promise<Result<ResultType>>;

/**
 * フォームバリデーションする関数
 */
export type Validator<QueryArg = FormData> = (
  args: QueryArg
) => ServerActionsErrorResponse | null;

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
