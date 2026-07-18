import { CalendarIcon } from "@/assets/icons";
import { Notice } from "@/shared/ui/notice";
import { getProgramStudySchedule } from "../../../lib/getProgramStudySchedule";
import type { Program } from "../../../model/types";
import { ProgramBadges } from "../../badges/ProgramBadges";
import { ProgramProfiles } from "../../profiles/ProgramProfiles";
import S from "./ProgramItemPreview.module.scss";
import { Button } from "@/shared/ui/button";

type ProgramItemPreviewProps = {
  program: Pick<Program, "direction" | "forms" | "profiles" | "studySchedule">;
  isExpanded: boolean;
  onToggle: () => void;
};

export const ProgramItemPreview = ({
  program,
  isExpanded,
  onToggle,
}: ProgramItemPreviewProps) => {
  return (
    <div className={S["program-preview"]}>
      <div className={S["program-preview__badges"]}>
        <ProgramBadges
          direction={program.direction}
          form={program.forms[0]}
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
