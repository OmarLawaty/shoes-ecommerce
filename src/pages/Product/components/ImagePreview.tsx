import { Box, Button, Flex, FlexProps } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

import { ImageButton } from './ImageButton';
import { useCounter } from '../../../hooks/index';

// just a static array including imaginary images till the backend server is on
const images = ['green', 'blue', 'purple', 'orange'];

interface ImagePreviewProps extends FlexProps {
  initialImageIndex?: number;
  setCurrentImageIndex?: (index: number) => void;
  closeLightBox?: () => void;
  type: 'preview' | 'lightbox';
}

export const ImagePreview = ({
  initialImageIndex,
  setCurrentImageIndex,
  closeLightBox,
  type,
  ...props
}: ImagePreviewProps) => {
  const imageIndex = useCounter(initialImageIndex || 0, images.length - 1, true);

  if (setCurrentImageIndex) setCurrentImageIndex(imageIndex.count);

  return (
    <>
      {type === 'lightbox' && (
        <Box
          w="100vw"
          h="100vh"
          position="fixed"
          left="50%"
          top="50%"
          transform="translate(-50%,-50%)"
          bgColor="#80808087"
          zIndex={10}
          onClick={() => {
            if (closeLightBox) closeLightBox();
          }}
        />
      )}

      <Flex
        direction="column"
        align="center"
        position={type === 'lightbox' ? 'absolute' : 'unset'}
        left="50%"
        top="50%"
        zIndex={11}
        transform={type === 'lightbox' ? 'translate(-50%,-50%)' : 'unset'}
      >
        {type === 'lightbox' && (
          <Box
            alignSelf="flex-end"
            m="0 60px 10px 0"
            fontSize="2.5rem"
            cursor="pointer"
            _hover={{ color: 'orange' }}
            onClick={() => {
              if (closeLightBox) closeLightBox();
            }}
          >
            <MdClose />
          </Box>
        )}

        <Flex align="center" justify="center" w="100%">
          <ImageNavButton parentType={type} direction="back" clickHandler={imageIndex.decrement} />

          <Box
            minW={['unset', null, '350px']}
            minH={['350px', null, '350px']}
            w={['100vw', '95vw', type === 'lightbox' ? '35vw' : '30vw']}
            h={['70vw', null, type === 'lightbox' ? '35vw' : '30vw']}
            borderRadius={['unset', '1em']}
            transition="all 0.5s"
            bgColor={images[imageIndex.count]}
            cursor={['unset', null, 'pointer']}
            {...props}
          ></Box>

          <ImageNavButton parentType={type} direction="forward" clickHandler={imageIndex.increment} />
        </Flex>

        <Flex direction="row">
          {images.map((image, index) => {
            return (
              <ImageButton
                key={index}
                image={image}
                display={['none', null, 'block']}
                border={imageIndex.count === index ? '3px solid orange' : 'none'}
                _after={
                  imageIndex.count === index
                    ? {
                        content: '""',
                        position: 'absolute',
                        boxSize: 'full',
                        bgColor: 'white',
                        opacity: '0.7',
                        borderRadius: '6px',
                      }
                    : 'none'
                }
                onClick={() => {
                  imageIndex.setCount(index);
                  if (setCurrentImageIndex) setCurrentImageIndex(index);
                }}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

interface ImageNavButtonProps {
  direction: 'back' | 'forward';
  parentType: 'lightbox' | 'preview';
  clickHandler: () => void;
}

const ImageNavButton = ({ direction, parentType, clickHandler }: ImageNavButtonProps) => {
  return (
    <Button
      bgColor="#ffffff"
      minW="40px"
      minH="40px"
      borderRadius="50%"
      position={['absolute', null, 'unset']}
      left={direction === 'back' ? '0' : 'unset'}
      right={direction === 'forward' ? '0' : 'unset'}
      transform={
        direction === 'back'
          ? ['translateX(80%)', 'translateX(100%)', 'translateX(50%)']
          : ['translateX(-80%)', 'translateX(-100%)', 'translateX(-50%)']
      }
      display={parentType === 'lightbox' ? 'flex' : ['flex', null, 'none']}
      onClick={clickHandler}
    >
      {direction === 'back' ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </Button>
  );
};
