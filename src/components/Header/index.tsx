import { ShoppingCartOutlined } from "@ant-design/icons";
import s from "./header.module.scss";

function Header() {
  return (
    <header className={s.container}>
      <strong>E-commerce</strong>

      <nav>
        <a href="#">Home</a>
        <a href="#">Produtos</a>
        <a href="#">Carrinho</a>
      </nav>

      <div>
        <ShoppingCartOutlined />
      </div>
    </header>
  );
}

export default Header;
