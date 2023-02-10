import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import OnTheOccult from './Components/OntheOccult/OnTheOccult';
import SearchBar from './Components/SearchBar'
import Deity from './Components/Deity'
import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css';

function App() {
const API = process.env.REACT_APP_API_URL
const [mythData,setMythData] = useState('')

useEffect(() =>{
  axios.get(API)
  .then((response) => {
    setMythData(response)
  })
  .catch((e) => {
    console.log(e)
  })
}, [])

  return (
    <div>
      <Router>
        <NavBar>
        </NavBar>
        <SearchBar/>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/mythsandman" element={<OnTheOccult/>}/>
        <Route path="/deities" element={<Deity/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
