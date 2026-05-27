import type { ComponentPropsWithoutRef } from "react";
import S from "./Button.module.scss";
import cn from "classnames";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

export const Button = ({
  variant,
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(S["button"], S[`button_${variant}`], className)}
      {...rest}>
      {children}
    </button>
  );
};
