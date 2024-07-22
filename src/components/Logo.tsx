import { FlexProps, Heading } from '@chakra-ui/react';

interface LogoProps extends FlexProps {}

export const Logo = (props: LogoProps) => (
  <Heading
    as="a"
    href="/"
    textTransform="uppercase"
    display="flex"
    alignItems="center"
    justifyContent="center"
    cursor="pointer"
    userSelect="none"
    {...props}
  >
    Shoes
  </Heading>
);
