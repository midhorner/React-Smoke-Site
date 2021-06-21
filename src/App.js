import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterPage from "./RouterPage";
import { GlobalStyle } from "./GlobalStyle";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <RouterPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
