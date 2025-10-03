import { PageTitle } from "../../components/PageTitle/PageTitle";
import style from "./style.module.css";

export function Contacts() {
  return (
    <main className={style["page-wrapper"]}>
      <PageTitle title="Контакты" />
    </main>
  );
}
