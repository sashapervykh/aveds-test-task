import { LinksGroup } from "../../components/LinksGroup/LinksGroup";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import style from "./style.module.css";

export function Account() {
  return (
    <main className={style["page-wrapper"]}>
      <PageTitle title={"Привет, Сергей"} />
      <LinksGroup margin={style.buttons} />
    </main>
  );
}
