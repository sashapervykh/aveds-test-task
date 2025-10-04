import type { FieldErrors, UseFormRegister } from "react-hook-form";
import style from "./style.module.css";
import type { Inputs } from "../AuthForm/AuthForm";

interface Props {
  text: string;
  type: string;
  name: "login" | "password";
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

export function FormLabel({ text, type, name, register, errors }: Props) {
  const inputStyle = errors[name]
    ? `${style.label_input} ${style.label_input__error}`
    : `${style.label_input}`;

  return (
    <label className={style.label}>
      <div>Введите {text}:</div>
      <input {...register(name)} className={inputStyle} type={type} />
      {errors[name] && <p className={style.error}>{errors[name].message}</p>}
    </label>
  );
}
