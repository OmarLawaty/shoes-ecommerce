import { Flex, Image } from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';

import { NavBar } from './';
import { Logo } from '../Logo';
import { NavItems } from './NavItems';
import { usePopUp } from '../../hooks';

export const Header = () => {
  const navMenu = usePopUp();

  return (
    <Flex
      as="header"
      pos="relative"
      justify="space-between"
      flex="1"
      minH={[10, 16, 20]}
      borderBottomWidth="1px"
      borderColor="gray"
    >
      <Flex gap="8">
        <Flex display={['flex', null, 'none']} align="center" fontSize="2em" cursor="pointer" onClick={navMenu.onOpen}>
          <RxHamburgerMenu />
        </Flex>

        <Logo fontSize="1.5em" fontWeight="700" />

        <NavItems gap="3.5" fontWeight="700" />
      </Flex>

      <Image
        width="45px"
        height="45px"
        borderRadius="50%"
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alignSelf="center"
        _hover={{ border: '2px solid orange' }}
      />

      <NavBar {...navMenu} />
    </Flex>
  );
};
