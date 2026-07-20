import { BookIcon } from "@/assets/icons";
import type { Program } from "../../model/types";
import { ProgramSectionHeading } from "../section-heading/ProgramSectionHeading";
import S from "./ProgramProfiles.module.scss";

type ProgramProfilesProps = {
  profiles: Program["profiles"];
};

export const ProgramProfiles = ({ profiles }: ProgramProfilesProps) => {
  return (
    <div className={S["program-profiles"]}>
      <ProgramSectionHeading icon={<BookIcon />}>
        Образовательные программы
      </ProgramSectionHeading>
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
