import { ProductCard } from "../../components/ProductCard";
import { useGlobalContext } from "../../context/global";
import styles from "./home.module.scss";

function Home() {
  const { productsList } = useGlobalContext();
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>E-commerce Developer</h1>
      </div>

      <div className={styles.products}>
        {productsList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
