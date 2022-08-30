import React, { useState } from 'react';
import { useEffect } from "react";
import './App.css';
import  axios from "axios";

const Example = (props) => {
  const [pokemon, setPokemon] = useState([]);

  // const handleClick = () =>{
  //   axios.get("https://pokeapi.co/api/v2/pokemon").then(response => {
  //     setPokemon(response.data.results)
  //   })
  // }
  const handleClick = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(response=> setPokemon(response.results))
  }

  return (
      <div>
        <button className='btn' onClick={ handleClick }>Fetch Pokemon</button>
          {pokemon.map((pokemon, index)=> <div key={index}>{pokemon.name}</div>
          )}
      </div>
  );
}
export default Example;
