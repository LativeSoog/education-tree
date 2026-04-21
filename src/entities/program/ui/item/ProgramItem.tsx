import { ProgramBadges } from "../badges/ProgramBadges";
import { ProgramDetails } from "../details/ProgramDetails";
import { ProgramSpecializations } from "../specializations/ProgramSpecializations";
import S from "./ProgramItem.module.scss";

export const ProgramItem = () => {
  return (
    <div className={S["program-content"]}>
      <div className={S["program-content__badges"]}>
        <ProgramBadges />
      </div>
      <div className={S["program-content__specializations"]}>
        <ProgramSpecializations />
      </div>
      <div className={S["program-content__details"]}>
        <ProgramDetails />
      </div>
    </div>
  );
};
