import React from 'react';
import './App.css';
import Search from '../components/Search/Search';
import RedditData from '../features/RedditData/RedditData';
import 'fomantic-ui-css/semantic.min.css';
import { Segment } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Search />
      <RedditData />
    </div>
  );
}

export default App;
