import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <HomePage>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </HomePage>
    </div>
  );
};

export default App;
