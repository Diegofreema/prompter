import React from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({
  data,
  handleTagClick,
  searchText,
  setSearchText,
}) => {
  console.log(data);
  return (
    <div className="mt-16  prompt_layout">
      {data
        .filter((item) =>
          searchText.toLowerCase() === ''
            ? item
            : item.tag.toLowerCase().includes(searchText) ||
              item.creator?.username.toLowerCase().includes(searchText) ||
              item.prompt.toLowerCase().includes(searchText)
        )
        .map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
    </div>
  );
};

export default PromptCardList;
