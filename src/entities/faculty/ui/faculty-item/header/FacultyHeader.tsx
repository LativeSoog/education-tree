import { DoubleArrow, FacultyIcon } from "@/assets/icons";
import S from "./FacultyHeader.module.scss";
import cn from "classnames";
import type { Faculty } from "@/entities/faculty/model/types";

type FacultyHeaderProps = {
  name: Faculty["name"];
  isExpanded: boolean;
  onToggle: () => void;
};

export const FacultyHeader = ({
  name,
  isExpanded,
  onToggle,
}: FacultyHeaderProps) => {
  return (
    <button
      className={cn(
        S["faculty-header"],
        isExpanded && S["faculty-header_expanded"]
      )}
      onClick={onToggle}>
      <div className={S["faculty-header__icon-wrapper"]}>
        <FacultyIcon className={S["faculty-header__icon"]} />
      </div>
      <span className={S["faculty-header__name"]}>{name}</span>
      <div className={S["faculty-header__more-wrapper"]}>
        <DoubleArrow className={S["faculty-header__more-icon"]} />
      </div>
    </button>
  );
};
