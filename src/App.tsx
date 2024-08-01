import { Container } from '@chakra-ui/react';

import { Header } from './components/Header';
import { ProductPage } from './pages';

const App = () => {
  return (
    <Container>
      <Header />
      <ProductPage />
    </Container>
  );
};

export default App;
