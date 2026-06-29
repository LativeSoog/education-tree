import S from "./ProgramCapacityNotes.module.scss";
import type { ReactNode } from "react";

type CapacityNoteItemProps = {
  icon: ReactNode;
  children: ReactNode;
};

export const CapacityNoteItem = ({ icon, children }: CapacityNoteItemProps) => {
  return (
    <div className={S["capacity-note"]}>
      <span className={S["capacity-note__icon"]}>{icon}</span>
      <span className={S["capacity-note__text"]}>{children}</span>
    </div>
  );
};
