import React from "react";
import {
  InfoWrap,
  InfoBlock,
  Donkey,
  ImageWrap,
  MiscLink,
  InfoHeader,
} from "./LocationElements";
import donkey from "../../images/Goatfam2.png";

const Location = () => {
  return (
    <InfoWrap>
      <InfoHeader>Hours &#38; Location</InfoHeader>
      <InfoBlock>
        <p>
          4115 Butler Street
          <br />
          Pittsburgh, PA 15201
          <br />
          <MiscLink href="tel:412-852-2726">412-852-2726</MiscLink>
        </p>
        <p>
          <strong>
            <MiscLink
              href="https://www.google.com/maps/dir/?api=1&destination=4115+Butler+St+PITTSBURGH+Pennsylvania+15201+US"
              target="blank"
            >
              Get Directions
            </MiscLink>
          </strong>
        </p>
      </InfoBlock>
      <ImageWrap>
        <Donkey src={donkey} />
      </ImageWrap>
      <InfoBlock>
        <p>
          Mon - Weds: CLOSED
          <br />
          Thurs - Sat: NOON - 8:00PM
          <br />
          Sunday: 10:00AM - 6:00PM
        </p>
      </InfoBlock>
    </InfoWrap>
  );
};

export default Location;
