import { Link } from "react-router";
import Logo from "../../assets/logo.svg";
import style from "./style.module.css";
import { AuthModal } from "../AuthModal/AuthModal";
import { useData } from "../../hooks/useModal/useData";
import { AuthButton } from "../AuthButton/AuthButton";

export function Header() {
  const { isModalOpen } = useData();

  return (
    <header className={style.header}>
      <Link className={style["img-wrapper"]} to="/">
        <img src={Logo} alt="logo image" />
      </Link>
      <nav className={style.nav}>
        <ul className={style["links-list"]}>
          <li>
            <Link className={style["nav-link"]} to={"/contacts"}>
              Контакты
            </Link>
          </li>
          <li>
            <AuthButton
              buttonStyle={style["auth-button"]}
              textStyle={style["auth-button_text"]}
              logoutText="Выйти"
            />
          </li>
        </ul>
      </nav>
      {isModalOpen && <AuthModal />}
    </header>
  );
}
