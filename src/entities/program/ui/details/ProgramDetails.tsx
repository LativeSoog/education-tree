import { StatItem } from "@/shared/ui/stat-item/StatItem";
import S from "./ProgramDetails.module.scss";
import { CalendarIcon, RewardIcon, RubleIcon } from "@/assets/icons";
import type { Program } from "../../model/types";
import formatNumber from "@/shared/lib/format/formatNumber";
import { DetailItem } from "./detail-item/DetailItem";

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
        <DetailItem
          icon={<CalendarIcon />}
          title="Срок обучения">
          {duration}
        </DetailItem>
      )}
      {passingScore && (
        <DetailItem
          icon={<RewardIcon />}
          title="Проходной балл 2025">
          {passingScore}
        </DetailItem>
      )}
      {tuitionFees && (
        <DetailItem
          icon={<RubleIcon />}
          title="Стоимость обучения">
          {formatNumber(tuitionFees)} &#8381;/год
        </DetailItem>
      )}
    </div>
  );
};
