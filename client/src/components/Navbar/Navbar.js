import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import DropdownBtn from '../Dropdown/Dropdown';
import BtnGroup from "../Buttongroup/Buttongroup";



function Nav() {
  return (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand>Tyler Goodman</Navbar.Brand>
    <DropdownBtn/>
    <BtnGroup/>
  </Navbar>
 
  );
}

export default Nav;