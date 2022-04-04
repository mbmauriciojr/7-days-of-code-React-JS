import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalSytle from './components/Body/GlobalStyle';

import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <GlobalSytle />
      <Router>
        <div className="App">
          <HomePage />
        </div>
      </Router>
    </>
  );
}

export default App;
