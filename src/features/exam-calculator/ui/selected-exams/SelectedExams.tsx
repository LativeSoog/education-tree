import { SelectedExamItem } from "./exam-item/SelectedExamItem";
import S from "./SelectedExams.module.scss";

export const SelectedExams = () => {
  return (
    <section className={S["selected-exams"]}>
      <h3 className={S["selected-exams__title"]}>Выбранные предметы</h3>
      <ul className={S["selected-exams__list"]}>
        <li className={S["selected-exams__item"]}>
          <SelectedExamItem
            number="1"
            exam="Русский язык"
          />
        </li>
        <li className={S["selected-exams__item"]}>
          <SelectedExamItem
            number="2"
            exam="Обществознание"
          />
        </li>
      </ul>
    </section>
  );
};
