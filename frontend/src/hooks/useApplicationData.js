// import { useState } from 'react';

// export default function useApplicationData() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [favoritePhotos, setFavoritePhotos] = useState([]);

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const openModal = (photo) => {
//     setSelectedPhoto(photo);
//     setIsModalOpen(true);
//   };

//   const toggleFavorite = (photoId) => {
//     if (favoritePhotos.includes(photoId)) {
//       setFavoritePhotos(favoritePhotos.filter((id) => id !== photoId));
//     } else {
//       setFavoritePhotos([...favoritePhotos, photoId]);
//     }
//   };

//   return {
//     isModalOpen,
//     selectedPhoto,
//     favoritePhotos,
//     closeModal,
//     openModal,
//     toggleFavorite,
//   };
// }
import { useReducer, useEffect } from 'react';

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

const reducer = function(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.photoId]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(id => id !== action.photoId)
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.data
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.data
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: true
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false
      };  
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const initialState = {
    isModalOpen: false,
    selectedPhoto: null,
    favoritePhotos: [],
    photoData: null,
    topicData: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const toggleFavorite = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };

  

  return {
    ...state,
    closeModal,
    openModal,
    toggleFavorite,
  };
}