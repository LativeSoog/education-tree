import S from "./CapacityItem.module.scss";
import cn from "classnames";

type CapacityItemProps = {
  name: string;
  count: string;
  className?: string;
};

export const CapacityItem = ({ name, count, className }: CapacityItemProps) => {
  return (
    <div className={cn(S["capacity-item"], className)}>
      <div className={S["capacity-item__content"]}>
        <span className={S["capacity-item__name"]}>{name}</span>
        <div className={S["capacity-item__value"]}>
          <span className={S["capacity-item__count"]}>{count}</span>
          <span className={S["capacity-item__label"]}>мест</span>
        </div>
      </div>
    </div>
  );
};
