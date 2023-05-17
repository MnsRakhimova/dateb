import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  width: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 10px;
`;

const Ulist = styled.ul`
  box-shadow: 5px 7px rgba(0, 0, 0, 0.5);
  position: relative;
  list-style-type: none;
`;

const Alink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  text-transform: capitalize;
  color: #000;
  padding: 10px 30px;
  font-family: Arial, Helvetica, sans-serif;
  height: 50px;
  transition: 0.5s ease;
  border-radius: 0 39px;
  :hover {
    background-color: #46a358;
    color: #fff;
  }
`;

const Ulist_in_ulist = styled.ul`
  position: absolute;
  left: 250px;
  width: 300px;
  display: none;
  top: 0;
`;

const Dropdown_list = styled.li`
  position: relative;
  :hover {
    display: initial;
  }
`;
export { Navbar, Ulist, Alink, Ulist_in_ulist, Dropdown_list };
// #61ca77
// #46a358
