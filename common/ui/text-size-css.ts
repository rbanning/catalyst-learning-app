import { ThemeSizeExpanded } from "../styles";

export function textSizeCss(size: ThemeSizeExpanded) {
  switch(size) {
    case 'xs': return 'text-xs';
    case 'sm': return 'text-sm';
    case 'md': return 'text-base';
    case 'lg': return 'text-xl';
    case 'xl': return 'text-2xl';
    default: 
      throw new Error(`Unsupported text size: ${size}`);
  }
}