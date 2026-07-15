import type { Program } from "../../model/types";
import { ProgramBadges } from "../badges/ProgramBadges";
import { ProgramCapacity } from "../capacity/ProgramCapacity";
import { ProgramDetails } from "../details/ProgramDetails";
import { ProgramProfiles } from "../profiles/ProgramProfiles";
import { ProgramExams } from "../exams/ProgramExams";
import S from "./ProgramItem.module.scss";
import { Notice } from "@/shared/ui/notice";
import { CalendarIcon } from "@/assets/icons";

type ProgramItemProps = {
  program: Program;
};

export const ProgramItem = ({ program }: ProgramItemProps) => {
  return (
    <div className={S["program-content"]}>
      <div className={S["program-content__badges"]}>
        <ProgramBadges
          direction={program.direction}
          form={program.forms[0]}
        />
      </div>
      <div className={S["program-content__profiles"]}>
        <ProgramProfiles profiles={program.profiles} />
        <Notice icon={<CalendarIcon />}>
          Обучение на образовательной программе проходит по субботам
        </Notice>
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
