import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
// const API = process.env.REACT_APP_API_URL;

//import from backend

const Deity = (props) => {
  const [deity, setDeity] = useState([]);
  const [searched, setSearched] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/deities")
      .then((response) => {
        setDeity(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(deity);

  const handleSearch = (search) => {
    const filteredDeity = deity.filter((deity, index) => {
      return deity.name.toLowerCase() === search.toLowerCase();
    });
    setDeity(filteredDeity);
  };

  return (
    <div>
        <SearchBar deity={deity} handleSearch={handleSearch} />
      {deity.map((deity, index) => {
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
