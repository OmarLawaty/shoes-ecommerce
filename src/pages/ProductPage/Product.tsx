import { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import { ImagePreview, ProductInfo } from './components';
import { useProduct } from '../../hooks';

export const ProductPage = () => {
  const productData = useProduct();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxVisibility, setLightboxVisibility] = useState(false);

  const onSetCurrentImageIndex = (index: number) => {
    setCurrentImageIndex(index);
  };

  const onCloseLightBox = () => {
    setLightboxVisibility(false);
  };

  if (productData.isError) return <div>{productData.error.message}</div>;
  if (productData.isLoading) return <div>Loading ...</div>;

  return (
    <Flex gap="16" direction={['column', null, 'row']} w="100%" align="center">
      <ImagePreview
        type="preview"
        setCurrentImageIndex={onSetCurrentImageIndex}
        onClick={() => {
          if (window.innerWidth >= 768) setLightboxVisibility(true);
        }}
      />

      {lightboxVisibility && (
        <ImagePreview type="lightbox" closeLightBox={onCloseLightBox} initialImageIndex={currentImageIndex} />
      )}

      <ProductInfo product={productData.product} />
    </Flex>
  );
};
