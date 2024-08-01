import { Box, FlexProps } from '@chakra-ui/react';

interface ImageButtonProps extends FlexProps {
  image: string;
}

export const ImageButton = ({ image, ...props }: ImageButtonProps) => {
  return (
    <Box
      {...props}
      cursor="pointer"
      bgColor={image}
      minH="60px"
      minW="60px"
      margin="20px 1.5vw"
      borderRadius="10px"
      boxSize="6.5vw"
      pos="relative"
    ></Box>
  );
};
