import React, {useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'

function Search() {
  return (
    <form>
        <input type='text'/>
    </form>
  )
}

export default Search

const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    width:100%;
    input{
        
    }
`