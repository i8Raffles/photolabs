
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile, isFavorite, onToggleFavorite, openModal, photo } = props;

  const handleFavoriteToggle = () => {
    onToggleFavorite(id);
  };

  const handleClick = () => {
    openModal(photo);
  };
  

  return (
    <div className='photo-list__item'>
      <PhotoFavButton isFavorite={isFavorite} onToggleFavorite={handleFavoriteToggle} />
      <img className='photo-list__image' src={imageSource} alt="Photo" onClick={handleClick}/>
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={profile} alt="User Profile" />
        <div className='photo-list__user-info'>
          {username}
        </div>
        <div className='photo-list__user-location'>
          {location.city} {location.country}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;