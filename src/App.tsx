import { Container } from '@chakra-ui/react';

import { Header } from './components/Header';
import { ProductPage } from './pages';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/:productId" element={<ProductPage />} />
      </Routes>
    </Container>
  );
};

export default App;
