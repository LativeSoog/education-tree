import type { ProgramStudySchedule } from "../model/types";

const studyScheduleText: Record<ProgramStudySchedule, string> = {
  sessions:
    "Обучение на образовательной программе проходит в сессионном формате",
  saturdays: "Обучение на образовательной программе проходит по субботам",
  mixed:
    "Обучение на образовательной программе проходит в сессионном формате/по субботам",
};

export const getProgramStudySchedule = (
  studySchedule: ProgramStudySchedule
) => {
  return studyScheduleText[studySchedule];
};
