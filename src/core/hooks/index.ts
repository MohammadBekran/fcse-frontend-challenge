import { useEffect } from "react";
import { useNavigate } from "react-router";

import { ERoutes } from "@/core/enums";
import { getItem } from "@/core/services/common/storage.services";

export const useAuthRedirect = (shouldBeLoggedOut: boolean = false) => {
  const navigate = useNavigate();

  const token = getItem("token");

  useEffect(() => {
    const isAuthenticated = !!token;

    if (shouldBeLoggedOut && isAuthenticated) {
      navigate(ERoutes.Dashboard, { replace: true });
    }

    if (!shouldBeLoggedOut && !isAuthenticated) {
      navigate(ERoutes.Login, { replace: true });
    }
  }, [navigate, token, shouldBeLoggedOut]);
};
