import S from "./Modal.module.scss";

type ModalProps = {
  title: string;
  children: React.ReactNode;
};

export const Modal = ({ title, children }: ModalProps) => {
  return (
    <div className={S["modal"]}>
      <div
        className={S["modal__main"]}
        role="dialog"
        aria-modal={true}
        aria-labelledby="modal-title">
        <h2
          id="modal-title"
          className={S["modal__title"]}>
          {title}
        </h2>
        <div className={S["modal__content"]}>{children}</div>
      </div>
    </div>
  );
};
