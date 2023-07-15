import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SingleItem from './pages/SingleItem';
import { Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='items/:id' element={<SingleItem />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
