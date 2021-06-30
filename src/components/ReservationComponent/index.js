import React, { Component } from "react";
import {
  ButtonWrap,
  DatePickerRes,
  DropDown,
  FormWrap,
  Label,
  ResForm,
  ResSubTitle,
  ResTitle,
  ResWrap,
  RLink,
  SLOGO,
  SubmitButton,
  TextInput,
  TextAreaInput,
} from "./ReservationElements";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameRes: "",
      sizeRes: "",
      dateRes: "",
      timeRes: "",
      phoneRes: "",
      emailRes: "",
      messageRes: "",
      resDate: new Date(),
    };
  }

  handleChange = (date) => {
    this.setState({
      resDate: date,
    });
  };

  handleReservationSubmit = (vals) => {
    this.props.resetReservationForm();
    vals.dateRes = this.state.resDate.toDateString();
    this.setState({
      resDate: new Date(),
    });
    this.props.makeReservation(
      vals.nameRes,
      vals.sizeRes,
      vals.dateRes,
      vals.timeRes,
      vals.phoneRes,
      vals.emailRes,
      vals.messageRes
    );
  };

  render() {
    return (
      <>
        <ResWrap>
          <ResTitle>Make A Reservation</ResTitle>
          <ResSubTitle>
            Reservations are for parties of 6 - 12.
            <br />
            For parties larger than 12, check out the{" "}
            <RLink to="/events">Events</RLink> form.
          </ResSubTitle>
          <SLOGO />
          <ResForm
            model="reservationForm"
            onSubmit={(vals) => this.handleReservationSubmit(vals)}
          >
            <FormWrap>
              <Label htmlFor="nameRes">Name</Label>
              <TextInput
                model=".nameRes"
                id="nameRes"
                name="nameRes"
                placeholder="Your Name"
              />
            </FormWrap>
            <FormWrap>
              <Label htmlFor="sizeRes">Party Size</Label>
              <DropDown model=".sizeRes" id="sizeRes" name="sizeRes">
                <option value="" disabled>
                  Party Size...
                </option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </DropDown>
            </FormWrap>
            <FormWrap>
              <Label htmlFor="dateRes">Date</Label>
              <DatePickerRes
                selected={this.state.resDate}
                onChange={this.handleChange}
              />
            </FormWrap>
            <FormWrap>
              <Label htmlFor="timeRes">Available Times</Label>
              <DropDown model=".timeRes" id="timeRes" name="timeRes">
                <option value="" disabled>
                  Time
                </option>
                <option>Noon</option>
                <option>1:00PM</option>
                <option>1:30PM</option>
                <option>2:00PM</option>
                <option>2:30PM</option>
                <option>3:00PM</option>
                <option>3:30PM</option>
                <option>4:00PM</option>
                <option>4:30PM</option>
                <option>5:00PM</option>
                <option>5:30PM</option>
                <option>6:00PM</option>
                <option>6:30PM</option>
                <option>7:00PM</option>
                <option>7:30PM</option>
                <option>8:00PM</option>
                <option>8:30PM</option>
                <option>9:00PM</option>
                <option>9:30PM</option>
                <option>10:00PM</option>
              </DropDown>
            </FormWrap>
            <FormWrap>
              <Label htmlFor="phoneRes">Phone</Label>
              <TextInput
                model=".phoneRes"
                id="phoneRes"
                name="phoneRes"
                placeholder="Phone Number"
              />
            </FormWrap>
            <FormWrap>
              <Label htmlFor="emailRes">Email</Label>
              <TextInput
                model=".emailRes"
                id="emailRes"
                name="emailRes"
                placeholder="Email Address"
              />
            </FormWrap>
            <FormWrap>
              <Label htmlFor="messageRes">Additional Information</Label>
              <TextAreaInput
                model=".messageRes"
                id="messageRes"
                name="messageRes"
                placeholder="List any special needs, allergies, etc..."
                rows="4"
              />
            </FormWrap>
            <ButtonWrap>
              <SubmitButton type="submit">Send</SubmitButton>
            </ButtonWrap>
          </ResForm>
        </ResWrap>
      </>
    );
  }
}

export default Reservation;
