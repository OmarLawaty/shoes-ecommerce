import { Flex, FlexProps } from '@chakra-ui/react';

import { links } from '../../const';
import type { NavItem } from './type';

interface NavMenuProps extends FlexProps {
  isMenu?: boolean;
}

export const NavItems = ({ isMenu = false, ...props }: NavMenuProps) => (
  <Flex flexDir={isMenu ? 'column' : 'row'} {...props}>
    {links.map(({ label, href }) =>
      isMenu ? <MenuItem title={label} href={href} /> : <NavItem key={label} title={label} href={href} />
    )}
  </Flex>
);

const MenuItem = ({ title, href, ...props }: NavItem & FlexProps) => (
  <Flex as="a" href={href} fontWeight="700" color="black" {...props}>
    {title}
  </Flex>
);

const NavItem = ({ title, href }: NavItem) => (
  <Flex
    as="a"
    href={href}
    color="gray"
    position="relative"
    align="center"
    justifyContent="center"
    _after={{
      content: "''",
      bgColor: 'orange',
      display: 'block',
      width: '0%',
      height: '5px',
      position: 'absolute',
      bottom: '0',
      transition: 'width 0.3s',
    }}
    _hover={{ _after: { w: 'full' }, color: 'black' }}
  >
    {title}
  </Flex>
);
