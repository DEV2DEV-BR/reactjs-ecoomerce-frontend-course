import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";
import { Button } from "../../components/ui/Button";
import { useGlobalContext } from "../../context/global";
import useFormatter from "../../hooks/utils/use-formatter";
import styles from "./product.module.scss";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productsList, addToCart, removeFromCart } = useGlobalContext();
  const { formatMoney } = useFormatter();

  const product = productsList?.find((product) => product.id === id);
  const relatedProducts = productsList?.filter((p) => p.id !== id).slice(0, 4);

  const handleCartAction = () => {
    if (!product) return;

    if (product.isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  if (!product) {
    return (
      <div className={styles.container}>
        <h1>Produto não encontrado</h1>
        <Button onClick={() => navigate("/")}>Voltar para home</Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img src={product.imageUrl} alt={product.title} />
        </div>

        <div className={styles.info}>
          <h1>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <span className={styles.price}>{formatMoney(product.price)}</span>

          <div className={styles.details}>
            <h2>Descrição</h2>
            <p>{product.detailedDescription}</p>

            <ul>
              <li>Garantia de 12 meses</li>
              <li>Frete grátis para todo Brasil</li>
              <li>Produto original com nota fiscal</li>
              <li>Suporte técnico especializado</li>
            </ul>
          </div>

          <div className={styles.actions}>
            <Button
              variant={product.isInCart ? "danger" : "primary"}
              fullWidth
              onClick={handleCartAction}
            >
              {product.isInCart ? (
                <>
                  <CloseOutlined size={20} />
                  Remover do Carrinho
                </>
              ) : (
                <>
                  <ShoppingCartOutlined size={20} />
                  Adicionar ao Carrinho
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.relatedProducts}>
        <h2>Produtos Relacionados</h2>
        <div className={styles.carousel}>
          {relatedProducts?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
