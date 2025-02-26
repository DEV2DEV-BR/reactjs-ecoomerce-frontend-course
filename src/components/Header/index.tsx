import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { useGlobalContext } from "../../context/global";

function Header() {
  const { cart } = useGlobalContext();

  return (
    <header className={styles.container}>
      <Link to="/">
        <strong>E-commerce Developer</strong>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart" className={styles.cartLink}>
          <span>Carrinho</span>
          <div className={styles.cartIconContainer}>
            <ShoppingCartOutlined size={24} />
            {cart.length > 0 && (
              <span className={styles.cartBadge}>{cart.length}</span>
            )}
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
