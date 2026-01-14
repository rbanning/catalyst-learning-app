import { AyContainer, AyContainerProps } from "../ay-container/ay-container";
import { AySurfaceProps, AySurface } from "../ay-surface/ay-surface";


export type AySectionProps = AyContainerProps & AySurfaceProps & {
  innerClassNames?: string;
}

//wraps transparent AyContainer in an AySurface
export function AySection({relative, verticalPadding, innerClassNames, ...props}: AySectionProps) {
  //sections should default with relative
  relative ??= true;
  
  return (
    <section>
      <AySurface {...props}>
        <AyContainer
          color="transparent"
          relative={relative}
          verticalPadding={verticalPadding ?? 'md'}
          className={innerClassNames}
        >
          {props.children}
        </AyContainer>
      </AySurface>
    </section>
  );
}
