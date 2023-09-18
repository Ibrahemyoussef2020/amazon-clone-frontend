import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayOut from "./layout";
import {
  Home,
  Cart,
  Payment,
  Orders,
  Login,
  Logout,
  ErorrSrc,
  ProducDetails,
} from "./roots";

import "./index.css";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErorrSrc />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product-details/:part/:productId",
        element: <ProducDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
