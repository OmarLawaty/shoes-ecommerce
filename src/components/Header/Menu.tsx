import { useEffect, useRef } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';

interface Props {
  closeMenu: (data: boolean) => void;
  isMenuVisible: boolean;
}

const anchorTagStyles = {
  fontWeight: '700',
  color: '#000',
};

const Menu = ({ closeMenu, isMenuVisible }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        closeMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuVisible]);
  return (
    <Flex
      as={motion.div}
      initial={{ left: '-200px' }}
      animate={{ left: 0 }}
      ref={menuRef}
      direction="column"
      pos="absolute"
      transform="translateX(-16%)"
      top="0"
      z-index="20"
      bgColor="#ffffff"
      p="30px 15px"
      width="70%"
      height="100vh"
      boxShadow="200px 0px 0px 200px rgba(0,0,0,.40)"
    >
      <Flex direction="column" gap="20px">
        <Button
          width="min-content"
          color="gray"
          fontWeight="700"
          fontSize="1.5em"
          onClick={() => {
            closeMenu(false);
          }}
        >
          <IoCloseSharp />
        </Button>
        <Box as="a" href="#" style={anchorTagStyles}>
          Collection
        </Box>

        <Box as="a" href="#" style={anchorTagStyles}>
          Men
        </Box>

        <Box as="a" href="#" style={anchorTagStyles}>
          Women
        </Box>

        <Box as="a" href="#" style={anchorTagStyles}>
          About
        </Box>

        <Box as="a" href="#" style={anchorTagStyles}>
          Contact
        </Box>
      </Flex>
    </Flex>
  );
};

export default Menu;
