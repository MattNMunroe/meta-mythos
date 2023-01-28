import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
