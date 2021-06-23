import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Contact from "./components/ContactComponent";
import { connect } from "react-redux";
import {
  applyToJob,
  contactUs,
  fetchCocktails,
  fetchTacos,
} from "./redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktails,
    tacos: state.tacos,
  };
};

const mapDispatchToProps = {
  applyToJob,
  resetJobApplication: () => actions.reset("jobApplication"),
  contactUs,
  resetContactForm: () => actions.reset("contactForm"),
  fetchCocktails,
  fetchTacos,
};

class RouterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };
  }

  componentDidMount() {
    this.props.fetchCocktails();
    this.props.fetchTacos();
  }
  toggle = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  };
  render() {
    return (
      <>
        <NavBar toggle={this.toggle} />
        <Sidebar
          toggle={this.toggle}
          isSidebarOpen={this.state.isSidebarOpen}
        />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => (
              <Main
                tacos={this.props.tacos.tacos}
                tErrMess={this.props.tacos.errMess}
                cocktails={this.props.cocktails.cocktails}
                cErrMess={this.props.cocktails.errMess}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <Contact
                applyToJob={this.props.applyToJob}
                resetJobApplication={this.props.resetJobApplication}
                contactUs={this.props.contactUs}
                resetContactForm={this.props.resetContactForm}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RouterPage)
);
