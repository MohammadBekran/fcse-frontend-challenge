import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import InformationBox from "@/features/dashboard/components/information-box";
import LogoutButton from "@/features/dashboard/components/logout-button";
import { USER_QUERY } from "@/features/dashboard/core/queries";

import LanguageSwitcher from "@/components/language-switcher";

const Dashboard: React.FC = () => {
  const { data } = useQuery(USER_QUERY);
  const { t } = useTranslation();

  return (
    <main className="h-full flex justify-between items-start p-10 m-5 rounded-[15px] bg-[#F2F4F8]">
      <div>
        <h1 className="text-2xl font-bold">{t("dashboard.title")}</h1>
        <div className="mt-6 space-y-4">
          <InformationBox
            title={t("dashboard.firstName")}
            value={data?.user?.firstName}
          />
          <InformationBox
            title={t("dashboard.lastName")}
            value={data?.user?.lastName}
          />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-2 -mt-[12px]">
          <LanguageSwitcher />
          <LogoutButton />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
