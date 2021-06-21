import styled from "styled-components";

export const FeaturesFeature = styled.div`
  background-color: ${({ $color }) => ($color ? "#264653" : "gold")};
  color: ${({ $color }) => ($color ? "gold" : "#264653")};
  text-align: center;
  padding: 3rem 1rem;
`;

export const FeaturesHeading = styled.div`
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.075rem;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const FeaturesSubHeading = styled.h3`
  margin-bottom: 1rem;
  letter-spacing: 0.075rem;
`;

export const FeaturesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const FeaturesCard = styled.div`
  margin-bottom: 1rem;
`;

export const FeaturesImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100vw;
  box-shadow: 6px 6px ${({ $color }) => ($color ? "gold" : "#264653")};
`;

export const FeaturesInfo = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const FeaturesTitle = styled.h3`
  margin-top: 1rem;
  letter-spacing: 0.075rem;
`;

export const FeaturesDesc = styled.div`
  letter-spacing: 0.025rem;
`;

export const FeaturesPrice = styled.div`
  font-size: 1.3rem;
`;
