import S from "./ExamItem.module.scss";
import { ExamLabel } from "@/entities/exam/ui/exam-label/ExamLabel";
import type { Exam } from "@/entities/exam";
import cn from "classnames";

type ExamItemProps = {
  priority: number;
  exams: Pick<Exam, "id" | "name">[];
  variant: Exam["type"];
  choice: boolean;
};

export const ExamItem = ({
  priority,
  exams,
  variant,
  choice,
}: ExamItemProps) => {
  return (
    <div className={cn(S["exam-item"], S[`exam-item_${variant}`])}>
      <ExamLabel
        number={priority}
        exams={exams}
        variant={variant}
      />
      {choice && <div className={S["exam-item__badge"]}>Предмет по выбору</div>}
    </div>
  );
};
