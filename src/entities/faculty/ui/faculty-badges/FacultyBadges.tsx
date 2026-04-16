import { Badge } from "@/shared/ui/badge/Badge";
import S from "./FacultyBadges.module.scss";

export const FacultyBadges = () => {
  return (
    <div className={S["faculty-badges"]}>
      <Badge
        variant="blue"
        className={S["faculty-badges__spec"]}>
        <span className={S["faculty-badges__spec-code"]}>44.03.01</span>
        <span className={S["faculty-badges__spec-label"]}>
          Педагогическое образование (с двумя профилями подготовки)
        </span>
      </Badge>
      <Badge
        variant="teal"
        className={S["faculty-badges__form"]}>
        Очно-заочная
      </Badge>
    </div>
  );
};
