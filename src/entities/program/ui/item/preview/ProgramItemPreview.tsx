import { CalendarIcon } from "@/assets/icons";
import { Notice } from "@/shared/ui/notice";
import { getProgramStudySchedule } from "../../../lib/getProgramStudySchedule";
import type { Program } from "../../../model/types";
import { ProgramBadges } from "../../badges/ProgramBadges";
import { ProgramProfiles } from "../../profiles/ProgramProfiles";
import S from "./ProgramItemPreview.module.scss";
import { Button } from "@/shared/ui/button";

type ProgramItemPreviewProps = {
  program: Pick<
    Program,
    "direction" | "forms" | "profiles" | "studySchedule" | "passingScore"
  > & {
    places: Pick<Program["places"], "budget" | "grant" | "paid">;
  };
  isExpanded: boolean;
  onToggle: () => void;
};

export const ProgramItemPreview = ({
  program,
  isExpanded,
  onToggle,
}: ProgramItemPreviewProps) => {
  const hasBudgetPlaces =
    program.places.budget !== null && program.places.budget > 0;
  const hasPaidPlaces = program.places.paid !== null && program.places.paid > 0;
  const hasGrantPlaces =
    program.places.grant !== null && program.places.grant > 0;
  const isPaidOnly = hasPaidPlaces && !hasBudgetPlaces && !hasGrantPlaces;
  const isNewProgram = program.passingScore === null;

  return (
    <div className={S["program-preview"]}>
      <div className={S["program-preview__badges"]}>
        <ProgramBadges
          direction={program.direction}
          form={program.forms[0]}
          isPaidOnly={isPaidOnly}
          hasGrantPlaces={hasGrantPlaces}
          isNewProgram={isNewProgram}
        />
      </div>
      <div className={S["program-preview__profiles"]}>
        <ProgramProfiles profiles={program.profiles} />
        {program.studySchedule && (
          <Notice icon={<CalendarIcon />}>
            {getProgramStudySchedule(program.studySchedule)}
          </Notice>
        )}
      </div>
      <div className={S["program-preview__more"]}>
        <Button
          className={S["program-preview__more-btn"]}
          variant="secondary"
          onClick={onToggle}>
          {isExpanded ? "Скрыть" : "Показать"} подробную информацию
        </Button>
      </div>
    </div>
  );
};
