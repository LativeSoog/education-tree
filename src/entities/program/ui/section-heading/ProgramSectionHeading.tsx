import type { ReactNode } from "react";
import S from "./ProgramSectionHeading.module.scss";

type ProgramSectionHeadingProps = {
  icon: ReactNode;
  children: ReactNode;
};

export const ProgramSectionHeading = ({
  icon,
  children,
}: ProgramSectionHeadingProps) => {
  return (
    <div className={S["program-heading"]}>
      <span className={S["program-heading__icon"]}>{icon}</span>
      <h3 className={S["program-heading__title"]}>{children}</h3>
    </div>
  );
};
