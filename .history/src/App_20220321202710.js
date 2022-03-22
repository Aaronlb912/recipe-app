import "./App.css";
import Catergory from "./Components/Catergory";
import Pages from "./Pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./Components/Search";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Catergory />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1. 
`