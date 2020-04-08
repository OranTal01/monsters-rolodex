import React, { useState, useEffect } from 'react';
import { fetchData } from './requests/fetchData';
import { api } from './constants/constants';
import { CartList } from './components/cart-list/Cart-list.component';
import { Header } from './components/header/Header.component';
import { SearchBox } from './components/search-box/Search-box.component';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchData(api.user).then(response => setMonsters(response));
  }, []);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filterMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <div className="App">
      <Header />
      <SearchBox value={ searchInput } placeholder='Search Monsters' handleChange={ handleSearchInput } />
      <CartList monsters={ filterMonsters } />
    </div>
  );
};

export default App;
