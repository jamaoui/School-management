import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "../layouts/Layout.jsx";
import GuestLayout from "../layouts/GuestLayout.jsx";
import StudentDashboardLayout from "../layouts/Student/StudentDashboardLayout.jsx";
import StudentDashboard from "../components/Student/StudentDashboard.jsx";

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
        path: '*',
        element: <NotFound/>
      },
    ]
  },
    {
        element: <GuestLayout/>,
        children: [
            {
                path: LOGIN_ROUTE,
                element: <Login/>
            },
        ]
    },
    {
        element: <StudentDashboardLayout/>,
        children: [
            {
                path: STUDENT_DASHBOARD_ROUTE,
                element: <StudentDashboard/>
            },
        ]
    }

])
