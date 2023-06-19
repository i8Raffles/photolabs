import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos, favoritePhotos, onToggleFavorite, openModal } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
          isFavorite={favoritePhotos.includes(photo.id)}
          onToggleFavorite={onToggleFavorite}
          openModal={openModal}
          photo={photo}
        />
      ))}
    </ul>
  );
};

export default PhotoList