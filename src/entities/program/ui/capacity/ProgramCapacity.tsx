import { CapacityItem } from "./capacity-item/CapacityItem";
import S from "./ProgramCapacity.module.scss";

export const ProgramCapacity = () => {
  return (
    <div className={S["program-capacity"]}>
      <h4 className={S["program-capacity__title"]}>Количество мест</h4>
      <div className={S["program-capacity__items"]}>
        <CapacityItem
          name="Бюджет"
          count="25"
        />
        <CapacityItem
          name="Особая квота"
          count="25"
        />
        <CapacityItem
          name="Отдельная квота"
          count="25"
        />
        <CapacityItem
          name="Целевая квота"
          count="25"
        />
      </div>
    </div>
  );
};
