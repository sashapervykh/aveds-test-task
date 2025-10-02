import { Link } from "react-router";
import Logo from "../../assets/logo.svg";
import style from "./style.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <div className={style["img-wrapper"]}>
        <img src={Logo} alt="logo image" />
      </div>
      <nav className={style.nav}>
        <ul className={style["links-list"]}>
          <li>
            <Link to={"/contacts"}>Контакты</Link>
          </li>
          <li>
            <Link to={"/auth"}>Войти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
