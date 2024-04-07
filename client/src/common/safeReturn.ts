export type UISafeReturn<T, E = Error> =
  | [result: T, error: null]
  | [result: null, error: E];

export type PromiseSafeResponse<T, E = Error> = Promise<UISafeReturn<T, E>>;

export function uiSafeResult<T>(result: T): UISafeReturn<T> {
  return [result, null];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function uiSafeError(e: Error): UISafeReturn<any, Error> {
  return [null, e];
}
