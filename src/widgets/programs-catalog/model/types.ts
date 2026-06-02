export type ProgramsCatalogManifest = {
  version: string;
  files: {
    faculties: string;
    directions: string;
    eduForms: string;
    exams: string;
    programs: string;
  };
};

export type ProgramsCatalogData = {
  faculties: unknown;
  directions: unknown;
  eduForms: unknown;
  exams: unknown;
  programs: unknown;
};

export type ProgramsCatalogDataError = {
  message: string;
};

export type ProgramsCatalogDataResponse =
  | {
      ok: true;
      data: ProgramsCatalogData;
    }
  | {
      ok: false;
      error: ProgramsCatalogDataError;
    };
