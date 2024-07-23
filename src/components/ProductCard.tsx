import styles from '../styles/ProductCard.module.css';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.card}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
