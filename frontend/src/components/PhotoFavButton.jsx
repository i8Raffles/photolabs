import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { isFavorite, onToggleFavorite } = props;
  const handleClick = () => {
    onToggleFavorite();
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={isFavorite ? "#C80000" : "#EEEEEE"} />
      </div>
    </div>
  );
};

export default PhotoFavButton;