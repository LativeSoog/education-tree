import { Badge } from "@/shared/ui/badge/Badge";
import S from "./ProgramBadges.module.scss";

export const ProgramBadges = () => {
  return (
    <div className={S["program-badges"]}>
      <Badge
        variant="blue"
        className={S["program-badges__spec"]}>
        <span className={S["program-badges__spec-code"]}>44.03.01</span>
        <span className={S["program-badges__spec-label"]}>
          Педагогическое образование (с двумя профилями подготовки)
        </span>
      </Badge>
      <Badge
        variant="teal"
        className={S["program-badges__form"]}>
        Очно-заочная
      </Badge>
    </div>
  );
};
