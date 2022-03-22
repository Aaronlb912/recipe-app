import React, { useState, useEffect } from "react";
import {}

function Searched() {
  const [searched, setSearched] = useState([]);
   

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };
  
  useEffect(() =>{
    getSearched()
  },[])

  return <div>Searched</div>;
}

export default Searched;
