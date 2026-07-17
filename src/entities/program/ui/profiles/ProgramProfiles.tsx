import { BookIcon } from "@/assets/icons";
import type { Program } from "../../model/types";
import S from "./ProgramProfiles.module.scss";

type ProgramProfilesProps = {
  profiles: Program["profiles"];
};

export const ProgramProfiles = ({ profiles }: ProgramProfilesProps) => {
  return (
    <div className={S["program-profiles"]}>
      <div className={S["program-profiles__header"]}>
        <span className={S["program-profiles__icon"]}>
          <BookIcon />
        </span>
        <h2 className={S["program-profiles__name"]}>
          Образовательные программы
        </h2>
      </div>
      <ul className={S["program-profiles__list"]}>
        {profiles.map((profile, index) => (
          <li
            key={`${profile}-${index}`}
            className={S["program-profiles__item"]}>
            <span className={S["program-profiles__profile-item"]}>
              {profile}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
