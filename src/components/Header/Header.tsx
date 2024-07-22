import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';

import Menu from './Menu';

const NavLink = ({ content, href }: { content: string; href: string }) => {
  return (
    <Box
      as="a"
      href={href}
      color="gray"
      display="block"
      position="relative"
      _after={{
        content: "''",
        bgColor: 'orange',
        display: 'block',
        width: '100%',
        height: '5px',
        position: 'absolute',
        top: '70px',
        transition: '0.2s ease-in-out',
        transform: 'scaleX(0)',
        transformOrigin: 'center',
      }}
      _hover={{ _after: { transform: 'scaleX(1)' } }}
    >
      {content}
    </Box>
  );
};

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const closeMenu = (data: boolean) => {
    setIsMenuVisible(data);
  };

  return (
    <>
      <Flex as="header" m="0% 9%" p="40px 0" pos="relative" borderBottom="1px solid #c9c9c9">
        {isMenuVisible && <Menu closeMenu={closeMenu} isMenuVisible={isMenuVisible} />}

        <Flex align="center" gap="30px">
          <Box
            display={['block', null, 'none']}
            fontSize="2em"
            ml="auto"
            cursor="pointer"
            onClick={() => {
              setIsMenuVisible(!isMenuVisible);
            }}
          >
            <RxHamburgerMenu />
          </Box>

          <Box as="h1" fontSize="1.5em" fontWeight="700">
            SHOES
          </Box>

          <Flex gap="15px" fontWeight="700" display={['none', null, 'flex']}>
            <NavLink content="Collection" href="#" />
            <NavLink content="Men" href="#" />
            <NavLink content="Women" href="#" />
            <NavLink content="About" href="#" />
            <NavLink content="Contact" href="#" />
          </Flex>
        </Flex>

        <Flex ml="auto">
          <Box
            width="45px"
            height="45px"
            borderRadius="50%"
            bgImg="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bgPos="center"
            bgSize="cover"
            _hover={{ border: '2px solid orange' }}
          ></Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
