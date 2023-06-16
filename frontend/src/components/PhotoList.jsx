import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos, favoritePhotos, onToggleFavorite } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          name={photo.user.name}
          profile={photo.user.profile}
          isFavorite={favoritePhotos.includes(photo.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ul>
  );
};

export default PhotoList