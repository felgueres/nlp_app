import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const NavBar = () => {
  return (
    <div id="homebar">
      <Navbar>
        <Navbar.Brand href="/">American Machina</Navbar.Brand>
        <NavbarCollapse className='justify-content-center'>
          <Navbar.Text>Market Insights on America's Industrial Base</Navbar.Text>
        </NavbarCollapse>
        <Navbar.Text>feedback</Navbar.Text>
      </Navbar>
    </div>
  );
};

export default NavBar;
