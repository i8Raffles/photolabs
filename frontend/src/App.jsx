import React, {useState} from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { PhotoDetailsModal } from './routes/PhotoDetailsModal'


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};
export default App;