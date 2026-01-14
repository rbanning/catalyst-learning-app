// FOR DEMO PURPOSES 
// Also used in our AI prompt to generate the color sets.

export type Color = `#${string}`;
export type ColorPair = {
  color: Color, on: Color
}

export type ColorVariantKey = 'DEFAULT' | 'light' | 'dark';
export type ColorVariantRecord = Record<ColorVariantKey, ColorPair>;

export type ColorSetKey = 'neutral' | 'primary' | 'secondary' | 'error' | 'surface';
export type ColorSet = Record<ColorSetKey, ColorVariantRecord>;
