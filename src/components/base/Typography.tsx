import { cn } from "@/lib/utils";
import {
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

type TypographyStyling =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "base"
  | "lead"
  | "large"
  | "small";

const stylingMap: Record<TypographyStyling, string> = {
  h1: "text-4xl lg:text-5xl tracking-tight",
  h2: "text-3xl tracking-tight",
  h3: "text-2xl tracking-tight",
  h4: "text-xl tracking-tight",
  base: "leading-7",
  lead: "text-xl",
  large: "text-lg",
  small: "text-sm",
};

type Props = {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  styling?: TypographyStyling;
  isMuted?: boolean;
};

export type TypographyProps = ComponentPropsWithRef<"p"> & Props;

const TypographyComponent: ForwardRefRenderFunction<
  HTMLParagraphElement,
  TypographyProps
> = (props, ref) => {
  const { level: Level = "p", styling = "base", isMuted, children } = props;

  return (
    <Level
      ref={ref}
      className={cn(stylingMap[styling], isMuted && "text-muted-foreground")}
    >
      {children}
    </Level>
  );
};

export const Typography = forwardRef(TypographyComponent);
