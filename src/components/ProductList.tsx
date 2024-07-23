import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
