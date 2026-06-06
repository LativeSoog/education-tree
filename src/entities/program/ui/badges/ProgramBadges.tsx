import { Badge } from "@/shared/ui/badge/Badge";
import S from "./ProgramBadges.module.scss";
import type { ProgramDirection, ProgramEduForm } from "../../model/types";

type ProgramBadgesProps = {
  direction: Pick<ProgramDirection, "code" | "name">;
  form: Pick<ProgramEduForm, "name">;
};

export const ProgramBadges = ({ direction, form }: ProgramBadgesProps) => {
  return (
    <div className={S["program-badges"]}>
      <Badge
        variant="blue"
        className={S["program-badges__spec"]}>
        <span className={S["program-badges__spec-code"]}>{direction.code}</span>
        <span className={S["program-badges__spec-label"]}>
          {direction.name}
        </span>
      </Badge>
      <Badge
        variant="teal"
        className={S["program-badges__form"]}>
        {form.name}
      </Badge>
    </div>
  );
};
