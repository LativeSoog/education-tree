import S from "./ExamItem.module.scss";

type ExamItemProps = {
  priority: string;
  exams: string[];
  choice?: boolean;
};

export const ExamItem = ({
  priority,
  exams,
  choice = false,
}: ExamItemProps) => {
  return (
    <div className={S["exam-item"]}>
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
