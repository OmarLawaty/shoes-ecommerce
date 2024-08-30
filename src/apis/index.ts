import axios from 'axios';

const BASE = axios.create({ baseURL: 'http://16.171.140.94:8800/' });

export const getAllProducts = async () => {
  return await BASE.get<Product[]>('/products');
};

export const getProductById = async (id: string | undefined) => {
  if (!id) return undefined;

  return await BASE.get<Product>(`/products/${id}`);
};
