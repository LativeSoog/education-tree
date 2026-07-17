import { WarnIcon } from "@/assets/icons";
import S from "./ProgramCapacityNotes.module.scss";
import { Notice } from "@/shared/ui/notice";

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
        <Notice icon={<WarnIcon />}>
          Места по квотам выделяются из общего количества бюджетных мест
        </Notice>
      )}
      {showGrant && (
        <Notice icon={<WarnIcon />}>
          *
          <a
            className={S["capacity-notes__link"]}
            href="https://mpgu.su/postuplenie/grant-priem/">
            Подробнее о грантовых местах {">>"}
          </a>
        </Notice>
      )}
    </div>
  );
};
