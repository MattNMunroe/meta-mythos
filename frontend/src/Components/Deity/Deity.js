import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
// const API = process.env.REACT_APP_API_URL;

//import from backend

const Deity = (props) => {
  const [deities, setDeities] = useState([]);  //original list
  const [searched, setSearched] = useState([]) //list of searched deities

  useEffect(() => {
    axios
      .get("http://localhost:3001/deities")
      .then((response) => {
        setDeities(response.data.payload);
        setSearched(response.data.payload)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(deities);

  const handleSearch = (search) => {
    const filteredDeity = deities.filter((deity, index) => {
      return deity.name.toLowerCase() === search.toLowerCase();
    });
    console.log(search, filteredDeity)
    if (filteredDeity.length === 0) {
        setSearched(deities)
    } else {
    setSearched(filteredDeity);
  }};


  return (
    <div>
        <SearchBar deity={deities} handleSearch={handleSearch}/>
      {searched.map((deity, index) => {
        return (
          <div key={index}>
            <h1>Name: {deity.name}</h1>
            <h3>{deity.description}</h3>
            <h4>{deity.tradition}</h4>
            <h6>{deity.references}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Deity;
