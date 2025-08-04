import { Fragment } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import store from "./Utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header></Header>
        <Body />
      </Fragment>
    </Provider>
  );
}

export default App;
