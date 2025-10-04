import { FormLabel } from "../FormLabel/FormLabel";
import style from "./style.module.css";

export function AuthForm() {
  return (
    <form className={style.form}>
      <h2 className={style.form_title}>Войти в кабинет:</h2>

      <FormLabel text="логин" type="text" />
      <FormLabel text="пароль" type="password" />
      <div className={style["form_button-wrapper"]}>
        <button className={`${style.form_button} ${style.form_button__cancel}`}>
          Отмена
        </button>
        <button className={style.form_button}>Войти</button>
      </div>
    </form>
  );
}
