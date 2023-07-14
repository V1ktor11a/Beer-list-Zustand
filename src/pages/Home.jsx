import React from 'react';
import ItemCard from '../components/ItemCard';
import { Box, Grid, Typography } from '@mui/material';

const ITEM = {
  id: 1,
  name: 'Buzz',
  tagline: 'A Real Bitter Experience.',
  first_brewed: '09/2007',
  description:
    'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 4.5,
  ibu: 60,
  target_fg: 1010,
  target_og: 1044,
  ebc: 20,
  srm: 10,
  ph: 4.4,
  attenuation_level: 75,
};

const Home = () => {
  return (
    <Box>
      <Typography
        align='center'
        variant='h5'
        component='h1'
        sx={{ padding: '20px 0' }}
      >
        List Of Items
      </Typography>
      <Grid container justifyContent='center' spacing={2}>
        {Array.from(Array(15)).map((i, idx) => (
          <Grid item key={idx}>
            <ItemCard
              id={ITEM.id}
              name={ITEM.name}
              description={ITEM.description}
              imageUrl={ITEM.image_url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
