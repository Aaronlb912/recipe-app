import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Catergory() {
  return (
    <List>
      <Na>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Na>
      <Na>
        <FaHamburger />
        <h4>American</h4>
      </Na>
      <Na>
        <GiNoodles />
        <h4>Thai</h4>
      </Na>
      <Na>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Na>
    </List>
  );
}

export default Catergory;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
