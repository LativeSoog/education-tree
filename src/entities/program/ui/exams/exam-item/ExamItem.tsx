import S from "./ExamItem.module.scss";
import cn from "classnames";

type ExamItemProps = {
  priority: string;
  exams: string[];
  choice?: boolean;
  variant: "ege" | "vi";
};

export const ExamItem = ({
  priority,
  exams,
  choice = false,
  variant,
}: ExamItemProps) => {
  return (
    <div className={cn(S["exam-item"], S[`exam-item_${variant}`])}>
      <div className={S["exam-item__priority"]}>{priority}</div>
      <div className={S["exam-item__list"]}>
        {exams.map((exam) => (
          <span className={S["exam-item__subject"]}>{exam}</span>
        ))}
      </div>
      {choice && <div className={S["exam-item__badge"]}>Предмет по выбору</div>}
    </div>
  );
};
