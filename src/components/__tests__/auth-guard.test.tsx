import { describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router";
import { render, screen } from "@testing-library/react";

import { getItem } from "@/core/services/common/storage.services";
import LoginPage from "@/pages/auth/login";
import AuthGuard from "@/components/auth-guard";

vi.mock("@apollo/client", async () => {
  const actual = await vi.importActual("@apollo/client");

  return {
    ...actual,
    useMutation: vi
      .fn()
      .mockReturnValue([
        () => Promise.resolve(),
        { loading: false, error: null },
      ]),
  };
});

vi.mock("@/core/services/common/storage.services", () => ({
  getItem: vi.fn(),
}));

describe("AuthGuard", () => {
  it("should redirect to login if not authenticated", () => {
    vi.mocked(getItem).mockReturnValue(null);

    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route
            path="/protected"
            element={
              <AuthGuard>
                <div>Protected Content</div>
              </AuthGuard>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText("Protected content")).not.toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
  it("should redirect to dashboard if authenticated", () => {
    vi.mocked(getItem).mockReturnValue("valid-token");

    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route
            path="/protected"
            element={
              <AuthGuard>
                <div>Dashboard</div>
              </AuthGuard>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
