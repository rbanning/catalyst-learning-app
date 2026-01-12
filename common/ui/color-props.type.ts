import { ThemeColorBasic, ThemeColorIntensity, ThemeColorOpacity } from "../styles/theme-colors"

export type ColorProps<TColor extends string = ThemeColorBasic> = {
  color: TColor;
  intensity?: ThemeColorIntensity;
  opacity?: ThemeColorOpacity;
}