import S from "./ProgramsCatalog.module.scss";
import { FacultyItem } from "@/entities/faculty/ui/faculty-item/FacultyItem";
// import { CatalogToolbar } from "./ui/catalog-toolbar/CatalogToolbar";
// import { useState } from "react";
// import { ExamCalculator } from "@/features/exam-calculator/ui/ExamCalculator";
import { mapProgramsCatalog } from "../model/mapProgramsCatalog";
import type { ProgramsData } from "../api/getProgramsData.types";

type ProgramsCatalogProps = {
  data: ProgramsData;
};

export const ProgramsCatalog = ({ data }: ProgramsCatalogProps) => {
  // const [isCalcOpen, setIsCalcOpen] = useState<boolean>(false);

  // const handleCalcOpen = () => {
  //   setIsCalcOpen(true);
  // };

  const catalog = mapProgramsCatalog(data);

  return (
    <div className="programs-catalog">
      {/* {isCalcOpen && <ExamCalculator />}
      <div className="programs-catalog__toolbar">
        <CatalogToolbar onCalcOpen={handleCalcOpen} />
      </div> */}

      <div className={S["programs-catalog__faculties"]}>
        {catalog.map((faculty) => (
          <FacultyItem
            key={faculty.id}
            faculty={faculty}
            programs={faculty.programs}
          />
        ))}
      </div>
    </div>
  );
};
