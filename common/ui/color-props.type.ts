import { Nullable } from '../types';
import { ThemeColorBasic, ThemeColorIntensity, ThemeColorOpacity } from "../styles/theme-colors"

export type ColorProps<TColor extends ThemeColorBasic = ThemeColorBasic> = {
  color: TColor;
  intensity?: Nullable<ThemeColorIntensity>;
  opacity?: Nullable<ThemeColorOpacity>;
}