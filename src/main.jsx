import { React } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home.jsx";
import Form from "./component/SignIn.jsx";
import Form2 from "./component/SignUp.jsx";
import Category from "./component/Category.jsx";
import Info from "./component/Info.jsx";
import Quantity from "./component/Quantity.jsx";
import Payment from "./component/Payment.jsx";
import Crud from "./component/Crud.jsx";
import AdminNavbar from "./component/AdminNavbar.jsx";
import ProductDetails from "./component/ProductDetails.jsx";
import AdminLogin from "./component/AdminLogin.jsx";
import Admin from "./component/Admin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/SignIn",
        element: <Form />,
      },
      {
        path: "/SignUp",
        element: <Form2 />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/quantity",
        element: <Quantity />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/adminNavbar",
    element: <Admin />,
    errorElement: <Error />,
    children: [
      {
        path: "/adminNavbar",
        element: <Crud />,
      },
      {
        path: "/adminNavbar/productDetails",
        element: <ProductDetails />,
      },
    ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
