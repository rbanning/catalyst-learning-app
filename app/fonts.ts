import { Newsreader, Noto_Sans_Display, Roboto_Serif } from 'next/font/google';

export const font_sans = Noto_Sans_Display({
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

