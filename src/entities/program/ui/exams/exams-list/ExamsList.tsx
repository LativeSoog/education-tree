import S from "./ExamsList.module.scss";
import { ExamItem } from "../exam-item/ExamItem";

type ExamsListProps = {
  label: string;
};

export const ExamsList = ({ label }: ExamsListProps) => {
  return (
    <div className={S["exams-list"]}>
      <p className={S["exams-list__label"]}>{label}</p>
      <ul className={S["exams-list__list"]}>
        <li className={S["exam-list__item"]}>
          <ExamItem
            priority={1}
            exams={[{ id: "russkiy", name: "Русский язык" }]}
            variant="ege"
            choice={false}
          />
        </li>
        <li className={S["exam-list__item"]}>
          <ExamItem
            priority={2}
            exams={[
              { id: "mat", name: "Математика" },
              { id: "obsh", name: "Обществознание" },
              { id: "bio", name: "Биология" },
              { id: "him", name: "Химия" },
              { id: "fiz", name: "Физика" },
            ]}
            variant="vi"
            choice={true}
          />
        </li>
      </ul>
    </div>
  );
};
