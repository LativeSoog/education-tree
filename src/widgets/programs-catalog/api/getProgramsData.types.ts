import type { Exam } from "@/entities/exam";
import type { Faculty } from "@/entities/faculty/model/types";
import type {
  ProgramDirection,
  ProgramEduForm,
} from "@/entities/program/model/types";
import type { ProgramDto } from "./getProgramsData.dto";

export type ProgramsDataManifest = {
  version: string;
  files: {
    faculties: string;
    directions: string;
    eduForms: string;
    exams: string;
    programs: string;
  };
};

export type ProgramsData = {
  faculties: Faculty[];
  directions: ProgramDirection[];
  eduForms: ProgramEduForm[];
  exams: Exam[];
  programs: ProgramDto[];
};

type ProgramsDataResponseSuccess = {
  ok: true;
  data: ProgramsData;
};

type ProgramsDataResponseError = {
  ok: false;
  error: { message: string };
};

export type ProgramsDataResponse =
  | ProgramsDataResponseSuccess
  | ProgramsDataResponseError;
