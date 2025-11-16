import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import Home from './components/Home';
import Admin from './components/Admin';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-bg-elegant font-sans">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
