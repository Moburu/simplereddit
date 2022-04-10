import React from 'react';
import './Search.css';
import PropTypes from 'prop-types'
import Header from '../Header/Header';
import Form from '../Form/Form';

const Search = props => {
  return (
    <div id="search">
      <Header />
      <Form />
    </div>
  )
}

Search.propTypes = {}

export default Search
