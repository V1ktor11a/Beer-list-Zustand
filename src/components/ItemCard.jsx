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
        width: 250,
        height: 350,
        outline: isSelected ? '2px solid red' : 'none',
      }}
    >
      <CardActionArea
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
            width: '100%',
            height: 250,
            padding: 2,
            flexShrink: 0,
            objectFit: 'contain',
          }}
          image={imageUrl}
        />
        <CardContent
          sx={{
            height: '100%',
          }}
        >
          <Typography variant='h6' component='h6' align='center'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
