import { Link } from "react-router";
import style from "./style.module.css";

export function LinksGroup() {
  return (
    <div className={style["buttons-wrapper"]}>
      <Link
        className={`${style["nav-button"]} ${style["auth-button"]}`}
        to={"auth"}
      >
        Войти
      </Link>
      <Link
        className={`${style["nav-button"]} ${style["page-button"]}`}
        to={"contacts"}
      >
        Контакты
      </Link>
    </div>
  );
}
