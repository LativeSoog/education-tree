import type { ExamType } from "@/entities/exam";
import type { ProgramPlaces } from "@/entities/program/model/types";

export type ProgramDto = {
  id: string;
  facultyId: string;
  directionId: string;
  profiles: string[];
  formIds: string[];
  duration: string;
  passingScore: number | null;
  tuitionFees: number | null;
  places: ProgramPlaces;
  examGroups: ProgramExamGroupDto[];
};

type ProgramExamGroupDto = {
  type: ExamType;
  items: ProgramExamItemDto[];
};

type ProgramExamItemDto = {
  priority: number;
  examIds: string[];
};
