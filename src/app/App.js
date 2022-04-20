import React from 'react';
import './App.css';
import Search from '../components/Search/Search';
import RedditData from '../features/RedditData/RedditData';

function App() {
  return (
    <div className="App">
      <Search />
      <RedditData />
    </div>
  );
}

export default App;
