import { fetchJson } from "@/shared/lib/api/fetchJson";

import {
  createProgramsDataFileUrl,
  getProgramsDataBaseUrl,
} from "../lib/programsDataUrl";
import type {
  ProgramsData,
  ProgramsDataManifest,
  ProgramsDataResponse,
} from "./getProgramsData.types";

export const getProgramsData = async (
  manifestUrl: string
): Promise<ProgramsDataResponse> => {
  try {
    const manifest = await fetchJson<ProgramsDataManifest>(manifestUrl);
    const baseUrl = getProgramsDataBaseUrl(manifestUrl);

    const [faculties, directions, programs, eduForms, exams] =
      await Promise.all([
        fetchJson<ProgramsData["faculties"]>(
          createProgramsDataFileUrl(baseUrl, manifest.files.faculties)
        ),
        fetchJson<ProgramsData["directions"]>(
          createProgramsDataFileUrl(baseUrl, manifest.files.directions)
        ),
        fetchJson<ProgramsData["programs"]>(
          createProgramsDataFileUrl(baseUrl, manifest.files.programs)
        ),
        fetchJson<ProgramsData["eduForms"]>(
          createProgramsDataFileUrl(baseUrl, manifest.files.eduForms)
        ),
        fetchJson<ProgramsData["exams"]>(
          createProgramsDataFileUrl(baseUrl, manifest.files.exams)
        ),
      ]);

    return {
      ok: true,
      data: { faculties, directions, programs, eduForms, exams },
    };
  } catch (error) {
    const message = "Не удалось получить данные об образовательных программах";

    console.error(`Failed get programs data catalog`, error, message);

    return {
      ok: false,
      error: { message },
    };
  }
};
