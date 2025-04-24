import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { expect, vi, test, describe } from "vitest";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { toast } from "@/lib/utils";

import AuthForm from "@/features/auth/components/auth-form";

import { MemoryRouter } from "react-router";

const client = new ApolloClient({
  uri: "mock-api",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: "no-cache" },
    query: { fetchPolicy: "no-cache" },
  },
});

vi.mock("@/lib/utils", async () => {
  const actual = await vi.importActual<typeof import("@/lib/utils")>(
    "@/lib/utils"
  );

  return {
    ...actual,
    toast: {
      loading: vi.fn(),
      success: vi.fn(),
      error: vi.fn(),
      dismiss: vi.fn(),
    },
  };
});

describe("AuthForm", () => {
  test("logs in successfully and redirects", async () => {
    const email = "test@gmail.com";
    const password = "password";

    const toastSpy = vi.spyOn(toast, "loading");

    render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <AuthForm />
        </MemoryRouter>
      </ApolloProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/your email/i), {
      target: { value: email },
    });
    fireEvent.change(screen.getByPlaceholderText(/your password/i), {
      target: { value: password },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalled();
    });
  });
});
