import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar>
        </NavBar>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
