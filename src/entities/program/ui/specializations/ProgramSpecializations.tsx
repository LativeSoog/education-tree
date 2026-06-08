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
        <div className={S["program-spec__icon-wrapper"]}>
          <BookIcon className={S["program-spec__icon"]} />
        </div>
        <h3 className={S["program-spec__title"]}>Образовательные программы</h3>
      </div>
      <ul className={S["program-spec__list"]}>
        {profiles.map((profile, index) => (
          <li
            key={`${profile}-${index}`}
            className={S["program-spec__item"]}>
            {profile}
          </li>
        ))}
      </ul>
    </div>
  );
};
