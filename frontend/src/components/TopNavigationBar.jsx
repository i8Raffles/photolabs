import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, fetchPhotosByTopic } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      {isFavPhotoExist && <FavBadge isFavPhotoExist={isFavPhotoExist} /> || <FavBadge />}
    </div>
  );
};

export default TopNavigation;