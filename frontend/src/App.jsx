import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import { PhotoDetailsModal } from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    isModalOpen,
    selectedPhoto,
    favoritePhotos,
    closeModal,
    openModal,
    toggleFavorite
  } = useApplicationData();

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchPhotos();
    fetchTopics();
  }, []);
  const fetchPhotos = () => {
    fetch('/api/photos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchTopics = () => {
    fetch('/api/topics')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch topics');
        }
        return response.json();
      })
      .then((data) => {
        setTopics(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };



  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch photos for the topic');
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [favoritePhotos, setFavoritePhotos] = useState([]);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const openModal = (photo) => {
  //   setSelectedPhoto(photo);
  //   setIsModalOpen(true);
  // };

  // const toggleFavorite = (photoId) => {
  //   if (favoritePhotos.includes(photoId)) {
  //     setFavoritePhotos(favoritePhotos.filter((id) => id !== photoId));
  //   } else {
  //     setFavoritePhotos([...favoritePhotos, photoId]);
  //   }
  // };

  return (
    <div className="App">
      <HomeRoute
        fetchPhotosByTopic={fetchPhotosByTopic}
        photos={photos}
        topics={topics}
        openModal={openModal}
        onToggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
      />
      {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={closeModal}
          onToggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
        />
      )}
    </div>
  );
};
export default App;