import { PointerEvent } from "react";
import {
  PropsWithClassNameAndChildren,
  themeSizeList,
} from "@/common";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const buttonTypes = ["submit", "button", "reset"] as const;
export type ButtonType = (typeof buttonTypes)[number];

export const buttonSizeList = ["thin", ...themeSizeList] as const;
export type ButtonSize = (typeof buttonSizeList)[number];

export type ButtonBaseProps = PropsWithClassNameAndChildren & {
  type?: ButtonType;
  disabled?: boolean;
  title?: string;

  //specialized
  size?: ButtonSize;
  working?: boolean;
  workingIcon?: IconProp;
  onClick?: (e: PointerEvent<HTMLButtonElement>) => void;
};

