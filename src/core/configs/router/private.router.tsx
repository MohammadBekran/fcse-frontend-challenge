import { createBrowserRouter } from "react-router";

import { COMMON_ROUTES } from "@/core/configs/router/common.routes";
import DashboardPage from "@/pages/dashboard";

export const PRIVATE_ROUTER = createBrowserRouter([
  ...COMMON_ROUTES,
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);
