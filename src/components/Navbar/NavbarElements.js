import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: #264653;
  box-shadow: 0 2px 5px rgba(38, 76, 114, 0.6);
  width: 100vw;
  position: fixed;
  top: 0;
`;

export const NavLink = styled(Link)`
  letter-spacing: 0.125rem;
  color: gold;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 0 1rem;
  &:hover:not(:last-child) {
    color: #fff3b3;
    transition: 0.2s ease-in-out;
  }
  &:last-child {
    border: solid gold 0.175rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    transition: 0.3s ease-in-out;
  }
  &:last-child:hover {
    background-color: gold;
    color: #264653;
    font-weight: bold;
    transition: 0.3s ease-in-out;
  }
`;

export const LinkWrap = styled.div`
  margin-left: auto;
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 80px;
  @media only screen and (max-width: 700px) {
    height: 70px;
  }
  @media only screen and (max-width: 400px) {
    height: 55px;
  }
`;

export const LogoWrap = styled.div`
  position: fixed;
  z-index: 999;
  top: 1rem;
  left: 1rem;
  background-color: gold;
  border-radius: 50%;
  padding: 2rem;
  @media only screen and (max-width: 400px) {
    padding: 1.5rem;
  }
`;

export const Hamburger = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  padding: 0.25rem 0.5rem;
  border: solid gold 0.175rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 950px) {
    display: none;
  }
  @media only screen and (max-width: 400px) {
    margin-right: 0;
  }
`;

export const Bar = styled.div`
  height: 2px;
  width: 40px;
  margin: 0.5rem 0;
  background-color: gold;
  border-radius: 0.5rem;
`;
