import { Box, Button, Flex, FlexProps } from '@chakra-ui/react';
import { IoCloseSharp } from 'react-icons/io5';

import { NavItems } from './NavItems';
import { PopUp } from '../../hooks/types';

export const NavBar = ({ isOpen, onClose, ...props }: FlexProps & PopUp) => (
  <Flex
    direction="column"
    pos="fixed"
    left={isOpen ? '0' : '-100vw'}
    transition="left 0.5s"
    height="100vh"
    w="100vw"
    zIndex="20"
    {...props}
  >
    <Box
      minH="100vh"
      w={isOpen ? '100vw' : '0'}
      transition="width 0.55s"
      zIndex="21"
      bgColor="gray"
      opacity="0.5"
      onClick={onClose}
    />

    <Flex direction="column" pos="absolute" gap="20px" zIndex="22" bgColor="#ffffff" w="70%" minH="full" p="10">
      <Button width="min-content" color="gray" fontWeight="700" fontSize="1.5em" onClick={onClose}>
        <IoCloseSharp />
      </Button>

      <NavItems isMenu />
    </Flex>
  </Flex>
);
