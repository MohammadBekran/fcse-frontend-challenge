import { RouterProvider } from "react-router";

import ApolloClientProvider from "@/components/partials/providers/apollo-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { AUTH_ROUTER } from "@/core/configs/router/auth.router";
import { PRIVATE_ROUTER } from "@/core/configs/router/private.router";
import { getItem } from "@/core/services/common/storage.services";

const App = () => {
  const loggedIn = getItem("token");

  return (
    <ApolloClientProvider>
      <RouterProvider router={loggedIn ? PRIVATE_ROUTER : AUTH_ROUTER} />
      <Toaster />
    </ApolloClientProvider>
  );
};

export default App;
