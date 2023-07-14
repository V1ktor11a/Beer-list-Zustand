import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useBeerStore } from '../store/store';

const SingleItem = () => {
  const { id } = useParams();

  const { allItems } = useBeerStore();

  const currentItem = allItems.find((item) => item.id === Number(id));
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>{currentItem.name}</h1>
    </div>
  );
};

export default SingleItem;
