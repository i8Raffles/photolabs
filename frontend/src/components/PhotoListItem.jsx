
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, location, imageSource, name, profile, isFavorite, onToggleFavorite } = props;

  const handleFavoriteToggle = () => {
    onToggleFavorite(id);
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton isFavorite={isFavorite} onClick={handleFavoriteToggle} />
      <img className='photo-list__image' src={imageSource} alt="Photo" />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={profile} alt="User Profile" />
        <div className='photo-list__user-info'>
          {name}
        </div>
        <div className='photo-list__user-location'>
          {location.city} {location.country}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;