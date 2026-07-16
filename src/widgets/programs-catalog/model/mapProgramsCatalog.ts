import type {
  Program,
  ProgramDirection,
  ProgramEduForm,
  ProgramExamGroup,
  ProgramExamItem,
} from "@/entities/program/model/types";
import type {
  ProgramDto,
  ProgramExamGroupDto,
  ProgramExamItemDto,
} from "../api/getProgramsData.dto";
import type { ProgramsData } from "../api/getProgramsData.types";
import type { ProgramsCatalogData } from "./types";
import type { Exam } from "@/entities/exam";

export const mapProgramsCatalog = (data: ProgramsData): ProgramsCatalogData => {
  const directions = new Map(data.directions.map((item) => [item.id, item]));
  const forms = new Map(data.eduForms.map((form) => [form.id, form]));
  const exams = new Map(data.exams.map((exam) => [exam.id, exam]));

  return data.faculties
    .map((faculty) => {
      const programs = data.programs
        .filter((programDto) => programDto.facultyId === faculty.id)
        .map((programDto) => mapProgram(programDto, directions, forms, exams))
        .filter((program): program is Program => program !== null);

      if (programs.length === 0) return null;

      return {
        ...faculty,
        programs,
      };
    })
    .filter(
      (faculty): faculty is ProgramsCatalogData[number] => faculty !== null
    );
};

const mapProgram = (
  programDto: ProgramDto,
  directions: Map<string, ProgramDirection>,
  forms: Map<string, ProgramEduForm>,
  exams: Map<string, Exam>
): Program | null => {
  const direction = directions.get(programDto.directionId);

  if (!direction) return null;

  return {
    id: programDto.id,
    direction,
    profiles: programDto.profiles,
    forms: mapProgramForms(programDto.formIds, forms),
    studySchedule: programDto.studySchedule,
    duration: programDto.duration,
    passingScore: programDto.passingScore,
    tuitionFees: programDto.tuitionFees,
    places: programDto.places,
    examGroups: mapProgramExamGroups(programDto.examGroups, exams),
  };
};

const mapProgramForms = (
  formIds: string[],
  forms: Map<string, ProgramEduForm>
): ProgramEduForm[] => {
  const result: ProgramEduForm[] = [];

  for (const formId of formIds) {
    const form = forms.get(formId);

    if (form) result.push(form);
  }

  return result;
};

const mapProgramExamGroups = (
  examGroups: ProgramExamGroupDto[],
  exams: Map<string, Exam>
): ProgramExamGroup[] => {
  return examGroups.map((group) => ({
    type: group.type,
    items: group.items.map((item) => mapProgramExamItem(item, exams)),
  }));
};

const mapProgramExamItem = (
  item: ProgramExamItemDto,
  exams: Map<string, Exam>
): ProgramExamItem => {
  return {
    priority: item.priority,
    exams: mapProgramExams(item.examIds, exams),
  };
};

const mapProgramExams = (
  examIds: string[],
  exams: Map<string, Exam>
): Exam[] => {
  const result: Exam[] = [];

  for (const examId of examIds) {
    const exam = exams.get(examId);

    if (exam) result.push(exam);
  }

  return result;
};
