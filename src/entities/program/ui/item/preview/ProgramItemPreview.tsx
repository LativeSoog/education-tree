import { CalendarIcon } from "@/assets/icons";
import { Notice } from "@/shared/ui/notice";
import { getProgramStudySchedule } from "../../../lib/getProgramStudySchedule";
import type { Program } from "../../../model/types";
import { ProgramBadges } from "../../badges/ProgramBadges";
import { ProgramProfiles } from "../../profiles/ProgramProfiles";
import S from "./ProgramItemPreview.module.scss";

type ProgramItemPreviewProps = Pick<
  Program,
  "direction" | "forms" | "profiles" | "studySchedule"
>;

export const ProgramItemPreview = ({
  direction,
  forms,
  profiles,
  studySchedule,
}: ProgramItemPreviewProps) => {
  return (
    <div className={S["program-preview"]}>
      <div className={S["program-preview__badges"]}>
        <ProgramBadges
          direction={direction}
          form={forms[0]}
        />
      </div>
      <div className={S["program-preview__profiles"]}>
        <ProgramProfiles profiles={profiles} />
        {studySchedule && (
          <Notice icon={<CalendarIcon />}>
            {getProgramStudySchedule(studySchedule)}
          </Notice>
        )}
      </div>
    </div>
  );
};
