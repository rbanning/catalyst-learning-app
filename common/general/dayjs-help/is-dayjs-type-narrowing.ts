import dayjs from 'dayjs';

/* Test for some common properties in dayjs */
interface DayJsIsh { isValid: () => boolean, format: () => string}
export function isDayJsTypeNarrowing(value: unknown): value is dayjs.Dayjs { 
  return !!value &&
     typeof((value as DayJsIsh).isValid) === 'function' && (value as DayJsIsh).isValid() === true
     && typeof((value as DayJsIsh).format) === 'function' && typeof((value as DayJsIsh).format()) === 'string';
}
