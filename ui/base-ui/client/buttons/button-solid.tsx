"use client";

import {
  bgColorCss,
  combineCss,
  textOnColorCss,
  ThemeColorFull,
  ThemeColorIntensity,
  ThemeColorOpacity,
} from "@/common";
import { ButtonBaseProps } from "./button-props.type";
import { ButtonBase } from "./button-base";

export type ButtonSolidProps = ButtonBaseProps & {
  color: ThemeColorFull;
  intensity?: ThemeColorIntensity;
  opacity?: ThemeColorOpacity;
};

export function ButtonSolid({
  color,
  intensity,
  opacity,

  children,
  ...props
}: ButtonSolidProps) {
  //build background and text colors
  const bgCss = `${bgColorCss(color, intensity, opacity)} more-contrast:${bgColorCss(color)}`;  
  const textCss = textOnColorCss(color, intensity, opacity);

  return (
    <ButtonBase
      {...props}
      className={combineCss("button-base", "button-solid", bgCss, textCss)}
    >
      {children}
    </ButtonBase>
  );
}
