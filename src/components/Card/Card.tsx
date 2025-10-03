import style from "./style.module.css";

interface Props {
  text: string;
  title: string;
  imgSrc: string;
}

export function Card({ text, title, imgSrc }: Props) {
  const orderStyle =
    title === "Лечение рака"
      ? style["first-elem"]
      : title === "Онлайн-прием"
      ? style["second-elem"]
      : "";

  return (
    <div className={`${style.card} ${orderStyle}`}>
      <div className={style["image-back"]}>
        <img
          className={style.image}
          src={imgSrc}
          alt="image for online appointments"
        />
      </div>
      <h2 className={style["card-title"]}>{title}</h2>
      <div className={style["separation-line"]} />
      <p className={style["card-text"]}>{text}</p>
    </div>
  );
}
