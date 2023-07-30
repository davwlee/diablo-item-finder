import React from 'react';
import ItemSelector from './ItemSelector.js';
import AdsComponent from './AdsComponent.js';

const App = () => {
  return (
    <div>
      <nav>
        <a href="https://d4uniques.com"> Home </a>
        <a href="https://uni.d4uniques.com/"> Unique Finder </a> 
        <a href="https://rares.d4uniques.com"> Rare Finder </a> 
      </nav>
      <h1>Unique Selector</h1>
      <ItemSelector />
      <AdsComponent dataAdSlot='X7XXXXXX5X' />
    </div>
  );
};

export default App;