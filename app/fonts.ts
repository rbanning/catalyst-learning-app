import { Cabin, Newsreader, Roboto_Serif } from 'next/font/google';

export const font_sans = Cabin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
});


export const font_serif = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif'
});


export const font_brand = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-brand'
});

