import type { Metadata } from "next";
import "./globals.css";

// HACK: Make FontAwesome to Behave
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export const metadata: Metadata = {
  title: "Catalyst Learning",
  description: "Accelerate your strategic thinking with interactive scenarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
