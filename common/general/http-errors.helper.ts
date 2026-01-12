import { Nullable } from "../types";
import { objHelp } from "./obj-help";
import { primitive } from "./primitive";

export function parseGeneralError(error: unknown, subParse?: boolean): Nullable<string> {
  if (error) {
    //if the error is a string, we are all set.
    if (typeof(error) === 'string') { return error; }

    //if the error is an array parse each of its elements (recursively) and join
    if (Array.isArray(error)) {
      return error.map(x => parseGeneralError(x, true))
        .filter(Boolean)
        .join(": ") || null;
    }

    //if the error is an object, parse each of its properties (recursively) and join
    if (primitive.isObject(error)) {
      if (!subParse) {
        //first check to see if error object has "known" error properties
        //  if any are found, parse them.
        const ret = ['message', 'reason', 'error', 'errors', 'code'].map(key => {
          return (key in error) ? parseGeneralError(error[key], true) : null;
        }).filter(Boolean);
  
        //if any "known" properties resulted in a parsed error, return them
        if (ret.length > 0) { return ret.join('; '); }
      }

      //otherwise... parse each of the properties of the object
      return objHelp.keysOf(error)
        .reduce((ret, key) => {
          ret.push(parseGeneralError(error[key]));
          return ret;
        }, [] as Nullable<string>[])
        .filter(Boolean)
        .join('; ') || null;
    }
  }
  //else
  return null;
}
