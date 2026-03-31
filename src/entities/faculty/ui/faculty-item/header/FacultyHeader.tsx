import { DoubleArrow, FacultyIcon } from "@/assets/icons";
import S from "./FacultyHeader.module.scss";

export const FacultyHeader = () => {
  return (
    <button className={S["faculty-header"]}>
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
