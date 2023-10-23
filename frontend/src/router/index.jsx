import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "../layouts/Layout.jsx";

export const LOGIN_ROUTE = '/login'
export const STUDENT_DASHBOARD_ROUTE = '/student/dashboard'
export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: LOGIN_ROUTE,
        element: <Login/>
      },
      {
        path: STUDENT_DASHBOARD_ROUTE,
        element: <h1>Hi student</h1>
      },
      {
        path: '*',
        element: <NotFound/>
      },
    ]
  },

])
