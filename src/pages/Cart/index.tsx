import { CloseOutlined } from "@ant-design/icons";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";
import styles from "./cart.module.scss";
import { productsFakeData } from "../../data/fakeData";

function Cart() {
  const cartItems = productsFakeData.slice(0, 3);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  return (
    <div className={styles.container}>
      <h1>Carrinho de Compras</h1>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Seu carrinho está vazio</p>
          <Link to="/">
            <Button>Continuar Comprando</Button>
          </Link>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <Link to={`/product/${item.id}`} className={styles.productInfo}>
                  <img src={item.imageUrl} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className={styles.price}>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.price)}
                    </span>
                  </div>
                </Link>

                <button
                  className={styles.removeButton}
                  onClick={() => {
                    /* Implementar remoção */
                  }}
                >
                  <CloseOutlined />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Resumo do Pedido</h2>

            <div className={styles.summaryContent}>
              <div className={styles.summaryItem}>
                <span>Subtotal</span>
                <span>{formattedTotal}</span>
              </div>

              <div className={styles.summaryItem}>
                <span>Frete</span>
                <span>Grátis</span>
              </div>

              <div className={styles.summaryTotal}>
                <strong>Total</strong>
                <strong>{formattedTotal}</strong>
              </div>

              <Button fullWidth>Finalizar Compra</Button>

              <Link to="/">
                <Button variant="secondary" fullWidth>
                  Continuar Comprando
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
