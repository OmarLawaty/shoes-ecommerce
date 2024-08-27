import { Flex, Image } from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';

import { NavBar } from './';
import { Logo } from '../Logo';
import { NavItems } from './NavItems';
import { usePopUp } from '../../hooks';
import { Cart } from '../Cart';

export const Header = () => {
  const navMenu = usePopUp();

  return (
    <Flex
      as="header"
      pos="relative"
      justify="space-between"
      flex="1"
      minH={['16', '20']}
      borderBottomWidth={['0', '1px']}
      borderColor="gray"
      mb={['0', '4', '16']}
    >
      <Flex gap="8">
        <Flex display={['flex', null, 'none']} align="center" fontSize="2em" cursor="pointer" onClick={navMenu.onOpen}>
          <RxHamburgerMenu />
        </Flex>

        <Logo fontSize="1.5em" fontWeight="700" />

        <NavItems display={['none', null, 'flex']} gap="3.5" fontWeight="700" />
      </Flex>

      <Flex gap="5">
        <Cart />

        <Image
          boxSize={['40px', '45px']}
          borderRadius="50%"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alignSelf="center"
          _hover={{ border: '2px solid orange' }}
        />
      </Flex>

      <NavBar {...navMenu} />
    </Flex>
  );
};
