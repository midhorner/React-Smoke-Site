import React, { Component } from "react";
import InfoPage from "../InfoPageComponent";
import Location from "../LocationComponent";
import {
  Splash,
  UpIcon,
  IconWrap,
  TakeOutLink,
  TakeOutLinkWrap,
  OrderOnlineLink,
  SplashHeader,
} from "./MainElements";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: true,
    };
    this.scrollUpRef = React.createRef(); // may be imporoper to use ref unnecessarily; but the easiest way I could find to scroll to component
  }

  scrollUp = () => {
    this.scrollUpRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }; // .current allows the ref to receive the dom element as its current property - in this case the Splash div; scrollIntoView() is a built in function that takes a few parameters, I use block and smooth to ensure it looks good and scrolls where I need it to

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 0) {
          this.setState({ scrolling: false });
        } else {
          this.setState({ scrolling: true });
        }
      });
    }
  } // use componentDidMount to set up 'eventlistener' and change state; pageYOffset is scrollY returns number = the pixels the document is currently scrolled to. 0.0 means the top of doc is at the top of window - use this number to set true/false value to pass into button to make it disappear.
  render() {
    return (
      <>
        <Splash ref={this.scrollUpRef}>
          <SplashHeader>We Are Currently Take Out Only</SplashHeader>
          <TakeOutLinkWrap>
            <TakeOutLink href="https://www.doordash.com/" target="blank">
              DoorDash
            </TakeOutLink>
            <OrderOnlineLink to="/order">Order Online</OrderOnlineLink>
            <TakeOutLink href="https://www.ubereats.com/" target="blank">
              Uber Eats
            </TakeOutLink>
          </TakeOutLinkWrap>
          <IconWrap>
            <UpIcon $scrolling={this.state.scrolling} onClick={this.scrollUp} />
          </IconWrap>
        </Splash>
        <InfoPage tacos={this.props.tacos} cocktails={this.props.cocktails} />
        <Location />
      </>
    );
  }
}

export default Main;
