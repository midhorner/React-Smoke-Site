import React from "react";
import storeFront from "../../images/betterfrontofrestaurant.jpg";
import Features from "../FeatureComponent";

import {
  About,
  AboutHeader,
  AboutImage,
  AboutText,
  AboutImageWrap,
  AboutTextWrap,
} from "./InfoPageElements";

const InfoPage = ({ tacos, cocktails }) => {
  return (
    <>
      <About>
        <AboutTextWrap>
          <AboutHeader>Housemade Everything.</AboutHeader>
          <AboutText>
            We make everything from scratch. All dressings, mayos, and sauces
            are made in our kitchen. Piedmontese Brisket, Berkshire Pork &
            Freebird chicken are smoked in house using hickory, maple, oak, and
            cherry. Our tortillas are made by hand everyday. The buttermilk
            flour tortillas contain lard so are not vegetarian. The corn
            tortillas, also made by hand, do not contain any gluten or animal
            product. The food is bomb - hope you dig it.
          </AboutText>
        </AboutTextWrap>
        <AboutImageWrap>
          <AboutImage src={storeFront} alt="store front" />
        </AboutImageWrap>
      </About>
      <Features
        heading="National Ultimate Chicken Week Is Back!"
        features={tacos}
        $color={true}
      />
      <Features
        heading="It's Negroni Week Again!"
        subheading="Ask About Our 32oz Cocktails To Go!"
        features={cocktails}
        $color={false}
      />
    </>
  );
};

export default InfoPage;
