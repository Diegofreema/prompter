'use client';

import React, { useState, useEffect } from 'react';
import PromptCard from './PromptCard';
import PromptCardList from './PromptCardList';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, [searchText]);
  const handleTagClick = (tag) => {
    setSearchText(tag);
  };
  return (
    <section className="feed">
      <form action="" className="relative v w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearch}
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={posts}
        searchText={searchText}
        setSearchText={setSearchText}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
