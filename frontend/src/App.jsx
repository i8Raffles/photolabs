import React from 'react';
import PhotoList from './components/PhotoList';
// import TopicListItem from './components/TopicListItem';
import TopicList from './components/TopicList';
// import PhotoListItem from './components/PhotoListItem';
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';


const App = () => {

  return (
    <div className="App">
      {/* <TopNavigationBar />
      <PhotoList /> */}
      <HomeRoute photos={photos} topics={topics} />
      {/* {Array.from(Array(3)).map((_, index) => <PhotoListItem key={index} />)} */}
    </div>
  );
};
export default App;