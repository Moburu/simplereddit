import React from 'react'
import PropTypes from 'prop-types'
import './SearchData.css'
import { useSelector, useDispatch } from 'react-redux';
import {
    setSubreddit,
    clearSubreddit,
    setSearchTerm,
    clearSearchTerm,
    setSortBy,
    selectSubreddit,
    selectSearchTerm,
    selectSortBy
} from './searchDataSlice.js';
import { loadPosts } from '../RedditData/redditDataSlice';

const SearchData = props => {
  const searchTerm = useSelector(selectSearchTerm);
  const sortBy = useSelector(selectSortBy);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
      e.preventDefault();
      dispatch(loadPosts({sortBy: sortBy, searchTerm: searchTerm}));
  }

//   const onSubredditChangeHandler = (e) => {
//     const subredditInput = e.target.value;
//     dispatch(setSubreddit(subredditInput));
//   };

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onSortByChangeHandler = (e) => {
      const sortByInput = e.target.value;
      dispatch(setSortBy(sortByInput));
  }

  return (
    <div id='Form'>
        <form id="input-form">
            <div className='text-inputs'>
                {/* <input
                    type="text"
                    className='text-field'
                    name="subreddit"
                    value={subreddit}
                    onChange={onSubredditChangeHandler}
                    placeholder="Subreddit"
                /> */}
                <input
                    type="text"
                    className='text-field'
                    name="term"
                    value={searchTerm}
                    onChange={onSearchTermChangeHandler}
                    placeholder="Search..."
                />
            </div>
            <div className='button-inputs'>
                <span className='radio-button'>
                    <input
                        type="radio"
                        id="hot"
                        name='searchTerm'
                        value='hot'
                        onChange={onSortByChangeHandler}
                        defaultChecked
                    />
                    <label htmlFor='hot'>Hot</label>
                </span>
                <span className='radio-button'>
                    <input
                        type="radio"
                        id="new"
                        name='searchTerm'
                        value='new'
                        onChange={onSortByChangeHandler}
                    />
                    <label htmlFor='new'>New</label>
                </span>
                <span className='radio-button'>
                    <input
                        type="radio"
                        id="top"
                        name='searchTerm'
                        value='top'
                        onChange={onSortByChangeHandler}
                    />
                    <label htmlFor='top'>Top</label>
                </span>
            </div>
            <button className='submit-button' id='submit' onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}

SearchData.propTypes = {}

export default SearchData
