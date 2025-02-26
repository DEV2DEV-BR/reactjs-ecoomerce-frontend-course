import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { useGlobalContext } from "../../context/global";
import useFormatter from "../../hooks/utils/use-formatter";
import styles from "./cart.module.scss";

function Cart() {
  const { cart, removeFromCart, addCheckout } = useGlobalContext();
  const { formatMoney } = useFormatter();

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const formattedTotal = formatMoney(total);

  return (
    <div className={styles.container}>
      <h1>Carrinho de Compras</h1>

      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Seu carrinho está vazio</p>
          <Link to="/">
            <Button>Continuar Comprando</Button>
          </Link>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <Link to={`/product/${item.id}`} className={styles.productInfo}>
                  <img src={item.imageUrl} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className={styles.price}>
                      {formatMoney(item.price)}
                    </span>
                  </div>
                </Link>

                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
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

              <Button fullWidth onClick={() => addCheckout(cart)}>
                Finalizar Compra
              </Button>

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
