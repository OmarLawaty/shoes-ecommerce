import { useQuery } from './';
import { getAllProducts } from '../apis';

export const useProducts = () => {
  const productsResponse = useQuery<Product[]>(async () => await getAllProducts());

  return productsResponse;
};
