import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import College from "../pages/college/College";
import CollegeDetails from "../pages/collegeDetails/CollegeDetails";
import Admission from "../pages/admission/Admission";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/profile/Profile";
import MyCollege from "../pages/myCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import NotFound from "../pages/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/college", element: <College /> },
      { path: "/college/:id", element: <CollegeDetails /> },
      { path: "/admission", element: <Admission /> },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />{" "}
          </PublicRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-college",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
