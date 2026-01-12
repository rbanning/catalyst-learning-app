import { PropsWithChildren } from "react";
import { Nullable } from "../types"

export type PropsWithClassName<P = unknown> = P & {
  className?: Nullable<string>
};

export type PropsWithClassNameAndChildren<P = unknown> = PropsWithClassName<PropsWithChildren<P>>;