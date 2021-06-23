import styled from "styled-components";

export const About = styled.div`
  background-color: #264653;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: gold;
  letter-spacing: 0.075rem;
  padding: 2rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    text-align: center;
  }
`;

export const AboutHeader = styled.h1`
  margin: 0 auto;
  margin-bottom: 0.5rem;
  max-width: 600px;
`;

export const AboutImage = styled.img`
  height: 600px;
  box-shadow: 6px 6px gold;

  @media only screen and (max-width: 1200px) {
    height: 500px;
  }
  @media only screen and (max-width: 900px) {
    height: 600px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0;
    max-height: 400px;
    max-width: 100vw;
  }
`;

export const AboutText = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  max-width: 600px;
  @media only screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const AboutImageWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const AboutTextWrap = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 0 0.75rem;

  @media only screen and (max-width: 900px) {
    align-items: flex-start;
    margin-top: 1rem;
    max-width: 600px;
  }
  @media only screen and (max-width: 600px) {
    width: 350px;
  }
`;
