import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/smokelogo.png";
import {
  Nav,
  Logo,
  NavLink,
  LogoWrap,
  LinkWrap,
  Hamburger,
  Bar,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <LogoWrap>
        <Link to="/home">
          <Logo src={logo} alt="smoke-logo" />
        </Link>
      </LogoWrap>
      <Nav>
        <Hamburger onClick={toggle}>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
        </Hamburger>
        <LinkWrap>
          <NavLink to="menu">Menu</NavLink>
          <NavLink to="reservations">Reservations</NavLink>
          <NavLink to="events">Events</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
          <NavLink to="order">Order Online</NavLink>
        </LinkWrap>
      </Nav>
    </>
  );
};

export default Navbar;
