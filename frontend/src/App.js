import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import NavBar from './Components/navbar/NavBar'
// import SearchBar from './Components/SearchBar/SearchBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Deity from './Components/Deity/Deity'
import OnTheOccult from './Components/onTheOccult/OnTheOccult'
import './App.css';

function App() {
const API = process.env.REACT_APP_API_URL
const [mythData, setMythData] = useState('')

// useEffect(() =>{
//   axios.get(API)
//   .then((response) => {
//     setMythData(response)
//   })
//   .catch((e) => {
//     console.log(e)
//   })
// }, [API])

  return (
    <div>
      <Router>
        <NavBar/>
           {/* <SearchBar/> */}
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
