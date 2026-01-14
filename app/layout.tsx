import type { Metadata } from "next";
// fonts
import { font_sans, font_serif, font_brand } from './fonts';

import "./globals.css";

// HACK: Make FontAwesome to Behave
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export const metadata: Metadata = {
  title: "Catalyst Learning",
  description: "Accelerate your strategic thinking with interactive scenarios",
  creator: "Hallpass and Friends"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font_sans.variable} ${font_serif.variable} ${font_brand.variable}`}>
      <head>
        <link rel="icon" href="/app-images/catalyst-32.png" sizes="any" />
        <link rel="icon" href="/app-images/catalyst.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/app-images/catalyst-128.png" type="image/png" sizes="128x128" />
        <link rel="apple-touch-icon" href="/app-images/catalyst-512.png" type="image/png" sizes="512x512" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
