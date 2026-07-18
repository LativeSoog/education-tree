import type { Program } from "../../../model/types";
import { ProgramCapacity } from "../../capacity/ProgramCapacity";
import { ProgramDetails } from "../../details/ProgramDetails";
import { ProgramExams } from "../../exams/ProgramExams";
import S from "./ProgramItemContent.module.scss";

type ProgramItemContentProps = Pick<
  Program,
  "duration" | "passingScore" | "tuitionFees" | "places" | "examGroups"
>;

export const ProgramItemContent = ({
  duration,
  passingScore,
  tuitionFees,
  places,
  examGroups,
}: ProgramItemContentProps) => {
  return (
    <div className={S["program-content"]}>
      <div className={S["program-content__details"]}>
        <ProgramDetails
          duration={duration}
          passingScore={passingScore}
          tuitionFees={tuitionFees}
        />
      </div>
      <div className={S["program-content__capacity"]}>
        <ProgramCapacity places={places} />
      </div>
      <div className={S["program-content__exams"]}>
        <ProgramExams examGroups={examGroups} />
      </div>
    </div>
  );
};
