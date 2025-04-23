import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { env } from "@/core/configs";
import { getItem } from "@/core/services/common/storage.services";
import type { TPropsWithChildren } from "@/core/types";

const httpLink = createHttpLink({
  uri: env.GRAPHQL_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const ApolloClientProvider: React.FC<TPropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
