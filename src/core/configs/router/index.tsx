import { createBrowserRouter } from "react-router";

import AuthLayout from "@/components/partials/layouts/auth-layout";
import LoginPage from "@/pages/auth/login";
import DashboardPage from "@/pages/dashboard";
import NotFoundPage from "@/pages/not-found";
import ErrorPage from "@/pages/error";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
