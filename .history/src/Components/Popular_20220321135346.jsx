function Popular() {

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_}`)
    }

  return (
    <div>Popular</div>
  )
}

export default Popular