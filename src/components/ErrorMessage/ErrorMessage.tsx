import style from "./style.module.css";

interface Props {
  message: string;
}

export function ErrorMessage({ message }: Props) {
  return <p className={style.error}>{message}</p>;
}
