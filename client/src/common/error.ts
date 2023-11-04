export type SafeResult<T, E = Error> =
  | [result: T, error: null]
  | [result: null, error: E];
export type PromiseSafeResult<T, E = Error> = Promise<SafeResult<T, E>>;

export function safeResult<T>(result: T): SafeResult<T> {
  return [result, null];
}

export function safeError(error: Error): SafeResult<null, Error> {
  return [null, error];
}
