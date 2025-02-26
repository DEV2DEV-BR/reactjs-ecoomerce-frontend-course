import { ProductCard } from "../../components/ProductCard";
import styles from "./home.module.scss";
import { useGlobalContext } from "../../context/global";

function Home() {
  const { productsList } = useGlobalContext();
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>E-commerce Developer</h1>
      </div>

      <div className={styles.products}>
        {productsList.map((product) => (
          <ProductCard
            onAddToCart={() => {}}
            onRemoveFromCart={() => {}}
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
