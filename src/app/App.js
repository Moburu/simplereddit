/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import Search from '../components/Search/Search';
import RedditData from '../features/RedditData/RedditData';
import 'fomantic-ui-css/semantic.min.css';
import { loadPopular } from '../features/RedditData/redditDataSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopular());
  }, []);

  return (
    <div className="App">
      <Search />
      <RedditData />
    </div>
  );
}

export default App;
