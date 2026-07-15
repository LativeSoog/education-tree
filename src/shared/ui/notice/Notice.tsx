import type { ReactElement, ReactNode } from "react";
import S from "./Notice.module.scss";
import cn from "classnames";

type NoticeProps = {
  icon?: ReactElement;
  children: ReactNode;
  variant?: "info";
  className?: string;
};

export const Notice = ({
  icon,
  children,
  variant = "info",
  className,
}: NoticeProps) => {
  return (
    <div className={cn(S["notice"], S[`notice_${variant}`], className)}>
      {icon && <span className={S["notice__icon"]}>{icon}</span>}
      <div className={S["notice__content"]}>{children}</div>
    </div>
  );
};
