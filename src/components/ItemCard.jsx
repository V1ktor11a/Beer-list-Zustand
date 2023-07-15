import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({
  id,
  name,
  description,
  imageUrl,
  onItemSelect,
  isSelected,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 350,
        height: 300,
        outline: isSelected ? '2px solid red' : 'none',
      }}
    >
      <CardActionArea
        sx={{ display: 'flex', height: '100%' }}
        onMouseUp={(e) => {
          switch (e.button) {
            case 0:
              navigate(`/items/${id}`);
              break;
            case 2:
              onItemSelect(id);
              break;
            default:
              break;
          }
        }}
        //Prevent context menu on right button mouse click
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <CardMedia
          component='img'
          sx={{
            width: 120,
            height: '100%',
            padding: 2,
            flexShrink: 0,
            objectFit: 'contain',
          }}
          image={imageUrl}
        />
        <CardContent
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Typography gutterBottom variant='h6' component='h6'>
            {name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              overflow: 'auto',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
