import type { ComponentPropsWithoutRef } from "react";
import S from "./Input.module.scss";
import cn from "classnames";

type InputProps = {
  className?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "className">;

export const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      type="text"
      className={cn(S["input"], className)}
      {...rest}
    />
  );
};
