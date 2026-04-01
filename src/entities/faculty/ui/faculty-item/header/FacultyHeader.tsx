import { DoubleArrow, FacultyIcon } from "@/assets/icons";
import S from "./FacultyHeader.module.scss";
import cn from "classnames";

type FacultyHeaderProps = {
  isExpanded: boolean;
  onToggle: () => void;
};

export const FacultyHeader = ({ isExpanded, onToggle }: FacultyHeaderProps) => {
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
      <span className={S["faculty-header__name"]}>
        Институт изящных искусств. Художественно-графический факультет
      </span>
      <div className={S["faculty-header__more-wrapper"]}>
        <DoubleArrow className={S["faculty-header__more-icon"]} />
      </div>
    </button>
  );
};
