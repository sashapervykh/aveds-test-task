import { Link } from "react-router";
import style from "./style.module.css";
import { CardsGrid } from "../../components/CardsGrid/CardsGrid";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { LinksGroup } from "../../components/LinksGroup/LinksGroup";

export function Home() {
  return (
    <section className={style["page-wrapper"]}>
      <PageTitle title="Место для получения медицинской помощи" />
      <LinksGroup />
      <CardsGrid />
    </section>
  );
}
