import { WarnIcon } from "@/assets/icons";
import { CapacityNoteItem } from "./CapacityNoteItem";
import S from "./ProgramCapacityNotes.module.scss";

type ProgramCapacityNotesProps = {
  showQuotas: boolean;
  showGrant: boolean;
};

export const ProgramCapacityNotes = ({
  showQuotas,
  showGrant,
}: ProgramCapacityNotesProps) => {
  return (
    <div className={S["capacity-notes"]}>
      {showQuotas && (
        <CapacityNoteItem icon={<WarnIcon />}>
          Места по квотам выделяются из общего количества бюджетных мест
        </CapacityNoteItem>
      )}
      {showGrant && (
        <CapacityNoteItem icon={<WarnIcon />}>
          *
          <a
            className={S["capacity-notes__link"]}
            href="https://mpgu.su/postuplenie/grant-priem/">
            Подробнее о грантовых местах {">>"}
          </a>
        </CapacityNoteItem>
      )}
    </div>
  );
};
