import type { ReactElement, ReactNode } from "react";
import S from "./DetailItem.module.scss";
import cn from "classnames";

type DetailItemProps = {
  icon: ReactElement;
  title: string;
  children: ReactNode;
  className?: string;
};

export const DetailItem = ({
  icon,
  title,
  children,
  className,
}: DetailItemProps) => {
  return (
    <section className={cn(S["detail-item"], className)}>
      {icon && <span className={S["detail-item__icon"]}>{icon}</span>}
      <div className={S["detail-item__info"]}>
        <span className={S["detail-item__title"]}>{title}</span>
        <div className={S["detail-item__content"]}>{children}</div>
      </div>
    </section>
  );
};
