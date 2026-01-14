import { Nullable } from "../types";
import { ThemeColorIntensity, ThemeColorOpacity } from '../styles';

export type CssKeyValuePair = {[key: string]: boolean};

export const combineCss = (...css: (Nullable<string> | Nullable<string>[] | CssKeyValuePair)[]) => {
  if (Array.isArray(css)) {
    return css.map(x => {
      if (typeof(x) === 'string') { return x; }
      if (Array.isArray(x)) { return x.join(' '); }
      if (x && typeof(x) === 'object') {
        return Object.keys(x).filter(key => x[key] === true).join(' ');
      }
      //else (don't recognize the element)
      return null; 
    })
    .filter(Boolean)  //remove any empty (or falsy)
    .join(' ');
  }
  //else (???)
  return '';
}


export function intensitySwitch(intensity: Nullable<ThemeColorIntensity>, defaultValue: string, lightValue: string, darkValue: string) {
  intensity ??= 'DEFAULT';
  switch(intensity) {
    case 'light': return lightValue;
    case 'dark': return darkValue;
    case 'DEFAULT': 
    default: 
      return defaultValue;
  }
}
export function opacitySwitch(opacity: Nullable<ThemeColorOpacity>, fullValue: string, mostlyValue: string, halfValue: string, quarterValue: string, minimalValue: string) {
  opacity ??= 'full';
  switch(opacity) {
    case 'half': return halfValue;
    case 'mostly': return mostlyValue;
    case 'quarter': return quarterValue;
    case 'minimal': return minimalValue;
    case 'full':
      return fullValue;

    default: 
      
  }
}


