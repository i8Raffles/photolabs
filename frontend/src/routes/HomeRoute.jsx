import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  const { topics, photos } = props;
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  
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
      <PhotoList photos={photos} favoritePhotos={favoritePhotos} onToggleFavorite={toggleFavorite} />
    </div>
  );
};
export default HomeRoute;