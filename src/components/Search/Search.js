import React from 'react';
import './Search.css';
import PropTypes from 'prop-types'
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

Search.propTypes = {}

export default Search
