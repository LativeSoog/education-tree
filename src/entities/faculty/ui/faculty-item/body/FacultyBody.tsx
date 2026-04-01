import S from "./FacultyBody.module.scss";
import cn from "classnames";

type FacultyBodyProps = {
  isExpanded: boolean;
};

export const FacultyBody = ({ isExpanded }: FacultyBodyProps) => {
  return (
    <div
      className={cn(
        S["faculty-body"],
        isExpanded && S["faculty-body_expanded"]
      )}></div>
  );
};
