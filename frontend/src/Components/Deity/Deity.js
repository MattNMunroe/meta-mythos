import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// const API = process.env.REACT_APP_API_URL;

//import from backend

const Deity = () => {
  const [deity, setDeity] = useState([]);

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
      {deity.map((deity, index) => {
        return (
          <div key={index}>
            <h1>Name: {deity.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Deity;
