import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { id, slug, label, fetchPhotosByTopic } = props;

  const handleTopicClick = () => {
    fetchPhotosByTopic(id);
  }

  return (
    <div className="topic-list__item" onClick={handleTopicClick}>
      <span>
        <h3>{label}</h3>
      </span>
    </div>
  );
}

export default TopicListItem