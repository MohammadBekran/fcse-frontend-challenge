import { RouterProvider } from "react-router";

import ApolloClientProvider from "@/components/partials/providers/apollo-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { AUTH_ROUTER } from "@/core/configs/router/auth.router";
import { PRIVATE_ROUTER } from "@/core/configs/router/private.router";
import { useAuth } from "@/features/auth/core/hooks";

const App = () => {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  return (
    <ApolloClientProvider>
      <RouterProvider
        key={isAuthenticated ? "private" : "auth"}
        router={isAuthenticated ? PRIVATE_ROUTER : AUTH_ROUTER}
      />
      <Toaster />
    </ApolloClientProvider>
  );
};

export default App;
