import { FormLabel } from "../FormLabel/FormLabel";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "../../models/formSchema";
import { useData } from "../../hooks/useModal/useData";

export interface Inputs {
  login: string;
  password: string;
}

export function AuthForm() {
  const { setIsModalOpen } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(User),
  });

  function onSubmit(data: Inputs) {
    console.log(data);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={style.form_title}>Войти в кабинет:</h2>

      <FormLabel
        text="логин"
        name="login"
        type="text"
        register={register}
        errors={errors}
      />
      <FormLabel
        text="пароль"
        name="password"
        type="password"
        register={register}
        errors={errors}
      />
      <div className={style["form_button-wrapper"]}>
        <button
          className={`${style.form_button} ${style.form_button__cancel}`}
          type="button"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          Отмена
        </button>
        <button className={style.form_button}>Войти</button>
      </div>
    </form>
  );
}
