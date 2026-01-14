export const base64 = {
  encode,
  decode,
} as const;

function encode(text: string): string {
  try {
    if (typeof(window) !== 'undefined' && 'btoa' in window) {
      return window.btoa(text);
    } else if (typeof(Buffer) !== 'undefined') {
      return Buffer.from(text || '').toString('base64');
    }    
  } catch (error) {
    console.warn("attempt to base64 encode a string", {error});
    //ignore
  }
  //else
  throw new Error('Unable to convert text to base64');
}

function decode(code: string): string {
  try {
    if (typeof(window) !== 'undefined' && 'atob' in window) {
      return window.atob(code);
    } else if (typeof(Buffer) !== 'undefined') {
      return Buffer.from(code, 'base64').toString('utf-8');
    }  
  } catch (error) {
    console.warn("attempt to base64 decode a string", {error});
    //ignore
  }
  //else
  throw new Error('Unable to convert code from base64');
}
