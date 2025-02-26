import { ProductCard } from "../../components/ProductCard";
import { productsFakeData } from "../../data/fakeData";
import styles from "./home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>E-commerce Developer</h1>
      </div>

      <div className={styles.products}>
        {productsFakeData.map((product) => (
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
