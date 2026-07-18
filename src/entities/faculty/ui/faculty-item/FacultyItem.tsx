import S from "./FacultyItem.module.scss";
import cn from "classnames";
import { useState } from "react";
import { FacultyHeader } from "./header/FacultyHeader";
import { FacultyBody } from "./body/FacultyBody";
import type { Program } from "@/entities/program/model/types";
import type { Faculty } from "../../model/types";

type FacultyItemProps = {
  faculty: Faculty;
  programs: Program[];
};

export const FacultyItem = ({ faculty, programs }: FacultyItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpandedFaculty = () => {
    setIsExpanded(!isExpanded);
  };

  const totalProfiles = programs.reduce(
    (sum, program) => sum + program.profiles.length,
    0
  );

  return (
    <section
      className={cn(
        S["faculty-item"],
        isExpanded && S["faculty-item_expanded"]
      )}>
      <FacultyHeader
        name={faculty.name}
        totalProfiles={totalProfiles}
        isExpanded={isExpanded}
        onToggle={handleExpandedFaculty}
      />
      <FacultyBody
        programs={programs}
        isExpanded={isExpanded}
      />
    </section>
  );
};
