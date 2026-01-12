import { ThemeElevation, combineCss, inlineSwitchTuple } from '@/common';
import {
  AyBackground,
  AyBackgroundProps,
} from '../ay-background/ay-background';


export interface AySurfaceProps extends AyBackgroundProps {
  elevation?: ThemeElevation;
}

//set the background for an area (including elevation)
//note: does not contain the area within a specific width (e.g. page or au-container).  See AySection

export function AySurface({
  color = 'background',
  intensity,
  opacity,
  ...props
}: AySurfaceProps) {
  const shadow: string = inlineSwitchTuple<ThemeElevation, string>(props.elevation ?? 0, 
    [0, 'shadow-none'],
    [1, 'shadow-sm'],
    [2, 'shadow-md'],
    [3, 'shadow-lg'],
    [4, 'shadow-xl'],
    [5, 'shadow-2xl'],
  ) ?? '';

  return (
    <AyBackground
      color={color}
      intensity={intensity}
      opacity={opacity}
      className={combineCss(
        "relative",
        shadow,
        props.className
      )}
    >
      {props.children}
    </AyBackground>
  );
}
