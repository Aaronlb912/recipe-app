import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

function Recipe() {

  let params = useParams

  const fetchDetails = async () =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${}`)
  }

  return (
    <div>Recipe</div>
  )
}

export default Recipe