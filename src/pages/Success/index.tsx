import { CheckCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { useGlobalContext } from "../../context/global";
import useFormatter from "../../hooks/utils/use-formatter";
import styles from "./success.module.scss";

export default function Success() {
  const { saleResume } = useGlobalContext();
  const { formatMoney } = useFormatter();

  if (!saleResume) {
    return <div>Não há pedidos</div>;
  }

  const total = saleResume.products.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CheckCircleOutlined className={styles.icon} />

        <h1>Pagamento Confirmado!</h1>
        <p>Obrigado pela sua compra</p>

        <div className={styles.orderInfo}>
          <h2>Resumo do Pedido</h2>
          <div className={styles.items}>
            {saleResume.products.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.imageUrl} alt={item.title} />
                <div className={styles.itemInfo}>
                  <h3>{item.title}</h3>
                  <span>{formatMoney(item.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.total}>
            <strong>Total:</strong>
            <strong>{formatMoney(total)}</strong>
          </div>
        </div>

        <Link to="/">
          <Button>
            <HomeOutlined />
            Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
