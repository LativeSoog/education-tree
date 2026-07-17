import type { Exam, ExamType } from "@/entities/exam";

export type Program = {
  id: string;
  direction: ProgramDirection;
  profiles: string[];
  forms: ProgramEduForm[];
  studySchedule?: ProgramStudySchedule;
  duration: string;
  passingScore: number | null;
  tuitionFees: number | null;
  places: ProgramPlaces;
  examGroups: ProgramExamGroup[];
};

export type ProgramPlaces = {
  budget: number | null;
  specialQuota: number | null;
  separateQuota: number | null;
  targetQuota: number | null;
  grant: number | null;
  paid: number | null;
};

export type ProgramDirection = {
  id: string;
  code: string;
  name: string;
  level: "bachelor" | "specialty";
};

export type ProgramEduForm = {
  id: string;
  name: string;
  shortName: string;
};

export type ProgramStudySchedule = "sessions" | "saturdays" | "mixed";

export type ProgramExamGroup = {
  type: ExamType;
  items: ProgramExamItem[];
};

export type ProgramExamItem = {
  priority: number;
  exams: Exam[];
};
