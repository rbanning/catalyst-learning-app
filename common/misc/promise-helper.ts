import { parsers } from "../general";

function delay(ms: number): Promise<boolean> {
  return new Promise<boolean>(resolve => setTimeout(() => {
    resolve(true);
  }, ms));
}

type AsyncFuncResult<T> = (...args: unknown[]) => Promise<T>;

function createAsyncFn<T>(action: (...args: unknown[]) => T): AsyncFuncResult<T> {
  return (...args: unknown[]): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      try {
        resolve(action(...args));      
      } catch (error) {
        reject(parsers.fromError(error) ?? 'Unknown error in .runAsync()');
      }
    })
  }
}



export const promiseHelper = {
  delay,
  createAsyncFn,
} as const;