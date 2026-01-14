export const themeColorBasicList = ['neutral', 'primary', 'secondary', 'error'] as const;
export type ThemeColorBasic = typeof themeColorBasicList[number];

export const themeColorBlackWhite = ['black', 'white'] as const;
export type ThemeColorBlackWhite = typeof themeColorBlackWhite[number];

export const themeColorBGList = ['background', 'surface'] as const;
export type ThemeColorBG = typeof themeColorBGList[number];

export const themeColorBGWithTransparentList = [...themeColorBGList, 'transparent'] as const;
export type ThemeColorBGWithTransparent = typeof themeColorBGWithTransparentList[number];

export type ThemeColorFull = ThemeColorBasic | ThemeColorBlackWhite | ThemeColorBG ;
export type ThemeColorFullWithTransparent = ThemeColorFull | ThemeColorBlackWhite | ThemeColorBGWithTransparent;


export const themeColorIntensityList = ['DEFAULT', 'light', 'dark'] as const;
export type ThemeColorIntensity = typeof themeColorIntensityList[number];

export const themeColorOpacityList = ['full', 'mostly', 'half', 'quarter', 'minimal'] as const;
export type ThemeColorOpacity = typeof themeColorOpacityList[number];
