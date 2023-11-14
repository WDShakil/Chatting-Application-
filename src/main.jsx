import React from "react";
import "./index.css";
import Error from "./Components/ErrorPage/error";
// React Dom
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Our Components
import Registration from "./Components/Registration/index.jsx";
import Login from "./Components/Login/index.jsx";
// Fire Base
// eslint-disable-next-line no-unused-vars
import firebaseConfig from "./Components/authentication/firebaseConfig";
import Dashboard from "./Components/Dashborad";

// Redux
import store from "./store.jsx";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration></Registration>,
    errorElement: <Error></Error>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
