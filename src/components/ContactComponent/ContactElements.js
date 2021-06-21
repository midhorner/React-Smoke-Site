import styled from "styled-components";
import { Control, Form } from "react-redux-form";
import { Link } from "react-router-dom";
import SLogo from "../../images/s-logo.png";

export const ContactWrap = styled.div`
  min-height: 100vh;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #264653;
`;

export const SLOGO = styled.div`
  background: url(${SLogo});
  background-position: center;
  background-size: cover;
  background-color: white;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 1.5rem 0;
`;

export const ContactTitle = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-align: center;
  letter-spacing: 0.125rem;
`;

export const ContactSubTitle = styled.h3`
  color: white;
  text-align: center;
  letter-spacing: 0.085rem;
`;

export const FormWrap = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 700px;
  max-width: 95vw;
  color: white;
`;

export const ContactForm = styled(Form)`
  padding: 1.25rem;
`;

export const TextInput = styled(Control.text)`
  padding: 0.275rem;
  font-size: 1.2rem;
`;

export const TextAreaInput = styled(Control.textarea)`
  padding: 0.275rem;
  font-size: 1.2rem;
`;

export const DropDown = styled(Control.select)`
  padding: 0.275rem;
  font-size: 1.2rem;
`;

export const Upload = styled.input``;

export const ButtonWrap = styled.div`
  width: 700px;
  max-width: 95vw;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  font-size: 1.2em;
  padding: 0.25rem 2rem;
  background-color: #264653;
  color: white;
  border: 2px solid white;
  border-radius: 0.5rem;
  letter-spacing: 0.075rem;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: white;
    color: #264653;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  padding-bottom: 0.125rem;
`;

export const MiscLink = styled.a`
  text-decoration: none;
  color: gold;
  &:hover {
    cursor: pointer;
  }
`;

export const RLink = styled(Link)`
  text-decoration: none;
  color: gold;
`;

export const Divider = styled.div`
  width: 95vw;
  height: 4px;
  background-color: white;
  margin: 3rem 0;
  border-radius: 2rem; ;
`;
