import React from 'react';
import './Search.css';
import Header from '../Header/Header';
import SearchData from '../../features/SearchData/SearchData';

const Search = props => {
  return (
    <div id="Search">
      <Header />
      <SearchData />
    </div>
  )
}

export default Search;
