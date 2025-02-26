import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./header.module.scss";
import Footer from "../../components/Footer";

function HeaderLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HeaderLayout;
