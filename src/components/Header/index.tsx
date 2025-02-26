import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <Link to="/">
        <strong>E-commerce Developer</strong>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          <span>Carrinho</span>
          <ShoppingCartOutlined size={24} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
