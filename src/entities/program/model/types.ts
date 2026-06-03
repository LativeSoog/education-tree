import type { Exam, ExamType } from "@/entities/exam";

export type Program = {
  id: string;
  direction: ProgramDirection;
  profiles: string[];
  forms: ProgramEduForm[];
  duration: string;
  passingScore: number | null;
  tuitionFees: number | null;
  places: ProgramPlaces;
  examGroups: [];
};

export type ProgramPlaces = {
  budget: number | null;
  specialQuote: number | null;
  separateQuote: number | null;
  targetQuote: number | null;
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

export type ProgramExamGroup = {
  type: ExamType;
  items: ProgramExamItem[];
};

export type ProgramExamItem = {
  priority: number;
  exams: Exam[];
};
