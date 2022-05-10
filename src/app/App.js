/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../components/Search/Search';
import RedditData from '../features/RedditData/RedditData';
import 'fomantic-ui-css/semantic.min.css';
import { loadPopular } from '../features/RedditData/redditDataSlice';
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

function App() {
  const dispatch = useDispatch();

  const mql = window.matchMedia('(max-width: 600px)');
  const [mobileView, setMobileView] = useState(mql.matches);

  useEffect(() => {
    dispatch(loadPopular());
  }, []);

  return (
    <div className="App">
      <div className='background'></div>
      <div className='button-holder'>
        <a href='#Header' className='button-link'>
          {mobileView ? <Button className='back-to-top' circular size='big' icon='arrow up' /> :
            <Button className='back-to-top'>Back to top</Button>
          }
        </a>
      </div>
      <Search className='data'/>
      <RedditData className='data'/>
    </div>
  );
}

export default App;
