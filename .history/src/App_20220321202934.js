import "./App.css";
import Catergory from "./Components/Catergory";
import Pages from "./Pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./Components/Search";
import styled from "styled-components";
import {} from 'react-icons/gi'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKn
        <Logo to={'/'}/>
      </Nav>
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
  font-size: 1.5rem;
  font-style: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
