import S from "./Modal.module.scss";
import cn from "classnames";

type ModalProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export const Modal = ({
  title,
  description,
  children,
  className,
}: ModalProps) => {
  return (
    <div className={cn(S["modal"], className)}>
      <div
        className={S["modal__main"]}
        role="dialog"
        aria-modal={true}
        aria-labelledby="modal-title">
        <div className={S["modal__header"]}>
          <h2
            id="modal-title"
            className={S["modal__title"]}>
            {title}
          </h2>
          {description && (
            <p className={S["modal__description"]}>{description}</p>
          )}
        </div>
        <div className={S["modal__content"]}>{children}</div>
      </div>
    </div>
  );
};
