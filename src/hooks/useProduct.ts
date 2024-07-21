import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getProductById } from '../apis';

type ProductData =
  | {
      product: undefined;
      isLoading: true;
      isError: false;
      isSuccess: false;
    }
  | {
      isLoading: false;
      isError: true;
      isSuccess: false;
      product: undefined;
    }
  | {
      isLoading: false;
      isError: false;
      isSuccess: true;
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
  }));

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        await getProductById(id)
          .then((res) => setProduct(res?.data))
          .catch(() => setProductData({ isError: true, isLoading: false, isSuccess: false, product: undefined }));
      } finally {
        // eslint-disable-next-line no-unsafe-finally
        if (!product) return;

        setProductData({ isLoading: false, isSuccess: true, isError: false, product });
      }
    })();
  }, [id, product]);

  return productData;
};
