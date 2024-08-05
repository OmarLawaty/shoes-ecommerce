import { useParams } from 'react-router';

import { useQuery } from './';
import { getProductById } from '../apis';

export const useProduct = () => {
  const id = useParams().productId;

  const request = useQuery<Product>(async () => await getProductById(id));

  return request;
};
