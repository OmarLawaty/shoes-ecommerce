import axios from 'axios';

const BASE = axios.create({ baseURL: 'http://localhost:4000' });

export const getAllProducts = async () => {
  return await BASE.get<Product[]>('/products');
};

export const getProductById = async (id: string | undefined) => {
  if (!id) return undefined;

  return await BASE.get<Product>(`/products/${id}`);
};
