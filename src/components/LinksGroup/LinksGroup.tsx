import { Link } from "react-router";
import style from "./style.module.css";

export function LinksGroup({ margin }: { margin?: string }) {
  const wrapperStyle = margin
    ? `${style["buttons-wrapper"]} ${margin}`
    : style["buttons-wrapper"];

  return (
    <div className={wrapperStyle}>
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
