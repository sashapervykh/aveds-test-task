import { Link } from "react-router";
import style from "./style.module.css";
import { AuthButton } from "../AuthButton/AuthButton";
import { useData } from "../../hooks/useModal/useData";

interface Props {
  margin?: string;
}

export function LinksGroup({ margin }: Props) {
  const { user } = useData();

  const wrapperStyle = margin
    ? `${style["buttons-wrapper"]} ${margin}`
    : style["buttons-wrapper"];

  return (
    <div className={wrapperStyle}>
      <AuthButton
        buttonStyle={`${style["nav-button"]} ${style["auth-button"]}`}
        logoutText="Выйти из аккаунта"
      />
      <Link
        className={`${style["nav-button"]} ${style["page-button"]}`}
        to={"/contacts"}
      >
        {user ? "Перейти в контакты" : "Контакты"}
      </Link>
    </div>
  );
}
