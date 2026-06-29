import type { ProgramPlaces } from "../../model/types";
import { CapacityItem } from "./capacity-item/CapacityItem";
import S from "./ProgramCapacity.module.scss";

type ProgramCapacityProps = {
  places: ProgramPlaces;
};

export const ProgramCapacity = ({ places }: ProgramCapacityProps) => {
  return (
    <div className={S["program-capacity"]}>
      <h4 className={S["program-capacity__title"]}>Количество мест</h4>
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
      </div>
    </div>
  );
};
