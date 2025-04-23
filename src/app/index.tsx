import { RouterProvider } from "react-router";

import ApolloClientProvider from "@/components/partials/providers/apollo-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { router } from "@/core/configs/router";

const App = () => {
  return (
    <ApolloClientProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ApolloClientProvider>
  );
};

export default App;
