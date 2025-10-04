import style from "./style.module.css";

interface Props {
  text: string;
  type: string;
}

export function FormLabel({ text, type }: Props) {
  return (
    <label className={style.label}>
      <div>Введите {text}:</div>
      <input className={style.label_input} type={type} />
    </label>
  );
}
