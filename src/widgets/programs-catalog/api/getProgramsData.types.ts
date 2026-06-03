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
  faculties: unknown;
  directions: unknown;
  eduForms: unknown;
  exams: unknown;
  programs: unknown;
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
