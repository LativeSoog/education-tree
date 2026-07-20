import { ExamIcon } from "@/assets/icons";
import { ProgramSectionHeading } from "../section-heading/ProgramSectionHeading";
import S from "./ProgramExams.module.scss";
import { ExamsList } from "./exams-list/ExamsList";
import type { ProgramExamGroup } from "../../model/types";

type ProgramExamsProps = {
  examGroups: ProgramExamGroup[];
};

export const ProgramExams = ({ examGroups }: ProgramExamsProps) => {
  const examGroupLabels: Record<ProgramExamGroup["type"], string> = {
    ege: "Для поступающих на базе среднего общего образования (11 кл.) и высшего образования",
    vi: "Для поступающих на базе среднего профессионального образования",
  };

  return (
    <section className={S["program-exams"]}>
      <ProgramSectionHeading icon={<ExamIcon />}>
        ЕГЭ / Вступительные испытания
      </ProgramSectionHeading>
      <div className={S["program-exams__main"]}>
        {examGroups.map((group) => (
          <ExamsList
            key={group.type}
            label={examGroupLabels[group.type]}
            items={group.items}
            variant={group.type}
          />
        ))}
      </div>
    </section>
  );
};
