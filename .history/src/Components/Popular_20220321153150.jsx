import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data);
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper key={recipe.id}>
              <h3>Popular Picks</h3>
              {popular.map((recipe) =>{
                  return (

                  )
              })}
          </Wrapper>
        );
      })}
    </div>
  );
}

export default Popular;

const Wrapper = styled.div`

`

