import React from "react";
import {
  FeaturesFeature,
  FeaturesHeading,
  FeaturesSubHeading,
  FeaturesWrap,
  FeaturesCard,
  FeaturesImg,
  FeaturesInfo,
  FeaturesTitle,
  FeaturesDesc,
  FeaturesPrice,
} from "./FeatureElements";
import { baseUrl } from "../../shared/baseUrl";

const Features = ({ heading, subheading, features, $color, errMess }) => {
  if (errMess) {
    return <h1>{errMess}</h1>;
  }
  return (
    <FeaturesFeature $color={$color}>
      <FeaturesHeading>{heading}</FeaturesHeading>
      <FeaturesSubHeading>{subheading}</FeaturesSubHeading>
      <FeaturesWrap>
        {features.map((feature, index) => {
          return (
            <FeaturesCard key={index}>
              <FeaturesImg
                src={baseUrl + feature.image}
                alt={feature.name}
                $color={$color}
              />
              <FeaturesInfo>
                <FeaturesTitle>{feature.name}</FeaturesTitle>
                <FeaturesDesc>{feature.description}</FeaturesDesc>
                <FeaturesPrice>${feature.price}</FeaturesPrice>
              </FeaturesInfo>
            </FeaturesCard>
          );
        })}
      </FeaturesWrap>
    </FeaturesFeature>
  );
};

export default Features;
