import { GetStaticProps } from 'next';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { getProducts } from '../services/productService';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const Home = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};

export default Home;
