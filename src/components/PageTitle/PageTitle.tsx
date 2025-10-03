import style from "./style.module.css";

export function PageTitle({ title }: { title: string }) {
  return <h1 className={style.title}>{title}</h1>;
}
