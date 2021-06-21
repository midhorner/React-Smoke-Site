/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import {
  ContactWrap,
  TextInput,
  Label,
  ContactForm,
  SLOGO,
  ContactTitle,
  FormWrap,
  TextAreaInput,
  ContactSubTitle,
  MiscLink,
  SubmitButton,
  ButtonWrap,
  Divider,
  DropDown,
  Upload,
  RLink,
} from "./ContactElements";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameApp: "",
      phoneApp: "",
      emailApp: "",
      positionsApp: "",
      coverLetterApp: "",
      nameContact: "",
      phoneContact: "",
      emailContact: "",
      messageContact: "",
    };
    this.scrollToRef = React.createRef();
  }

  scrollTo = () => {
    this.scrollToRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  handleJobSubmit = (vals) => {
    this.props.resetJobApplication();
    this.props.applyToJob(
      vals.nameApp,
      vals.phoneApp,
      vals.emailApp,
      vals.positionsApp,
      vals.coverLetterApp
    );
  };

  handleContactSubmit = (vals) => {
    this.props.resetContactForm();
    this.props.contactUs(
      vals.nameContact,
      vals.phoneContact,
      vals.emailContact,
      vals.messageContact
    );
  };

  render() {
    return (
      <ContactWrap>
        <ContactTitle>Contact Us</ContactTitle>
        <SLOGO />
        <ContactSubTitle>
          For catering information{" "}
          <RLink style={{ textDecoration: "none" }} to="/events">
            Click Here
          </RLink>
          .
          <br />
          <br />
          For career information{" "}
          <MiscLink onClick={this.scrollTo}>Click Here</MiscLink>!
          <br />
          <br /> Send us a message and we'll get back to you as soon as
          possible. <br /> You can also reach us by phone at <br />
          <MiscLink href="tel:412-852-2726"> 412-852-2726</MiscLink>
        </ContactSubTitle>
        <ContactForm
          model="contactForm"
          onSubmit={(vals) => this.handleContactSubmit(vals)}
        >
          <FormWrap>
            <Label htmlFor="nameContact">Name</Label>
            <TextInput
              model=".nameContact"
              id="nameContact"
              name="nameContact"
              placeholder="Your Name"
            />
          </FormWrap>
          <FormWrap>
            <Label htmlFor="phoneContact">Phone</Label>
            <TextInput
              model=".phoneContact"
              id="phoneContact"
              name="phoneContact"
              placeholder="Phone Number"
            />
          </FormWrap>
          <FormWrap>
            <Label htmlFor="emailContact">Email</Label>
            <TextInput
              model=".emailContact"
              id="emailContact"
              name="emailContact"
              placeholder="Email Address"
            />
          </FormWrap>
          <FormWrap>
            <Label htmlFor="messageContact">Message</Label>
            <TextAreaInput
              model=".messageContact"
              id="messageContact"
              name="messageContact"
              placeholder="How can we help you?"
              rows="4"
            />
          </FormWrap>
          <ButtonWrap>
            <SubmitButton type="submit">Send</SubmitButton>
          </ButtonWrap>
        </ContactForm>
        <Divider ref={this.scrollToRef} />
        <ContactTitle>Work With Us</ContactTitle>
        <SLOGO />
        <ContactSubTitle>
          If you're interested in a position that is currently unavailable,
          reach out to us anyway!
        </ContactSubTitle>
        <ContactForm
          model="jobApplication"
          onSubmit={(vals) => this.handleJobSubmit(vals)}
        >
          <FormWrap>
            <Label htmlFor="nameApp">Name</Label>
            <TextInput
              model=".nameApp"
              id="nameApp"
              name="nameApp"
              placeholder="Your Name"
            />
          </FormWrap>
          <FormWrap>
            <Label htmlFor="phoneApp">Phone</Label>
            <TextInput
              model=".phoneApp"
              id="phoneApp"
              name="phoneApp"
              placeholder="Phone Number"
            />
          </FormWrap>
          <FormWrap>
            <Label htmlFor="emailApp">Email</Label>
            <TextInput
              model=".emailApp"
              id="emailApp"
              name="emailApp"
              placeholder="Email Address"
            />
          </FormWrap>
          <FormWrap>
            <Label htmlFor="positionsApp">Available Positions</Label>
            <DropDown
              model=".positionsApp"
              id="positionsApp"
              name="positionsApp"
            >
              <option value="" disabled>
                Available Positions
              </option>
              <option>Dishwasher</option>
              <option>Line Cook</option>
              <option>Prep Cook</option>
              <option disabled>Host</option>
              <option>Busser</option>
              <option>Server</option>
              <option disabled>Bartender</option>
            </DropDown>
          </FormWrap>
          <FormWrap>
            <Label htmlFor="coverLetterApp">Cover Letter</Label>
            <TextAreaInput
              model=".coverLetterApp"
              id="coverLetterApp"
              name="coverLetterApp"
              placeholder="Tell us about yourself"
              rows="6"
            />
          </FormWrap>
          <FormWrap>
            <Label htmlFor="uploadResume">Upload your resumé</Label>
            <Upload
              type="file"
              id="uploadResume"
              name="uploadResume"
              required
            />
          </FormWrap>
          <ButtonWrap>
            <SubmitButton type="submit">Apply</SubmitButton>
          </ButtonWrap>
        </ContactForm>
      </ContactWrap>
    );
  }
}

export default Contact;
