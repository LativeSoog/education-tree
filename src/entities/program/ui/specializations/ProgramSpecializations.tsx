import { BookIcon } from "@/assets/icons";
import S from "./ProgramSpecializations.module.scss";

export const ProgramSpecializations = () => {
  return (
    <div className={S["program-spec"]}>
      <div className={S["program-spec__header"]}>
        <BookIcon className={S["program-spec__icon"]} />
        <p className={S["program-spec__title"]}>Образовательные программы</p>
      </div>
      <div className={S["program-spec__list"]}>
        <p className={S["program-spec__item"]}>
          Иностранный язык (английский) и Иностранный язык (французский)
        </p>
        <p className={S["program-spec__item"]}>
          Иностранный язык (английский) и методика обучения иностранным языкам в
          различных сферах (на английском)
        </p>
        <p className={S["program-spec__item"]}>Дизайн</p>
      </div>
    </div>
  );
};
