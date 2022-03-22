import React, {useS} from "react";

function Searched() {
  const [cuisine, setCuisine] = useState();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  return <div>Searched</div>;
}

export default Searched;
