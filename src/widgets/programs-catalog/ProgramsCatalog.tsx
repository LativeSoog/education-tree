import { FacultyItem } from "@/entities/faculty/ui/faculty-item/FacultyItem";
import { CatalogToolbar } from "./ui/catalog-toolbar/CatalogToolbar";
import { useState } from "react";
import { ExamCalculator } from "@/features/exam-calculator/ui/ExamCalculator";

export const ProgramsCatalog = () => {
  const [isCalcOpen, setIsCalcOpen] = useState<boolean>(false);

  const handleCalcOpen = () => {
    setIsCalcOpen(true);
  };

  return (
    <div className="programs-catalog">
      {isCalcOpen && <ExamCalculator />}
      <div className="programs-catalog__toolbar">
        <CatalogToolbar onCalcOpen={handleCalcOpen} />
      </div>
      <div className="programs-catalog__faculties">
        <FacultyItem />
      </div>
    </div>
  );
};
