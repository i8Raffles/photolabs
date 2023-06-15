
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;

  return (
    <div className='photo-list__item'>
      <PhotoFavButton />
      <img className='photo-list__image' src={imageSource || PhotoListItem.defaultProps.imageSource} />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={profile || PhotoListItem.defaultProps.profile} />
        <div className='photo-list__user-info'>
          {username || PhotoListItem.defaultProps.username}
        </div>
        <div className='photo-list__user-location'>
          {(location && location.city) || PhotoListItem.defaultProps.location.city} {(location && location.country) || PhotoListItem.defaultProps.location.country}
        </div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;