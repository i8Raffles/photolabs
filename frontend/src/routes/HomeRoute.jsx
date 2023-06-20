import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  const { topics, photos, openModal, onToggleFavorite, favoritePhotos, fetchPhotosByTopic, light, switchLight } = props;
  
  const isFavPhotoExist = favoritePhotos.length > 0;
  

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} fetchPhotosByTopic={fetchPhotosByTopic} light={light} switchLight={switchLight}/>
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        onToggleFavorite={onToggleFavorite}
        openModal={openModal}
      />
    </div>
  );
};
export default HomeRoute;