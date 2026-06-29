import { UsersIcon, WarnIcon } from "@/assets/icons";
import type { ProgramPlaces } from "../../model/types";
import { CapacityItem } from "./capacity-item/CapacityItem";
import S from "./ProgramCapacity.module.scss";

type ProgramCapacityProps = {
  places: ProgramPlaces;
};

export const ProgramCapacity = ({ places }: ProgramCapacityProps) => {
  return (
    <div className={S["program-capacity"]}>
      <div className={S["program-capacity__header"]}>
        <div className={S["program-capacity__icon-wrapper"]}>
          <UsersIcon className={S["program-capacity__icon"]} />
        </div>
        <h3 className={S["program-capacity__title"]}>Количество мест</h3>
      </div>
      <div className={S["program-capacity__items"]}>
        {places.budget !== null && (
          <CapacityItem
            name="Бюджет"
            count={places.budget}
          />
        )}
        {places.specialQuota !== null && places.specialQuota > 0 && (
          <CapacityItem
            name="Особая квота"
            count={places.specialQuota}
          />
        )}
        {places.separateQuota !== null && places.separateQuota > 0 && (
          <CapacityItem
            name="Отдельная квота"
            count={places.separateQuota}
          />
        )}
        {places.targetQuota !== null && places.targetQuota > 0 && (
          <CapacityItem
            name="Целевая квота"
            count={places.targetQuota}
          />
        )}
        {places.grant !== null && places.grant > 0 && (
          <CapacityItem
            name="Грантовые места"
            count={places.grant}
          />
        )}
        {places.paid !== null && places.paid > 0 && (
          <CapacityItem
            name="Договор"
            count={places.paid}
          />
        )}
      </div>
      <div className={S["program-capacity__note"]}>
        <span className={S["program-capacity__note-icon"]}>
          <WarnIcon />
        </span>
        <span className={S["program-capacity__note-text"]}>
          Места по квотам выделяются из общего количества бюджетных мест
        </span>
      </div>
    </div>
  );
};
