import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { id, slug, label } = props;
  return (
    <div className="topic-list__item">
      <span>
        <h3>{label}</h3>
      </span>
    </div>
  );
}

export default TopicListItem