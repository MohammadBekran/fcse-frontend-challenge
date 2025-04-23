import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router";

import { useAuth } from "@/features/auth/core/hooks";

import { Button } from "@/components/ui/button";
import { ERoutes } from "@/core/enums";

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = useAuth((state) => state.logout);

  const handleLogout = () => {
    logout();

    navigate(ERoutes.Login, { replace: true });
    navigate(0);
  };

  return (
    <Button
      className="min-w-[54px] h-[52px] flex justify-center items-center rounded-full shadow-none transition-all p-0 bg-[#FA7275]/10 text-[#FA7275] cursor-pointer hover:bg-[#FA7275]/20"
      onClick={handleLogout}
    >
      <CiLogout className="size-6" />
    </Button>
  );
};

export default LogoutButton;
