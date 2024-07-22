import { ChakraTheme, extendBaseTheme } from '@chakra-ui/react';

export const px = [4, 6, 12, 32];

//  Pages unified y padding
export const py = [6, 8, 10, 12];

export const breakPoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '90em', // 1440px
  '2xl': '96em', // 1536px
};

const Container: ChakraTheme['components']['Container'] = {
  baseStyle: {
    maxW: '8xl',
    display: 'flex',
    flexDir: 'column',
    px,
  },
};

export default extendBaseTheme({
  components: {
    Container,
  },
  breakpoints: breakPoints,
});
