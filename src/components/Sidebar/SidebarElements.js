import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarWrap = styled.div`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background-color: gold;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  transition: 0.4s ease-in-out;
  right: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "-1000px")};
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: #264653;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SidebarLink = styled(Link)`
  font-weight: bold;
  letter-spacing: 0.125rem;
  color: #264653;
  font-size: 1.5rem;
  text-decoration: none;
  margin: 1rem 0;
  &:hover:not(:last-child) {
    color: #4a88a1;
    transition: 0.2s ease-in-out;
  }
  &:last-child {
    border: solid #264653 0.175rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    transition: 0.3s ease-in-out;
  }
  &:last-child:hover {
    background-color: #264653;
    color: gold;
    font-weight: bold;
    transition: 0.3s ease-in-out;
  }
`;
