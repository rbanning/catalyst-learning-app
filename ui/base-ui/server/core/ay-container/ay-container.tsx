import { combineCss, inlineSwitchTuple, strHelp, themeSizeExpandedList } from '@/common';
import { AyBackground, AyBackgroundProps } from '../ay-background/ay-background';

const verticalPaddings = ['none', ...themeSizeExpandedList, 'massive'] as const;
type VerticalPadding = typeof verticalPaddings[number];

export interface AyContainerProps extends AyBackgroundProps {
  relative?: boolean;
  verticalPadding?: VerticalPadding;
}

export function AyContainer({
  color = 'background',
  intensity,
  opacity,
  relative = true,
  verticalPadding,
  ...props
}: AyContainerProps) {
  
  //validate vertical padding
  verticalPadding = strHelp.isStringUnionType<VerticalPadding>(verticalPadding, verticalPaddings)
    ? verticalPadding
    : undefined;

  const py = inlineSwitchTuple<VerticalPadding, string>(verticalPadding, 
    ['none', 'py-0'],
    ['xs', 'py-2'],
    ['sm', 'py-4'],
    ['md', 'py-8'],
    ['lg', 'py-12'],
    ['xl', 'py-18'],
    ['massive', 'py-24'],
  ) ?? '';

  return (
    <AyBackground
      color={color}
      intensity={intensity}
      opacity={opacity}
      className={combineCss(
        "view-area",
        py,
        relative ? 'relative' : '',
        props.className
      )}
    >
      {props.children}
    </AyBackground>
  );
}
