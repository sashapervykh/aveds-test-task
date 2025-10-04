import { FormLabel } from "../FormLabel/FormLabel";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, UsersDataSchema } from "../../models/formSchema";
import { useData } from "../../hooks/useModal/useData";
import { usersData } from "../../data/cardsData";
import { useNavigate } from "react-router";

export interface Inputs {
  login: string;
  password: string;
}

export function AuthForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(User),
  });
  const { setIsModalOpen, setUser } = useData();

  function onSubmit(data: Inputs) {
    usersData.then((res) => {
      const userData = UsersDataSchema.safeParse(res).data?.find(
        (elem) => elem.login === data.login
      );

      if (!userData || userData.password !== data.password) {
        setError("root", {
          type: "server",
          message: "Пользователь с таким паролем и логином не найден",
        });
        return;
      }

      setUser({ name: userData.name });
      setIsModalOpen(false);
      navigate("account");
    });
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
