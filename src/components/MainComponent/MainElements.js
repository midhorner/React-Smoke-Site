import styled from "styled-components";
import { Link } from "react-router-dom";
import SplashImg from "../../images/tacos-splash.jpg";
import { IoChevronUpCircleOutline } from "react-icons/io5";

export const Splash = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url(${SplashImg});
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.075rem;
`;

export const UpIcon = styled(IoChevronUpCircleOutline)`
  color: gold;
  display: ${({ $scrolling }) => ($scrolling ? "none" : "block")};
`;

export const IconWrap = styled.div`
  background-color: #264653;
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const SplashHeader = styled.div`
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: gold;
`;

export const TakeOutLink = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: gold;
  border: 0.175rem solid gold;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: gold;
    color: #264653;
    font-weight: bold;
    transition: 0.3s ease-in-out;
  }
  @media only screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

export const OrderOnlineLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: gold;
  border: 0.175rem solid gold;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: gold;
    color: #264653;
    font-weight: bold;
    transition: 0.3s ease-in-out;
  }
  @media only screen and (max-width: 550px) {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
`;

export const TakeOutLinkWrap = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  width: 100%;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    width: 50%;
  }
`;
