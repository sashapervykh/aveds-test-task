import { createPortal } from "react-dom";
import style from "./style.module.css";
import { AuthForm } from "../AuthForm/AuthForm";
import { useData } from "../../hooks/useModal/useData";

export function AuthModal() {
  const { setIsModalOpen } = useData();

  return createPortal(
    <div
      className={style["modal-back"]}
      onClick={(event) => {
        const clickedElement = event.target;
        if (clickedElement instanceof HTMLElement) {
          const form = clickedElement.closest("form");
          if (!form) setIsModalOpen(false);
        }
      }}
    >
      <AuthForm />
    </div>,
    document.body
  );
}
