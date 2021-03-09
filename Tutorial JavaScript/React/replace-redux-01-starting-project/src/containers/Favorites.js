import React, { useContext, useState } from 'react';
// import { useSelector } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';
// import { ProudctsContext } from '../context/product-context'
import { useStore } from '../hooks-store/store';

const Favorites = props => {
  const state = useStore()[0];
  const favoriteProducts = state.products.filter(p => p.isFavorite);
  // const favoriteProducts = useSelector(state =>
  // state.shop.products.filter(p => p.isFavorite)
  // );
  // const favoriteProducts = useContext(ProudctsContext).products.filter(p => p.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
