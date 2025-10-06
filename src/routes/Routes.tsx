import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import College from "../pages/college/College";
import CollegeDetails from "../pages/collegeDetails/CollegeDetails";
import Admission from "../pages/admission/Admission";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/college", element: <College /> },
      { path: "/college/:id", element: <CollegeDetails /> },
      { path: "/admission", element: <Admission /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
