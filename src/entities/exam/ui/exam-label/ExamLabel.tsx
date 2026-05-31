import type { Exam } from "../../model/types";
import S from "./ExamLabel.module.scss";
import cn from "classnames";

type ExamLabelProps = {
  number: number | string;
  exams: Pick<Exam, "id" | "name">[];
  variant?: Exam["type"];
};

export const ExamLabel = ({
  number,
  exams,
  variant = "ege",
}: ExamLabelProps) => {
  return (
    <div className={cn(S["exam-label"], S[`exam-label_${variant}`])}>
      <div className={S["exam-label__number"]}>{number}</div>
      <ul className={S["exam-label__list"]}>
        {exams.map((exam) => (
          <li
            key={exam.id}
            className={S["exam-label__item"]}>
            {exam.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
