import React from "react";
import Home from "./Home";
import {Route, Routes} from 'react-router-dom'
import Cuisine from "./Cuisine";

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisine' element/>
    </Routes>
  );
}

export default Pages;
