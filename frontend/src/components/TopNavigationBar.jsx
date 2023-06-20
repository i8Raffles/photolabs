import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, fetchPhotosByTopic, light, switchLight } = props;

  const handleClick = () => switchLight();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <button onClick={handleClick}>
      {light === "on" && <span className="on">Dark Mode</span>}
      {light === "off" && <span className="off">Light Mode</span>}
      </button>
      {isFavPhotoExist && <FavBadge isFavPhotoExist={isFavPhotoExist} /> || <FavBadge />}
    </div>
  );
};

export default TopNavigation;