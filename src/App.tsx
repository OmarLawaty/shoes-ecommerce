import { Route, Routes } from 'react-router';
import { Container } from '@chakra-ui/react';

import { Header } from './components/Header';
import { Product } from './pages';

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
