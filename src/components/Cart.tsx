import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import { BsCart2 } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { usePopUp } from '../hooks';
import { useCartStore } from '../stores';

export const Cart = () => {
  const cartPopUp = usePopUp();
  const cartStore = useCartStore();

  return (
    <>
      <Flex align="center" onClick={() => cartPopUp.onToggle()} fontSize="1.5rem" cursor="pointer">
        <BsCart2 />

        <Box
          fontSize="0.7rem"
          bgColor="orange"
          color="#ffffffff"
          fontWeight="700"
          p="0 8px"
          borderRadius="20px"
          transform="translate(-50%,-50%)"
        >
          {cartStore.cart.reduce((acc, current) => acc + current.quantity, 0)}
        </Box>
      </Flex>

      <Flex
        direction="column"
        gap="8"
        bg="white"
        p="5"
        pos="absolute"
        right="0"
        top={cartPopUp.isOpen ? '100%' : '-1000%'}
        zIndex="100"
        borderRadius="5px"
        boxShadow="5px 10px 30px -10px gray"
        minW="80"
        minH="48"
        transition="0.5s"
      >
        <Flex justify="space-between" pb="2" borderBottom="1px solid blue">
          <Box>Cart</Box>
          <Box onClick={() => cartStore.cart.forEach(({ id }) => cartStore.removeItem(id))} cursor="pointer">
            Clear
          </Box>
        </Flex>

        {cartStore.cart.map((cartItem) => {
          const displayedPrice =
            cartItem.price.discount !== 0 ? cartItem.price.value * (1 - cartItem.price.discount) : cartItem.price.value;

          return (
            <Flex key={cartItem.id} direction="row" align="center" gap="4" color="gray" fontSize={['.9rem', 'unset']}>
              <Box boxSize="12" borderRadius="5px" bgImg={cartItem.images[0].image} />

              <Flex direction="column">
                <Text noOfLines={1}>{cartItem.title}</Text>

                <Flex>
                  {cartItem.price.currency} {displayedPrice} x {cartItem.quantity}{' '}
                  <Box ml="1" fontWeight="700" color="#252626">
                    {cartItem.price.currency} {(displayedPrice * cartItem.quantity).toFixed(2)}
                  </Box>
                </Flex>
              </Flex>

              <Box cursor="pointer" onClick={() => cartStore.removeItem(cartItem.id)}>
                <RiDeleteBin6Line />
              </Box>
            </Flex>
          );
        })}

        {cartStore.cart.length > 0 ? (
          <Button w="full" borderRadius="10px" h="12" bgColor="orange.500" textColor="#ffffff">
            Checkout
          </Button>
        ) : (
          <Text textAlign="center" color="gray">
            Your cart is empty
          </Text>
        )}
      </Flex>
    </>
  );
};
