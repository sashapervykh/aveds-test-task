import { Link } from "react-router";
import style from "./style.module.css";
import { CardsGrid } from "../../components/CardsGrid/CardsGrid";

export function Home() {
  return (
    <section className={style["page-wrapper"]}>
      <h1 className={style.title}>Место для получения медицинской помощи</h1>
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

      <CardsGrid />
    </section>
  );
}
