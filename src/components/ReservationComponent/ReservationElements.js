import styled from "styled-components";
import DatePicker from "react-datepicker";
import { Control, Form } from "react-redux-form";
import { Link } from "react-router-dom";
import SLogo from "../../images/s-logo.png";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerRes = styled(DatePicker)`
  width: 700px;
  max-width: 95vw;
  padding: 0.275rem;
  font-size: 1.2rem;
`;

export const ResWrap = styled.div`
  min-height: 100vh;
  padding-top: 150px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #264653;
`;

export const ResTitle = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-align: center;
  letter-spacing: 0.125rem;
`;

export const ResSubTitle = styled.h3`
  color: white;
  text-align: center;
  letter-spacing: 0.085rem;
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

export const FormWrap = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 700px;
  max-width: 95vw;
  color: white;
`;

export const ResForm = styled(Form)`
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

export const RLink = styled(Link)`
  text-decoration: none;
  color: gold;
`;
