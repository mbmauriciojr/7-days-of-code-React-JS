import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './components/Body/reset.css';

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
