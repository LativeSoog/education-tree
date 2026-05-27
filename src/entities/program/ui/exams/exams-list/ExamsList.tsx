import { ExamItem } from "../exam-item/ExamItem";
import S from "./ExamsList.module.scss";

type ExamsListProps = {
  label: string;
  variant: "ege" | "vi";
};

export const ExamsList = ({ label, variant }: ExamsListProps) => {
  return (
    <div className={S["exams-list"]}>
      <p className={S["exams-list__label"]}>{label}</p>
      <div className={S["exams-list__items"]}>
        <ExamItem
          priority={"1"}
          exams={["Русский язык"]}
          variant={variant}
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
          variant={variant}
        />
        <ExamItem
          priority={"3"}
          exams={["Информатика"]}
          variant={variant}
        />
      </div>
    </div>
  );
};
