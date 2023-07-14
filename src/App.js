import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleItem from './pages/SingleItem';
import { Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='md' sx={{ bgcolor: '#cfe8fc' }}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/item' exact element={<SingleItem />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
