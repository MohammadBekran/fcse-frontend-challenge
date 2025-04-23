import { createBrowserRouter } from "react-router";

import { COMMON_ROUTES } from "@/core/configs/router/common.routes";

export const PRIVATE_ROUTER = createBrowserRouter([...COMMON_ROUTES]);
