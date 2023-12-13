import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "../layouts/Layout.jsx";
import GuestLayout from "../layouts/GuestLayout.jsx";
import StudentDashboardLayout from "../layouts/StudentDashboardLayout.jsx";
import StudentDashboard from "../components/Student/StudentDashboard.jsx";
import AdminDashboardLayout from "../layouts/AdminDashboardLayout.jsx";
import AdminDashboard from "../components/Admin/AdminDashboard.jsx";
import TeacherDashboardLayout from "../layouts/TeacherDashboardLayout.jsx";
import TeacherDashboard from "../components/Teacher/TeacherDashboard.jsx";

export const LOGIN_ROUTE = '/login'
export const STUDENT_DASHBOARD_ROUTE = '/student/dashboard'
export const ADMIN_DASHBOARD_ROUTE = '/admin/dashboard'
export const TEACHER_DASHBOARD_ROUTE = '/teacher/dashboard'
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
    },
    {
        element: <AdminDashboardLayout/>,
        children: [
            {
                path: ADMIN_DASHBOARD_ROUTE,
                element: <AdminDashboard/>
            },
        ]
    },
    {
        element: <TeacherDashboardLayout/>,
        children: [
            {
                path: TEACHER_DASHBOARD_ROUTE,
                element: <TeacherDashboard/>
            },
        ]
    }

])
