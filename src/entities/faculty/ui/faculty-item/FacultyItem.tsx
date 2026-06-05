import { useState } from "react";
import S from "./FacultyItem.module.scss";
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

  return (
    <div className={S["faculty-item"]}>
      <FacultyHeader
        name={faculty.name}
        isExpanded={isExpanded}
        onToggle={handleExpandedFaculty}
      />
      <FacultyBody
        programs={programs}
        isExpanded={isExpanded}
      />
    </div>
  );
};
