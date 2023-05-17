import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  width: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 10px;
`;

const Ulist = styled.ul`
  box-shadow: 2px 3px rgba(0, 0, 0, 0.5);
  /* position: relative; */
  list-style-type: none;
`;

const Alink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  color: #000;
  background-color: #fff;
  padding: 10px 30px;
  font-family: Arial, Helvetica, sans-serif;
  height: 50px;
  transition: 0.5s ease;
  border-radius: 0 39px;
  cursor: pointer;
  :hover {
    /* background-color: #46a358;
    color: #fff; */
  }
`;

const UlistInUlist = styled.div`
  box-shadow: 2px 3px rgba(0, 0, 0, 0.5);

  margin-left: 5px;
  position: absolute;
  left: 12.9em;
  width: 300px;
  top: 0;
`;

const DropdownList = styled.li`
  position: relative;
  border-radius: 0 39px;

  :hover {
    background-color: #46a358;
    color: #fff;
  }
`;
export { Navbar, Ulist, Alink, UlistInUlist, DropdownList };

// #61ca77
// #46a358
