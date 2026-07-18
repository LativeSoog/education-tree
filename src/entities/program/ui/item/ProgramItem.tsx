import type { Program } from "../../model/types";
import { ProgramItemContent } from "./content/ProgramItemContent";
import { ProgramItemPreview } from "./preview/ProgramItemPreview";
import S from "./ProgramItem.module.scss";

type ProgramItemProps = {
  program: Program;
};

export const ProgramItem = ({ program }: ProgramItemProps) => {
  return (
    <div className={S["program-item"]}>
      <ProgramItemPreview
        direction={program.direction}
        forms={program.forms}
        profiles={program.profiles}
        studySchedule={program.studySchedule}
      />
      <ProgramItemContent
        duration={program.duration}
        passingScore={program.passingScore}
        tuitionFees={program.tuitionFees}
        places={program.places}
        examGroups={program.examGroups}
      />
    </div>
  );
};
