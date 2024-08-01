import { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import { ImagePreview } from './components';

export const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxVisibility, setLightboxVisibility] = useState(false);

  const onSetCurrentImageIndex = (index: number) => {
    setCurrentImageIndex(index);
  };

  const onCloseLightBox = () => {
    setLightboxVisibility(false);
  };

  return (
    <Flex direction="column" w={['100%', null, '50%']}>
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
    </Flex>
  );
};
