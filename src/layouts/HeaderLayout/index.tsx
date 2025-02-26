import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import s from "./header.module.scss";

function HeaderLayout() {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default HeaderLayout;
