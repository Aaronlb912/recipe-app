import React from "react";
import Home from "./Home";
import {Route, Routes} from 'react-router-dom'
import c

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
  );
}

export default Pages;
