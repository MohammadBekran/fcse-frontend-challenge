import { createBrowserRouter } from "react-router";

import AuthGuard from "@/components/auth-guard";
import AuthLayout from "@/components/partials/layouts/auth-layout";
import LoginPage from "@/pages/auth/login";
import DashboardPage from "@/pages/dashboard";
import ErrorPage from "@/pages/error";
import NotFoundPage from "@/pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthGuard requireAuth={false}>
        <AuthLayout />
      </AuthGuard>
    ),
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
    element: (
      <AuthGuard>
        <DashboardPage />
      </AuthGuard>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
