import S from "./ExamsList.module.scss";
import { ExamItem } from "../exam-item/ExamItem";
import type { ProgramExamItem } from "@/entities/program/model/types";
import type { ExamType } from "@/entities/exam";

type ExamsListProps = {
  label: string;
  items: ProgramExamItem[];
  variant: ExamType;
};

export const ExamsList = ({ label, items, variant }: ExamsListProps) => {
  return (
    <div className={S["exams-list"]}>
      <p className={S["exams-list__label"]}>{label}</p>
      <ul className={S["exams-list__list"]}>
        {items.map((item, index) => (
          <li
            className={S["exam-list__item"]}
            key={index}>
            <ExamItem
              priority={item.priority}
              exams={item.exams}
              variant={variant}
              choice={item.exams.length > 1 ? true : false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
