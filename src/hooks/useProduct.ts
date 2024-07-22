import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getProductById } from '../apis';

type ProductData =
  | {
      product: undefined;
      isLoading: true;
      isError: false;
      error: undefined;
      isSuccess: false;
    }
  | {
      isLoading: false;
      isError: true;
      isSuccess: false;
      product: undefined;
      error: Error;
    }
  | {
      isLoading: false;
      isError: false;
      isSuccess: true;
      error: undefined;
      product: Product;
    };

export const useProduct = () => {
  const id = useParams().productId;
  const [product, setProduct] = useState<Product | undefined>();
  const [productData, setProductData] = useState<ProductData>(() => ({
    product: undefined,
    isLoading: true,
    isError: false,
    isSuccess: false,
    error: undefined,
  }));

  useEffect(() => {
    if (!id) return;

    (async () => {
      await getProductById(id)
        .then((res) => {
          setProduct(res?.data);
        })
        .catch((err) =>
          setProductData({ isLoading: false, isSuccess: false, isError: true, product: undefined, error: err })
        );
    })();
  }, [id]);

  useEffect(() => {
    if (!product) return;

    setProductData({ isLoading: false, isSuccess: true, isError: false, product: product, error: undefined });
  }, [product]);

  return productData;
};
