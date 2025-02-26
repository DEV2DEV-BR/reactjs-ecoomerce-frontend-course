import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./product-card.module.scss";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/global";
import useFormatter from "../../hooks/utils/use-formatter";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  isInCart: boolean;
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
}

export function ProductCard({
  id,
  title,
  description,
  price,
  imageUrl,
  isInCart,
}: Omit<ProductCardProps, "onAddToCart" | "onRemoveFromCart">) {
  const { addToCart, removeFromCart } = useGlobalContext();
  const { formatMoney } = useFormatter();
  const navigate = useNavigate();

  function handleCartAction(e: React.MouseEvent) {
    e.stopPropagation();
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  }

  return (
    <div
      className={styles.productCard}
      onClick={() => navigate(`/product/${id}`)}
    >
      <img className={styles.productImage} src={imageUrl} alt={title} />

      <div className={styles.productInfo}>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
          <span className={styles.price}>{formatMoney(price)}</span>
        </div>

        <Button
          variant={isInCart ? "danger" : "primary"}
          onClick={handleCartAction}
          fullWidth
        >
          {isInCart ? (
            <>
              <CloseOutlined />
              Remover do Carrinho
            </>
          ) : (
            <>
              <ShoppingCartOutlined />
              Adicionar ao Carrinho
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
