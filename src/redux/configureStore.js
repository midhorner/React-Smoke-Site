import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Cocktails } from "./cocktails";
import { Tacos } from "./tacos";
import { ContactForm, JobApplication } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      cocktails: Cocktails,
      tacos: Tacos,
      ...createForms({
        jobApplication: JobApplication,
        contactForm: ContactForm,
      }),
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
