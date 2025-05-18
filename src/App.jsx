import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeLandingPage from './AnimeLandingPage';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import { BookmarksProvider } from './context/BookmarksContext';

function App() {
  return (
    <BookmarksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AnimeLandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </Router>
    </BookmarksProvider>
  );
}

export default App;