import type { ExamType } from "@/entities/exam";
import type {
  ProgramPlaces,
  ProgramStudySchedule,
} from "@/entities/program/model/types";

export type ProgramDto = {
  id: string;
  facultyId: string;
  directionId: string;
  profiles: string[];
  formIds: string[];
  studySchedule?: ProgramStudySchedule;
  duration: string;
  passingScore: number | null;
  tuitionFees: number | null;
  places: ProgramPlaces;
  examGroups: ProgramExamGroupDto[];
};

export type ProgramExamGroupDto = {
  type: ExamType;
  items: ProgramExamItemDto[];
};

export type ProgramExamItemDto = {
  priority: number;
  examIds: string[];
};
