import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { Box, Grid, Typography } from '@mui/material';
import { useBeerStore } from '../store/store';

const Home = () => {
  const [reducedList, setReducedList] = useState([]);
  const { allItems, saveAllItems } = useBeerStore();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://api.punkapi.com/v2/beers?page=1').then(
        (response) => response.json()
      );

      saveAllItems(data);
    };
    if (allItems === undefined) {
      getData().catch(console.error);
    }
    if (allItems !== undefined) {
      const data = allItems.slice(0, 15);
      setReducedList(data);
    }
  }, [allItems]);

  const onItemSelect = (id) => {
    console.log(id);
  };

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
        {reducedList.map((item) => (
          <Grid item key={item.id}>
            <ItemCard
              id={item.id}
              name={item.name}
              description={item.description}
              imageUrl={item.image_url}
              onItemSelect={onItemSelect}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
