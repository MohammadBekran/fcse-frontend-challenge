import { useQuery } from "@apollo/client";

import { USER_QUERY } from "@/features/dashboard/core/queries";
import InformationBox from "@/features/dashboard/components/information-box";
import LogoutButton from "@/features/dashboard/components/logout-button";

const Dashboard: React.FC = () => {
  const { data } = useQuery(USER_QUERY);

  return (
    <main className="h-full flex justify-between p-10 m-5 rounded-[15px] bg-[#F2F4F8]">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="mt-6 space-y-4">
          <InformationBox title="First Name:" value={data?.user?.firstName} />
          <InformationBox title="Last Name:" value={data?.user?.lastName} />
        </div>
      </div>
      <LogoutButton />
    </main>
  );
};

export default Dashboard;
