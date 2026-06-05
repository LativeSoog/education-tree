import { BookIcon } from "@/assets/icons";
import S from "./ProgramSpecializations.module.scss";
import type { Program } from "../../model/types";

type ProgramSpecializationsProps = {
  profiles: Program["profiles"];
};

export const ProgramSpecializations = ({
  profiles,
}: ProgramSpecializationsProps) => {

  return (
    <div className={S["program-spec"]}>
      <div className={S["program-spec__header"]}>
        <BookIcon className={S["program-spec__icon"]} />
        <p className={S["program-spec__title"]}>Образовательные программы</p>
      </div>
      <div className={S["program-spec__list"]}>
        {profiles.map((profile, index) => (
          <p
            key={`${profile}-${index}`}
            className={S["program-spec__item"]}>
            {profile}
          </p>
        ))}
      </div>
    </div>
  );
};
