import { createPortal } from "react-dom";
import style from "./style.module.css";
import { AuthForm } from "../AuthForm/AuthForm";

export function AuthModal() {
  return createPortal(
    <div className={style["modal-back"]}>
      <AuthForm />
    </div>,
    document.body
  );
}
