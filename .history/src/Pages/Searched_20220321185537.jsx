import React, { useState } from "react";

function Searched() {
  const [searched, setSearched] = useState();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setSea(recipes.results);
  };
  return <div>Searched</div>;
}

export default Searched;
