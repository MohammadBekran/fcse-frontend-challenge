import { create } from "zustand";
import { persist } from "zustand/middleware";
import { removeItem, setItem } from "@/core/services/common/storage.services";

interface IAuthState {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuth = create<IAuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: (token: string) => {
        setItem("token", token);
        set({ isAuthenticated: true });
      },
      logout: () => {
        removeItem("token");
        set({ isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
