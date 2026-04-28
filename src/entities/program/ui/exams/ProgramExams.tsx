import { ExamIcon } from "@/assets/icons";
import S from "./ProgramExams.module.scss";
import { ExamsEge } from "./exams-ege/ExamsEge";

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
        <ExamsEge />
      </div>
    </section>
  );
};
