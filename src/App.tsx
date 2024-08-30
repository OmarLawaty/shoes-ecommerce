import { Container } from '@chakra-ui/react';

import { Header } from './components/Header';
import { Product } from './pages';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/:productId" element={<Product />} />
      </Routes>
    </Container>
  );
};

export default App;
