import { useState } from "react";
import S from "./FacultyItem.module.scss";
import { FacultyHeader } from "./header/FacultyHeader";
import { FacultyBody } from "./body/FacultyBody";

export const FacultyItem = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpandedFaculty = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={S["faculty-item"]}>
      <FacultyHeader
        isExpanded={isExpanded}
        onToggle={handleExpandedFaculty}
      />
      <FacultyBody isExpanded={isExpanded} />
    </div>
  );
};
