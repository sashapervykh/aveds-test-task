import { Navigate } from "react-router";
import { LinksGroup } from "../../components/LinksGroup/LinksGroup";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { useData } from "../../hooks/useModal/useData";
import style from "./style.module.css";

export function Account() {
  const { user } = useData();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <main className={style["page-wrapper"]}>
      <PageTitle title={`Привет, ${user.name}`} />
      <LinksGroup margin={style.buttons} />
    </main>
  );
}
