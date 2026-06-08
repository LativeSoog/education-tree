import { StatItem } from "@/shared/ui/stat-item/StatItem";
import S from "./ProgramDetails.module.scss";
import { BookIcon, CalendarIcon, RewardIcon } from "@/assets/icons";
import type { Program } from "../../model/types";

type ProgramDetailsProps = Pick<
  Program,
  "duration" | "passingScore" | "tuitionFees"
>;

export const ProgramDetails = ({
  duration,
  passingScore,
  tuitionFees,
}: ProgramDetailsProps) => {
  return (
    <div className={S["program-details"]}>
      {duration && (
        <StatItem
          icon={<CalendarIcon />}
          title="Срок обучения"
          className={S["program-details__item"]}>
          {duration}
        </StatItem>
      )}
      {passingScore && (
        <StatItem
          icon={<RewardIcon />}
          title="Проходной балл 2025"
          className={S["program-details__item"]}>
          {passingScore}
        </StatItem>
      )}
      {tuitionFees && (
        <StatItem
          icon={<BookIcon />}
          title="Стоимость обучения"
          className={S["program-details__item"]}>
          {tuitionFees}
        </StatItem>
      )}
    </div>
  );
};
