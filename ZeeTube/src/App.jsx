import { Fragment } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import store from "./Utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchVideoPage from "./Components/WatchVideoPage";
import SearchResults from "./Components/SearchResults";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchVideoPage />,
        },
        {
          path: "/results",
          element: <SearchResults />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <Fragment>
        {/* <Header></Header> */}
        <RouterProvider router={appRouter}></RouterProvider>
      </Fragment>
    </Provider>
  );
}

export default App;
