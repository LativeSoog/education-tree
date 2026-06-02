import { fetchJson } from "@/shared/lib/api/fetchJson";
import type {
  ProgramsCatalogData,
  ProgramsCatalogDataResponse,
  ProgramsCatalogManifest,
} from "./types";
import {
  createProgramsDataFileUrl,
  getProgramsDataBaseUrl,
} from "../lib/programsDataUrl";

export const getProgramsData = async (
  manifestUrl: string
): Promise<ProgramsCatalogDataResponse> => {
  try {
    const manifest = await fetchJson<ProgramsCatalogManifest>(manifestUrl);
    const baseUrl = getProgramsDataBaseUrl(manifestUrl);

    const [faculties, directions, programs, eduForms, exams] =
      await Promise.all([
        fetchJson<ProgramsCatalogData["faculties"]>(
          createProgramsDataFileUrl(baseUrl, manifest.files.faculties)
        ),
        fetchJson<ProgramsCatalogData["directions"]>(
          createProgramsDataFileUrl(baseUrl, manifest.files.directions)
        ),
        fetchJson<ProgramsCatalogData["programs"]>(
          createProgramsDataFileUrl(baseUrl, manifest.files.programs)
        ),
        fetchJson<ProgramsCatalogData["eduForms"]>(
          createProgramsDataFileUrl(baseUrl, manifest.files.eduForms)
        ),
        fetchJson<ProgramsCatalogData["exams"]>(
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
