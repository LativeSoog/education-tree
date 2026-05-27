import { StatItem } from "@/shared/ui/stat-item/StatItem";
import S from "./ProgramDetails.module.scss";
import { BookIcon } from "@/assets/icons";

export const ProgramDetails = () => {
  return (
    <div className={S["program-details"]}>
      <StatItem
        icon={<BookIcon />}
        title="Срок обучения"
        className={S["program-details__item"]}>
        5 лет 6 мес
      </StatItem>
      <StatItem
        icon={<BookIcon />}
        title="Проходной балл 2025"
        className={S["program-details__item"]}>
        248 баллов
      </StatItem>
      <StatItem
        icon={<BookIcon />}
        title="Стоимость обучения"
        className={S["program-details__item"]}>
        250.000 Р
      </StatItem>
    </div>
  );
};
