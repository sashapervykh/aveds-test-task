import { cardsData } from "../../data/cardsData";
import { Card } from "../Card/Card";
import style from "./style.module.css";

export function CardsGrid() {
  return (
    <section className={style["cards-wrapper"]}>
      {cardsData.map((elem) => (
        <Card
          key={elem.title}
          title={elem.title}
          text={elem.text}
          imgSrc={elem.src}
        />
      ))}
    </section>
  );
}
