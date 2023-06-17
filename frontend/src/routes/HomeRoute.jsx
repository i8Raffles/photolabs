import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  const { topics, photos, openModal } = props;
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  // function to toggle favorite status of a photo
  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter((id) => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  const isFavPhotoExist = favoritePhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} favoritePhotos={favoritePhotos} onToggleFavorite={toggleFavorite} openModal={openModal} />
    </div>
  );
};
export default HomeRoute;