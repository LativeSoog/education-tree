import { Input } from "@/shared/ui/input/Input";
import S from "./SelectedExamItem.module.scss";
import { TrashIcon } from "@/assets/icons";

type ExamCalcItemProps = {
  number: string;
  exam: string;
};

export const SelectedExamItem = ({ number, exam }: ExamCalcItemProps) => {
  return (
    <div className={S["exam-item"]}>
      <div className={S["exam-item__info"]}>
        <span className={S["exam-item__number"]}>{number}</span>
        <span className={S["exam-item__name"]}>{exam}</span>
      </div>
      <div className={S["exam-item__marks-wrapper"]}>
        <Input className={S["exam-item__mark-value"]} />
        <span className={S["exam-item__mark-min"]}>мин. 36 баллов</span>
      </div>
      <button className={S["exam-item__remove"]}>
        <TrashIcon className={S["exam-item__remove-icon"]} />
      </button>
    </div>
  );
};
