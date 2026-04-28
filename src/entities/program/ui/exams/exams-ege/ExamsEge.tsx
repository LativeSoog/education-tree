import { ExamItem } from "../exam-item/ExamItem";
import S from "./ExamsEge.module.scss";

export const ExamsEge = () => {
  return (
    <div className={S["exams-ege"]}>
      <p className={S["exams-ege__label"]}>
        Для поступающих на базе среднего общего образования (11 кл.) и высшего
        образования
      </p>
      <div className={S["exams-ege__items"]}>
        <ExamItem
          priority={"1"}
          exams={["Русский язык"]}
        />
        <ExamItem
          priority={"2"}
          exams={[
            "Математика",
            "Обществознание",
            "Биология",
            "Химия",
            "Физика",
          ]}
          choice={true}
        />
        <ExamItem
          priority={"3"}
          exams={["Информатика"]}
        />
      </div>
    </div>
  );
};
