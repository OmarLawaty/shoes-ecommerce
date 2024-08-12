import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';

import { useCounter, useLimitText } from '../../../hooks';
import { useCartStore } from '../../../stores';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const productDescription = useLimitText(product.description);
  const productCount = useCounter({ maxCount: 30 });

  const cartStore = useCartStore();

  return (
    <Flex direction="column" w="80%" h="50vh" minH="350px" gap="6">
      <Flex direction="column">
        <Text
          color="orange.400"
          textTransform="uppercase"
          letterSpacing="1px"
          fontSize="0.9rem"
          fontWeight="700"
          transform="scaleY(90%)"
        >
          {product.company.name}
        </Text>

        <Heading fontSize="4xl" fontWeight="700" mb="6">
          {product.title}
        </Heading>

        <Text fontSize="small" color="gray">
          {productDescription.text}
          <Box
            as="span"
            fontWeight="800"
            ml="1"
            cursor="pointer"
            color="orange.500"
            onClick={() => productDescription.toggle()}
          >
            {productDescription.isLimited ? 'Show More' : 'Show Less'}
          </Box>
        </Text>
      </Flex>

      <Box>
        <Flex direction="row" gap="4" align="center">
          <Text fontSize="2xl" fontWeight="700">
            {product.price.currency} {(product.price.value * (1 - product.price.discount || 1)).toFixed(2)}
          </Text>
          {product.price.discount === 0 ? null : (
            <Box bgColor="orange.100" fontWeight="700" color="orange.400" p="1px 2px" borderRadius="10%">
              {product.price.discount * 100}%
            </Box>
          )}
        </Flex>

        {product.price.discount === 0 ? null : (
          <Box color="gray.400" textDecoration="line-through">
            {product.price.currency} {product.price.value}
          </Box>
        )}
      </Box>

      <Flex gap="4" direction={['column', 'row']}>
        <Flex
          justify="space-between"
          align="center"
          bgColor="gray.200"
          w={['100%', '35%']}
          p="5px 10px"
          borderRadius="5px"
        >
          <Button color="orange.400" onClick={() => productCount.decrement()}>
            <FaMinus />
          </Button>

          <Box fontWeight="600">{productCount.count}</Box>

          <Button color="orange.400" onClick={() => productCount.increment()}>
            <FaPlus />
          </Button>
        </Flex>

        <Button
          leftIcon={<FaCartPlus />}
          bgColor="orange.500"
          color="#ffffff"
          width={['100%', '40%']}
          minW="10rem"
          p="2"
          borderRadius="5px"
          transition="0.5s"
          isDisabled={productCount.count === 0 ? true : false}
          cursor={productCount.count === 0 ? 'not-allowed' : 'pointer'}
          _hover={productCount.count === 0 ? {} : { boxShadow: '0px 0px 20px 5px rgba(214,161,3,.5)' }}
          onClick={() => cartStore.addItem(product.id, productCount.count)}
        >
          Add to cart
        </Button>
      </Flex>
    </Flex>
  );
};
