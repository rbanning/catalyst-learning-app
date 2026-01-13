"use client";

import { useCallback, useState, PointerEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

import { combineCss } from "@/common";
import { ButtonBaseProps } from "./button-props.type";


export function ButtonBase({
  size,
  working,
  workingIcon,
  onClick,

  className,
  children,
 ...props  
} : ButtonBaseProps) {
  const [active, setActive] = useState<boolean>(false);

  //set defaults
  workingIcon ??= faAsterisk;
  //... if no size if provided, do not give default

  const handleClick = useCallback((e: PointerEvent<HTMLButtonElement>) => {
    setActive(true);
    if (typeof(onClick) === 'function') {
      onClick(e);
    }    
  }, [onClick]);


  return <button
    {...props}
    onClick={handleClick}
    onAnimationEnd={() => { setActive(false); }}
    className={combineCss(
      'button-base',
      size ? `_${size}` : '',
      active 
        ? 'active'
        : (working
            ? 'cursor-none'
            : 'cursor-pointer'
        ),
      className      
    )}
    >
      {working && (
        <FontAwesomeIcon icon={faAsterisk} className="animate-spin" />
      )}
      {children}
    </button>
}
