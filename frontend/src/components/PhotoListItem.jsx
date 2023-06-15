
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, location, imageSource, name, profile } = props;

  return (
    <div className='photo-list__item'>
      <PhotoFavButton />
      <img className='photo-list__image' src={imageSource} />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={profile} />
        <div className='photo-list__user-info'>
          {name}
        </div>
        <div className='photo-list__user-location'>
          {(location && location.city)} {(location && location.country)}
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;