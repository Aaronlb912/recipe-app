import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

function Recipe() {

  const fetchDetails = async () =>{
    const data = await fetch(`https://api.spoonacular`)
  }

  return (
    <div>Recipe</div>
  )
}

export default Recipe