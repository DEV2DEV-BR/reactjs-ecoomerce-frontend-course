import { CheckCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import useFormatter from "../../hooks/utils/use-formatter";
import styles from "./success.module.scss";

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  title: string;
  description: string;
  detailedDescription: string;
}

interface SuccessProps {
  cart: CartItem[];
}

const SuccessComponent: React.FC<SuccessProps> = ({ cart }) => {
  const { formatMoney } = useFormatter();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CheckCircleOutlined className={styles.icon} />

        <h1>Pagamento Confirmado!</h1>
        <p>Obrigado pela sua compra</p>

        <div className={styles.orderInfo}>
          <h2>Resumo do Pedido</h2>
          <div className={styles.items}>
            {cart.map((item) => (
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
};

export default SuccessComponent;
