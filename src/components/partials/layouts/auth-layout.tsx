import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

import LanguageSwitcher from "@/components/language-switcher";
import Logo from "@/components/logo";

const AuthLayout = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex justify-between items-center mt-10 px-5 lg:hidden">
        <Logo width={60} height={60} fontSize={22} />
        <LanguageSwitcher />
      </div>
      <div className="hidden w-1/2 p-10 pt-14 bg-[#FA7275] lg:flex lg:justify-center xl:w-2/5">
        <div className="max-w-[430px] max-h-[800px] space-y-12">
          <Logo width={80} height={80} white />
          <div className="space-y-5 text-white">
            <p className="text-[34px] font-bold leading-[42px]">
              {t("auth.title")}
            </p>
            <p className="text-base font-normal leading-6">
              {t("auth.description")}
            </p>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="flex flex-col items-center flex-1 p-4 py-10 bg-white lg:justify-center lg:p-10 lg:py-0">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
