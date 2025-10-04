import { Link } from "react-router";
import Logo from "../../assets/logo.svg";
import style from "./style.module.css";
import { useState } from "react";
import { AuthModal } from "../AuthModal/AuthModal";

export function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <header className={style.header}>
      <div className={style["img-wrapper"]}>
        <img src={Logo} alt="logo image" />
      </div>
      <nav className={style.nav}>
        <ul className={style["links-list"]}>
          <li>
            <Link className={style["nav-link"]} to={"/contacts"}>
              Контакты
            </Link>
          </li>
          <li>
            <button
              className={style["auth-button"]}
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              <div className={style["auth-button_text"]}>Войти</div>
            </button>
          </li>
        </ul>
      </nav>
      {isOpenModal && <AuthModal />}
    </header>
  );
}
