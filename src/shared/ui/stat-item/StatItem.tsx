import type { ComponentPropsWithoutRef, ReactNode } from "react";
import S from "./StatItem.module.scss";
import cn from "classnames";

type StatItemProps = {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export const StatItem = ({
  icon,
  title,
  children,
  className,
  ...rest
}: StatItemProps) => {
  return (
    <div
      className={cn(S["stat-item"], className)}
      {...rest}>
      <div className={S["stat-item__header"]}>
        {icon && <span className={S["stat-item__icon"]}>{icon}</span>}
        <p className={S["stat-item__title"]}>{title}</p>
      </div>
      <div className={S["stat-item__body"]}>{children}</div>
    </div>
  );
};
