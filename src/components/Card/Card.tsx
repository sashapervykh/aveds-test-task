import style from "./style.module.css";

interface Props {
  text: string;
  title: string;
  imgSrc: string;
}

export function Card({ text, title, imgSrc }: Props) {
  return (
    <div className={style.card}>
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
