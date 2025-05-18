import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeLandingPage from './AnimeLandingPage';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import { BookmarksProvider } from './context/BookmarksContext';
import Allanime from './pages/Allanime';
import AotDetails from './pages/AotDetails';
import BerserkDetails from './pages/BerserkDetails';
import BleachDetails from './pages/BleachDetails';
import ChainsawManDetails from './pages/ChainsawManDetails';
import DeathNoteDetails from './pages/DeathNoteDetails';
import DemonSlayerDetails from './pages/DemonSlayerDetails';
import DragonBallZDetails from './pages/DragonBallZDetails';
import HaikyuuDetails from './pages/HaikyuuDetails';
import JjkDetails from './pages/JjkDetails';
import NarutoDetails from './pages/NarutoDetails';
import OnePieceDetails from './pages/OnePieceDetails';
import SoloLevelingDetails from './pages/SoloLevelingDetails';

function App() {
  return (
    <BookmarksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AnimeLandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/all-anime" element={<Allanime />} />
          <Route path="/anime/Attack on Titan" element={<AotDetails />} />
          <Route path="/anime/Berserk" element={<BerserkDetails />} />
          <Route path="/anime/Bleach" element={<BleachDetails />} />
          <Route path="/anime/Chainsaw Man" element={<ChainsawManDetails />} />
          <Route path="/anime/Death Note" element={<DeathNoteDetails />} />
          <Route path="/anime/Demon Slayer" element={<DemonSlayerDetails />} />
          <Route path="/anime/Dragon Ball Z" element={<DragonBallZDetails />} />
          <Route path="/anime/Haikyuu" element={<HaikyuuDetails />} />
          <Route path="/anime/Jujutsu Kaisen" element={<JjkDetails />} />
          <Route path="/anime/Naruto Shippuden" element={<NarutoDetails />} />
          <Route path="/anime/One Piece" element={<OnePieceDetails />} />
          <Route path="/anime/Solo Leveling" element={<SoloLevelingDetails />} />
          {/* <Route path="/anime/:animeTitle" element={<AnimeLandingPage />} /> */}
        </Routes>
      </Router>
    </BookmarksProvider>
  );
}

export default App;