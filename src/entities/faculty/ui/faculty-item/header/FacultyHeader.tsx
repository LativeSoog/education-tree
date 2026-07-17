import { FacultyIcon } from "@/assets/icons";
import { ArrowDash } from "@/assets/icons/arrows";
import S from "./FacultyHeader.module.scss";
import cn from "classnames";
import type { Faculty } from "@/entities/faculty/model/types";
import { pluralizeNumber } from "@/shared/lib/format/pluralizeNumber";

type FacultyHeaderProps = {
  name: Faculty["name"];
  totalProfiles: number;
  isExpanded: boolean;
  onToggle: () => void;
};

export const FacultyHeader = ({
  name,
  totalProfiles,
  onToggle,
}: FacultyHeaderProps) => {
  return (
    <button
      type="button"
      className={S["faculty-header"]}
      onClick={onToggle}>
      <span className={S["faculty-header__icon"]}>
        <FacultyIcon />
      </span>
      <div className={S["faculty-header__content"]}>
        <span className={S["faculty-header__name"]}>{name}</span>
        <div className={S["faculty-header__info"]}>
          <span className={S["faculty-header__programs-count"]}>
            {`${totalProfiles} ${pluralizeNumber(totalProfiles, ["программа", "программы", "программ"])}`}
          </span>
          <span className={S["faculty-header__toggle"]}>
            Нажмите чтобы развернуть
          </span>
        </div>
      </div>
      <span className={S["faculty-header__more"]}>
        <ArrowDash />
      </span>
    </button>
  );
};
