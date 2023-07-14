import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const ItemCard = ({ id, name, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea
        onClick={() => {
          console.log(id);
        }}
      >
        <CardMedia component='img' height='200' image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
