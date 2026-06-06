import type { Program } from "../../model/types";
import { ProgramBadges } from "../badges/ProgramBadges";
import { ProgramCapacity } from "../capacity/ProgramCapacity";
import { ProgramDetails } from "../details/ProgramDetails";
import { ProgramExams } from "../exams/ProgramExams";
import { ProgramSpecializations } from "../specializations/ProgramSpecializations";
import S from "./ProgramItem.module.scss";

type ProgramItemProps = {
  program: Program;
};

export const ProgramItem = ({ program }: ProgramItemProps) => {
  console.log(program);
  return (
    <div className={S["program-content"]}>
      <div className={S["program-content__badges"]}>
        <ProgramBadges
          direction={program.direction}
          form={program.forms[0]}
        />
      </div>
      <div className={S["program-content__specializations"]}>
        <ProgramSpecializations profiles={program.profiles} />
      </div>
      <div className={S["program-content__details"]}>
        <ProgramDetails
          duration={program.duration}
          passingScore={program.passingScore}
          tuitionFees={program.tuitionFees}
        />
      </div>
      <div className={S["program-content__capacity"]}>
        <ProgramCapacity places={program.places} />
      </div>
      <div className={S["program-content__exams"]}>
        <ProgramExams examGroups={program.examGroups} />
      </div>
    </div>
  );
};
