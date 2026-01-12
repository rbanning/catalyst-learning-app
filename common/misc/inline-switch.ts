import { Nullable } from "../types";
import { primitive } from "../general";

// conditional (ternary) operator for Nullable<booleans>
//  three possible options
export function nullableTernary<T>(condition: Nullable<boolean>, trueValue: T, falseValue: T, nullishValue: T) {
  if (primitive.isNullish(condition)) { return nullishValue; }
  //else
  return condition ? trueValue : falseValue;
}

type MatchFunc<T> = (value: T) => boolean;
type MatchValue<T> = T;
type SwitcherPayload<T, K> = {match: MatchFunc<T> | MatchValue<T>, result: K};

export function inlineSwitch<T, K>(value: T, ...payload: SwitcherPayload<T,K>[] ): Nullable<K> {
  const found = payload.find(({match}) => {
    if (typeof(match) === 'function') {
      return (match as MatchFunc<T>)(value);
    } else {
      return match === value;
    }
  });
  if (found) { return found.result; }
  //else
  return null;
}

// ALTERNATIVE WAY OF DOING SWITCH

type MatchTuple<T, K> = [match: T, result: K];

export function inlineSwitchTuple<T, K>(value: T | null | undefined, ...payload: MatchTuple<T,K>[]) {  
  if (primitive.isNotNullish(value)) {
    const found = payload.find(([match]) => value === match);
    return found 
      ? found[1]  //the result
      : null;
  }
  
  //else
  return undefined; //flag value was nullish
}