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

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem