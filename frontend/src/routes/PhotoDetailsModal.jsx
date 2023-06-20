import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import PhotoFavButton from '../components/PhotoFavButton';


export const PhotoDetailsModal = (props) => {
  const { photo, closeModal, onToggleFavorite, favoritePhotos } = props;
  const [isFavorite, setIsFavorite] = useState(favoritePhotos.includes(photo.id));

  const handleFavoriteToggle = (photoId) => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(photoId !== undefined ? photoId : photo.id);
  };


  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={handleCloseModal}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>


      <div className='photo-details-modal__top-bar'>
        <div>
          <PhotoFavButton isFavorite={isFavorite} onToggleFavorite={handleFavoriteToggle} />
          <img className='photo-details-modal__image' src={photo.urls.full} alt='Full Photo'/>
          <div className='photo-list__user-details'>
            <img className='photo-list__user-profile' src={photo.user.profile} alt="User Profile" />
            <div>
            <div className='photo-list__user-info'>
              {photo.user.username}
            </div>
            <div className='photo-list__user-location'>
              {photo.location.city} {photo.location.country}
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='photo-details-modal__images'>
      <header className='photo-details-modal__header'>Related Photos</header>

        <PhotoList photos={Object.values(photo.similar_photos)} onToggleFavorite={handleFavoriteToggle} isFavorite={photo.isFavorite} favoritePhotos={favoritePhotos} />

      </div>

    </div>
  );
};
