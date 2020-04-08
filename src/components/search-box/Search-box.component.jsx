import React from 'react';

import './Search-box.style.css';

export const SearchBox = ({ placeholder, handleChange, value }) => (
  <input
    className='search'
    type='search'
    name='searchInput'
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
  />
);
