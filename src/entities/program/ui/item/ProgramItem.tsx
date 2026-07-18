import { useState } from "react";
import type { Program } from "../../model/types";
import { ProgramItemContent } from "./content/ProgramItemContent";
import { ProgramItemPreview } from "./preview/ProgramItemPreview";
import S from "./ProgramItem.module.scss";
import cn from "classnames";

type ProgramItemProps = {
  program: Program;
};

export const ProgramItem = ({ program }: ProgramItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpandedProgram = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        S["program-item"],
        isExpanded && S["program-item_expanded"]
      )}>
      <div className={S["program-item__preview"]}>
        <ProgramItemPreview
          program={program}
          isExpanded={isExpanded}
          onToggle={toggleExpandedProgram}
        />
      </div>
      <div className={S["program-item__content"]}>
        <div className={S["program-item__content-wrapper"]}>
          <div className={S["program-item__content-inner"]}>
            <ProgramItemContent
              duration={program.duration}
              passingScore={program.passingScore}
              tuitionFees={program.tuitionFees}
              places={program.places}
              examGroups={program.examGroups}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
