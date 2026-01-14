export const hAlignOptions = ['left', 'center', 'right'] as const;
export const vAlignOptions = ['top', 'middle', 'bottom'] as const;

export type HAlign = typeof hAlignOptions[number];
export type VAlign = typeof vAlignOptions[number];
