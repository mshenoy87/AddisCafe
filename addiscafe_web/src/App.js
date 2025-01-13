import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';


import Homepage from './pages/Homepage';
import SocialsPage from './pages/Socials';
import MenuPage from './pages/Menu';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<SocialsPage />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
