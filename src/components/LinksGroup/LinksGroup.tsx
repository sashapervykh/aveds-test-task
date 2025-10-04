import { Link } from "react-router";
import style from "./style.module.css";
import { useData } from "../../hooks/useModal/useData";

export function LinksGroup({ margin }: { margin?: string }) {
  const { setIsModalOpen } = useData();
  const wrapperStyle = margin
    ? `${style["buttons-wrapper"]} ${margin}`
    : style["buttons-wrapper"];

  return (
    <div className={wrapperStyle}>
      <button
        className={`${style["nav-button"]} ${style["auth-button"]}`}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Войти
      </button>
      <Link
        className={`${style["nav-button"]} ${style["page-button"]}`}
        to={"contacts"}
      >
        Контакты
      </Link>
    </div>
  );
}
