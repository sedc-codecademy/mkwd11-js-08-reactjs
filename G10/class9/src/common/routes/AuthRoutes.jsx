import { lazy } from "react";
const LoginComponent = lazy(() => import("../../components/Auth/Login"));
const LayoutComponent = lazy(() => import("../../components/Layout/Layout"));

const AuthRoutes = {
  path: "/",
  element: <LayoutComponent />,
  children: [
    {
      path: "/login",
      element: <LoginComponent />,
    },
  ],
};

export default AuthRoutes;
