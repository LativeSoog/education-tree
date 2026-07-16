import { ProgramItem } from "@/entities/program/ui/item/ProgramItem";
import S from "./FacultyBody.module.scss";
import cn from "classnames";
import type { Program } from "@/entities/program/model/types";

type FacultyBodyProps = {
  programs: Program[];
  isExpanded: boolean;
};

export const FacultyBody = ({ programs, isExpanded }: FacultyBodyProps) => {
  return (
    <div
      className={cn(
        S["faculty-body"],
        isExpanded && S["faculty-body_expanded"]
      )}>
      <div className={S["faculty-body__content-wrapper"]}>
        <div className={S["faculty-body__content-inner"]}>
          {programs.map((program) => (
            <ProgramItem
              key={program.id}
              program={program}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
