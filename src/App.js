import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Example from "./components/Example";
import Main from "./components/Main/Main";
import Pages from "./pages/pages";
import { store } from "./redux/redux-store";

const App = () => {
  return (
    <>
     <Pages />
    </>
  );
};

const MainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default MainApp;
