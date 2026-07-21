import { Badge } from "@/shared/ui/badge/Badge";
import S from "./ProgramBadges.module.scss";
import type { ProgramDirection, ProgramEduForm } from "../../model/types";

type ProgramBadgesProps = {
  direction: Pick<ProgramDirection, "code" | "name">;
  form: Pick<ProgramEduForm, "name">;
  isPaidOnly: boolean;
  hasGrantPlaces: boolean;
  isNewProgram: boolean;
};

export const ProgramBadges = ({
  direction,
  form,
  isPaidOnly,
  hasGrantPlaces,
  isNewProgram,
}: ProgramBadgesProps) => {
  return (
    <div className={S["program-badges"]}>
      <Badge
        tone="blue"
        className={S["program-badges__spec"]}>
        <span className={S["program-badges__spec-code"]}>{direction.code}</span>
        <span className={S["program-badges__spec-label"]}>
          {direction.name}
        </span>
      </Badge>
      <Badge tone="teal">{form.name}</Badge>
      {isPaidOnly && <Badge tone="red">Только платное обучение</Badge>}
      {hasGrantPlaces && <Badge tone="gold">Грантовые места</Badge>}
      {isNewProgram && <Badge tone="green">Новая программа</Badge>}
    </div>
  );
};
