import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './style/GlobalStyle';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <GlobalStyle />
      <Routes>
          <Route path="/" element={<App />} />
      </Routes>
    </Router>
);

