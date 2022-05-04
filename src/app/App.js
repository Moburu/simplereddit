/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import Search from '../components/Search/Search';
import RedditData from '../features/RedditData/RedditData';
import 'fomantic-ui-css/semantic.min.css';
import { loadPopular } from '../features/RedditData/redditDataSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopular());
  }, []);

  return (
    <div className="App">
      <div className='background'></div>
      <div className='button-holder'><a href='#Header' className='button-link'><Button className='back-to-top'>Back to top</Button></a></div>
      <Search className='data'/>
      <RedditData className='data'/>
    </div>
  );
}

export default App;
