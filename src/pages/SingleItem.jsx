import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useBeerStore } from '../store/store';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Typography,
} from '@mui/material';

const SingleItem = () => {
  const { id } = useParams();

  const { allItems } = useBeerStore();

  const currentItem = allItems?.find((item) => item.id === Number(id));
  // Redirect to home page if current item not found
  if (currentItem === undefined) {
    return <Navigate to='/' />;
  }
  return (
    <Box sx={{ padding: 2 }}>
      <Card sx={{ display: 'flex', width: '100%', height: 500 }}>
        <CardMedia
          component='img'
          sx={{
            width: 250,
            height: '100%',
            padding: 2,
            flexShrink: 0,
            objectFit: 'contain',
          }}
          image={currentItem.image_url}
        />
        <CardContent
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Typography gutterBottom variant='h6' component='h6'>
            {currentItem.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              overflow: 'auto',
            }}
          >
            {currentItem.description}
          </Typography>
          <Fab
            variant='extended'
            sx={{ position: 'fixed', bottom: 40, right: 60 }}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              Back to the list
            </Link>
            {/* <Link to='/'>Back to the list</Link> */}
          </Fab>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SingleItem;
