import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchCocktails = () => (dispatch) => {
  return fetch(baseUrl + "cocktails")
    .then((response) => response.json())
    .then((cocktails) => dispatch(addCocktails(cocktails)));
};

export const addCocktails = (cocktails) => ({
  type: ActionTypes.ADD_COCKTAILS,
  payload: cocktails,
});

export const fetchTacos = () => (dispatch) => {
  return fetch(baseUrl + "tacos")
    .then((response) => response.json())
    .then((tacos) => dispatch(addTacos(tacos)));
};

export const addTacos = (tacos) => ({
  type: ActionTypes.ADD_TACOS,
  payload: tacos,
});

export const applyToJob =
  (name, phone, email, positions, coverletter) => () => {
    const newJobApp = {
      name,
      phone,
      email,
      positions,
      coverletter,
    };
    return fetch(baseUrl + "applicationSubmit", {
      method: "POST",
      body: JSON.stringify(newJobApp),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            alert("Thank you for applying\n" + JSON.stringify(newJobApp));
            return response;
          } else {
            const error = new Error(
              `Error ${response.status}: ${response.statusText}`
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .catch((error) => {
        alert("Your application was unsuccesful: " + error.message);
      });
  };

export const contactUs = (name, phone, email, message) => () => {
  const newMessage = {
    name,
    phone,
    email,
    message,
  };
  return fetch(baseUrl + "generalContact", {
    method: "POST",
    body: JSON.stringify(newMessage),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          alert("Thank you for your inquiry\n" + JSON.stringify(newMessage));
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .catch((error) => {
      alert("Your message was unsuccesful: " + error.message);
    });
};