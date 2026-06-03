import type { Faculty } from "@/entities/faculty/model/types";
import type { Program } from "@/entities/program/model/types";

export type ProgramsCatalogData = CatalogFaculty[];

type CatalogFaculty = Faculty & {
  programs: Program[];
};
