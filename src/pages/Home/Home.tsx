import { Link } from "react-router";
import style from "./style.module.css";
import { CardsGrid } from "../../components/CardsGrid/CardsGrid";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export function Home() {
  return (
    <section className={style["page-wrapper"]}>
      <PageTitle title="Место для получения медицинской помощи" />
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
