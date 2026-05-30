import S from "./AddExams.module.scss";

export const AddExams = () => {
  return (
    <section className={S["add-exams"]}>
      <h3 className={S["add-exams__title"]}>Добавить предметы</h3>
      <ul className={S["add-exams__list"]}>
        <li className={S["add-exams__item"]}>
          <button className={S["add-exams__exam"]}>Обществознание</button>
        </li>
        <li className={S["add-exams__item"]}>
          <button className={S["add-exams__exam"]}>Химия</button>
        </li>
        <li className={S["add-exams__item"]}>
          <button className={S["add-exams__exam"]}>Английский язык</button>
        </li>
        <li className={S["add-exams__item"]}>
          <button className={S["add-exams__exam"]}>Французский язык</button>
        </li>
      </ul>
    </section>
  );
};
