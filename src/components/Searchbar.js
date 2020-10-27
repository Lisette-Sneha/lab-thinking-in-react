import React from 'react';

function SearchBar({ updateSearchResults }) {
  console.log('SearchBar');
  return (
    <div>
      <input type="search" onChange={updateSearchResults} />
    </div>
  );
}

export default SearchBar;
