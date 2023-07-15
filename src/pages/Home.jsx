import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { Box, Fab, Grid, Typography } from '@mui/material';
import { useBeerStore } from '../store/store';

const Home = () => {
  const [reducedList, setReducedList] = useState([]);
  const {
    allItems,
    saveAllItems,
    selectedItems,
    setSelectedItems,
    onSelectedDelete,
    page,
  } = useBeerStore();

  //Fetch new items
  const getData = async (page = 1) => {
    const data = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}`
    ).then((response) => response.json());

    saveAllItems(data);
  };

  // Gets initial data and recalculates visible cards
  useEffect(() => {
    if (allItems === undefined) {
      getData().catch(console.error);
    }
    if (allItems !== undefined) {
      const data = allItems.slice(0, 15);

      setReducedList(data);
    }
  }, [allItems]);

  // Loads next pages
  useEffect(() => {
    if (allItems !== undefined && allItems.length === 0 && page !== 1) {
      getData(page).catch(console.error);
    }
  }, [page]);

  // Toggle item selection
  const onItemSelect = (id) => {
    let newSelected = [...selectedItems];
    if (selectedItems.includes(id)) {
      // element already selected
      newSelected = newSelected.filter((el) => el !== id);
    } else {
      // element is not selected
      newSelected.push(id);
    }
    setSelectedItems(newSelected);
  };

  const onSelectionDelete = () => {
    let filteredItems = [...allItems];
    selectedItems.forEach((selectedId) => {
      filteredItems = filteredItems.filter((item) => selectedId !== item.id);
    });
    onSelectedDelete(filteredItems);
  };

  return (
    <Box>
      {selectedItems.length > 0 && (
        <Fab
          variant='extended'
          color='error'
          sx={{ position: 'fixed', bottom: 40, right: 60 }}
          onClick={onSelectionDelete}
        >
          Delete selected
        </Fab>
      )}

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
              isSelected={selectedItems.includes(item.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
