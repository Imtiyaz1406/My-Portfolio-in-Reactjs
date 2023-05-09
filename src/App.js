import './App.css';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Info from './pages/Info';
function App() {
  return (
    <div className="container">
      <Navbar/>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Education" element={<Education/>} />
        <Route path="/Info" element={<Info/>} />
      </Routes>
    </div>
  );
}

export default App;
