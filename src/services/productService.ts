type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
  };
  
  export const getProducts = async (): Promise<Product[]> => {
    // 예시: 실제 API 호출 대신 하드코딩된 데이터 사용
    return [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
      { id: 3, name: 'Product 3', description: 'Description 3', price: 30 },
    ];
  };
  