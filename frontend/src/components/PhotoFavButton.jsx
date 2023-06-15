import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favIcon, setFavIcon] = useState(false);

  const handleClick = () => {
    setFavIcon(!favIcon);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={favIcon ? "#C80000" : "#EEEEEE"} />
      </div>
    </div>
  );
}

export default PhotoFavButton;