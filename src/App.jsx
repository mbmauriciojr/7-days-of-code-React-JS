import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
