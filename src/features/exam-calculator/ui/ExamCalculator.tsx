import S from "./ExamCalculator.module.scss";
import { Modal } from "@/shared/ui/modal/Modal";
import { SelectedExams } from "./selected-exams/SelectedExams";
import { AddExams } from "./add-exams/AddExams";
import { Button } from "@/shared/ui/button/Button";

export const ExamCalculator = () => {
  return (
    <Modal
      title="Калькулятор ЕГЭ"
      description="Чтобы подобрать программы, выберите предметы ЕГЭ и укажите ваши баллы. Если баллы неизвестны, оставьте значение по умолчанию - 50"
      className={S["exam-calc"]}>
      <div className={S["exam-calc__selected"]}>
        <SelectedExams />
      </div>
      <div className={S["exam-calc__add"]}>
        <AddExams />
      </div>
      <div className={S["exam-calc__buttons"]}>
        <Button
          variant="primary"
          className={S["exams-calc__submit"]}>
          Подобрать программы
        </Button>
      </div>
    </Modal>
  );
};
