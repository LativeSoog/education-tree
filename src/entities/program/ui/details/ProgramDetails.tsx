import { StatItem } from "@/shared/ui/stat-item/StatItem";
import S from "./ProgramDetails.module.scss";
import { CalendarIcon, RewardIcon, RubleIcon } from "@/assets/icons";
import type { Program } from "../../model/types";
import formatNumber from "@/shared/lib/format/formatNumber";

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
          icon={<RubleIcon />}
          title="Стоимость обучения"
          className={S["program-details__item"]}>
          {formatNumber(tuitionFees)} &#8381;/год
        </StatItem>
      )}
    </div>
  );
};
