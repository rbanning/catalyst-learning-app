import { Nullable } from '../types/nullable';
import { isNullish, primitive } from "./primitive";
import { randomize, randomString } from './str-random.utility';
import { replaceAll } from './str-replace-all.utility';

const NEWLINE = '\n';

export const strHelp = {
  SITE: "catalyst-learning.hallpassandfriends.com",
  NEWLINE,

  //transform    
  singularize,
  pluralize,
  capitalize,
  reverse,
  toSlug,
  slugify,
  slugToTitle,
  generateEntityCode,

  //parts of a string
  firstCharacter,
  lastCharacter,
  substr,

  //Replace/Convert
  replaceAll,
  trimByChars,
  trimByWords,
  combine,
  padFrontOfNumber,
  currency,

  //random
  randomize,
  randomString,
  generateUUID,

  //Obfuscation
  toBase64,
  fromBase64,
  hash,

  //checks
  count,
  compare,
  equals,

  //advanced
  isStringUnionType,

} as const;



//#region >> Transform Strings:  Pluralize, Capitalize, Reverse, Slug, GenerateEntityCode <<

function singularize(word: string): string {
  //todo: either a) handle the English exceptions or b) use https://github.com/blakeembrey/pluralize
  const exceptions = ["ous"];
  const hasException = primitive.isNotNullish(exceptions.find(ex => word.endsWith(ex)));
  
  if (!hasException && word.endsWith('s')) {
    word = word.substring(0, word.length - 1);      //needs to be more robust to handle exceptions
  }

  return word;
}

//*** pluralize() */
  //  USAGE (taken from https://github.com/blakeembrey/pluralize)
  //  word: the word to make plural
  //  count: optional, used to conditionally make the word plural
  //      (e.g. count === 1, leave singular, else make plural)
  //      (if count is an array, leave singular if count.filter(Boolean).length === 1)
  //  inclusive: optional, if true, include the number in the output (e.g. 3 ducks)
  function pluralize(word: string, count?: number | unknown[], inclusive: boolean = false): string {
    //todo: either a) handle the English exceptions or b) use https://github.com/blakeembrey/pluralize
    const es_pattern = /^.*([sxz]|(sh)|(ch))$/g;
    const vowelY_pattern = /^.*([aeiou]y)$/g;
    const consonantO_pattern = /^.*(a-z&&[^aeiou]o)$/g;

    const addS = ['monarch', 'stomach', 'tech'];
    const ignore = ['fish'];

    if (!word) { return ''; }

    const original = word.toLocaleLowerCase();
    const num = Array.isArray(count) ? count.filter(Boolean).length 
      : (typeof(count) === 'number' ? count : 0);

    if (inclusive === true && typeof(num) === 'number') {
      word = `${num} ${word}`;
    }
    if (num !== 1 && !ignore.includes(original)) {
      if (addS.includes(original) || original.match(vowelY_pattern)) {
        word += 's';
      } else if (original.match(es_pattern) || original.match(consonantO_pattern)) {
        word += 'es';
      } else if (lastCharacter(word) === 'y') {
        word = `${word.substring(0, word.length - 1)}ies`;
      } else {
        word += 's';      //needs to be more robust to handle exceptions
      }
    }
    return word;
  }

function capitalize(word: string, all: boolean = false): string {
  if (word) {
    if (all) {
      return word.split(' ').map(m => capitalize(m, false)).join(' ');
    } else {
      return word.charAt(0).toLocaleUpperCase() + word.substr(1);
    }
  }

  //else
  return word;
}


function reverse(text: string): string {
  if (text) {
    return text.split('').reverse().join('');
  }
  //else
  return '';
}

function toSlug(title: unknown) {
  return slugify(title)
}

//https://gist.github.com/codeguy/6684588
function slugify(value: unknown) {
  let str = `${value ?? ''}`.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to   = "aaaaeeeeiiiioooouuuunc------";
  for (let i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

  return str;
}

function slugToTitle(value: unknown) {
  const str = `${value ?? ''}`.replace(/-/g, ' ').replace(/_/g, ' '); // replace dashes and underscores with spaces
  return capitalize(str, true); // capitalize each word
}


//generates STUB
//  -- string as lowercase 
//  -- replacing spaces with '-'
//  --  removing any non alphanumeric chars
function generateEntityCode(text: string): string {
  if (text) {
    return text.trim().toLocaleLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9\-_]/gi, '');
  }
  //else
  return '';
}



//#endregion



//#region >>> Parts of a String ... First, Last, Sub <<<

function firstCharacter(word: string): string {
  return !word ? '' : word.charAt(0); // word[0];
}

//use in pluralize below
function lastCharacter(word: string) {
  return !word ? '' : word.charAt(word.length - 1); // word[word.length - 1];
}

//string.substr is depreciated but is SO useful
function substr(text: string, startIndex: number, length: number): string {
  if (text && startIndex < text.length) {
    //endIndex represents the first index NOT to be included
    const endIndex = Math.min(startIndex + length, text.length); //do not exceed the end of the string
    return text.substring(startIndex, endIndex);  
  }
  //else
  return '';
}


//#endregion


//#region >>> Replace/Convert ... replaceAll, convertHtmlEntities, trimByWords, combine

function trimByChars(text: string, chars: number, ellipsis: string = '...'): string {
  if (text) {
    const trimmed = text.substring(0, chars);
    return trimmed.length < text.length ? `${trimmed}${ellipsis}` : trimmed;
  }
  //else
  return text;
}
function trimByWords(text: string, words: number, ellipsis: string = '...'): string {
  if (text) {
    const trimmed = text.split(' ').slice(0, words).join(' ');
    return trimmed.length < text.length ? `${trimmed}${ellipsis}` : trimmed;
  }
  //else
  return text;
}

function combine(...args: unknown[]) {
  return {
    with(delim: string): string {
      if (Array.isArray(args)) {
        return args
          .filter(m => !!m)
          .map(a => `${a}`).join(delim);
      }
      //else
      return '';
    }
  }
}

function padFrontOfNumber(num: number, totalLength: number, char: string = "0") {
  let result = `${num}`;
  while (result.length < totalLength) {
    result = char + result;
  }
  return result;
}

function currency(amount: number, inclDecimal: boolean = true, symbol: string = '$') {
  let ret = `${symbol}${Math.floor(amount)}`;
  if (inclDecimal) {
    const decimal = Math.floor(amount % 1 * 100);
    ret += `.${padFrontOfNumber(decimal, 2)}`;
  }
  return ret;
}

//#endregion


//#region Random ... randomize, randomString, generateUUID

//see str-random.utility.ts

function generateUUID(inclDashes: boolean = true): string {
  let uuid = "";
  let random: number;    

  for (let i = 0; i < 32; i++) {      
    // tslint:disable-next-line: no-bitwise
    random = Math.random() * 16 | 0;        

    if (inclDashes && (i === 8 || i === 12 || i === 16 || i === 20)) {        
        uuid += "-";      
    }

    // tslint:disable-next-line: no-bitwise
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);    
  }   

  return uuid;  
}



//#endregion



//#region >>> Obfuscation, toBase64, fromBase64, hash <<<

function toBase64(text: string): string {
  if (typeof(window) !== 'undefined' && 'btoa' in window) {
    return window.btoa(text);
  } else if (typeof(Buffer) !== 'undefined') {
    return Buffer.from(text || '').toString('base64');
  }
  //else
  throw new Error('Unable to convert text to base64');
}

function fromBase64(code: string): string {
  if (typeof(window) !== 'undefined' && 'atob' in window) {
    return window.atob(code);
  } else if (typeof(Buffer) !== 'undefined') {
    return Buffer.from(code, 'base64').toString('utf-8');
  }
  //else
  throw new Error('Unable to convert code from base64');
}

function hash(text: Nullable<string>, fn: HashAlgo = 'hash53') {
  switch (fn) {
    case 'hash31': return hashFn_31(text);
    case 'hash53': return hashFn_53(text);
    default: throw new Error(`Hash algorithm (${fn}) has not been implemented`);
  }
}


//#endregion


//#region >>> Checks ... count, compare, equals <<<

function count(target: string, countWhat?: string) {
  if (primitive.isNullish(countWhat)) {
    return target.length;
  }
      
  //else
  let index = target.indexOf(countWhat);
  let count = 0;
  while (index >= 0) {
    count += 1;
    index = target.indexOf(countWhat, index+1);
  }
  return count;
}

function compare(a: unknown, b: unknown, ignoreCase: boolean = false): number {
  
  if (!primitive.isNullish(a) && !primitive.isNullish(b)) {
    const aStr = `${a}`,
          bStr = `${b}`;
    return ignoreCase 
      ? aStr.toLocaleLowerCase().localeCompare(bStr.toLocaleLowerCase()) 
      : aStr.localeCompare(bStr);
  }

  //one or both is nullish so
  return isNullish(a) && isNullish(b) 
    ? 0 
    : isNullish(a) 
      ? -1 
      : 1;
}

function equals(a: unknown, b: unknown, ignoreCase: boolean = false): boolean {
  if (!primitive.isNullish(a) && !primitive.isNullish(b)) {
    const aStr = `${a}`,
          bStr = `${b}`;
    return ignoreCase 
      ? aStr.toLocaleLowerCase() === bStr.toLocaleLowerCase()
      : aStr === bStr;
  }
  //else (a or b is Nullish)
  return false;
}


//#endregion


//#region >>> ADVANCED <<<

function isStringUnionType<T extends string>(value: unknown, possible: Readonly<T[]>): value is T {
  return !isNullish(
      possible.find(p => equals(p, value, false /* case-sensitive */))
  );
}

//#region >> HELPERS <<


// --------------------------------- HASH FUNCTIONS ---------------------------- //
export type HashAlgo = 'hash31' | 'hash53';

//https://stackoverflow.com/a/7616484/15093838
function hashFn_31(text: Nullable<string>): Nullable<number> {
  if (!text) { return null; }

  let hash = 0;
  for(let i=0; i < text.length; i++) {
    hash = ((hash << 5) - hash) + (text.charCodeAt(i));
    hash |= 0; //convert to 32bit int
  }
  return hash;
}

//https://stackoverflow.com/a/52171480/15093838
function hashFn_53(text: Nullable<string>, seed = 0): Nullable<number> {
  if (!text) { return null; }

  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < text.length; i++) {
    ch = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

//#endregion -- Helpers