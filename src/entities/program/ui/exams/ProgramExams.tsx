import { ExamIcon } from "@/assets/icons";
import S from "./ProgramExams.module.scss";
import { ExamsList } from "./exams-list/ExamsList";

export const ProgramExams = () => {
  return (
    <section className={S["program-exams"]}>
      <div className={S["program-exams__header"]}>
        <div className={S["program-exams__icon-wrapper"]}>
          <ExamIcon className={S["program-exams__icon"]} />
        </div>
        <h4 className={S["program-exams__title"]}>Вступительные испытания</h4>
      </div>
      <div className={S["program-exams__main"]}>
        <ExamsList
          label="Для поступающих на базе среднего общего образования (11 кл.) и высшего образования"
          variant="ege"
        />
        <ExamsList
          label="Для поступающих на базе среднего профессионального образования"
          variant="vi"
        />
      </div>
    </section>
  );
};
