import { createBrowserRouter } from "react-router";

import AuthLayout from "@/components/partials/layouts/auth-layout";
import { COMMON_ROUTES } from "@/core/configs/router/common.routes";
import LoginPage from "@/pages/auth/login";

export const AUTH_ROUTER = createBrowserRouter([
  ...COMMON_ROUTES,
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
