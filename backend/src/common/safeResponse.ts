export type SafeError = {
  e?: Error;
  statusCode?: number;
  message?: string;
};

export type SafeResponse<T, E = SafeError> =
  | [result: T, error: null]
  | [result: null, error: E];

export type PromiseSafeResponse<T, E = SafeError> = Promise<SafeResponse<T, E>>;

export function safeResult<T>(result: T): SafeResponse<T> {
  return [result, null];
}

export function safeError({
  e,
  statusCode = 500,
  message,
}: SafeError): SafeResponse<any, SafeError> {
  const error = {
    e: e,
    statusCode: statusCode,
    message: message,
  } satisfies SafeError;
  return [null, error];
}
