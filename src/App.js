import React from 'react';
import ItemSelector from './ItemSelector.js';
import AdsComponent from './AdsComponent.js';

const App = () => {
  return (
    <div>
      <h1>Unique Selector</h1>
      <ItemSelector />
      <AdsComponent dataAdSlot='X7XXXXXX5X' />
    </div>
  );
};

export default App;