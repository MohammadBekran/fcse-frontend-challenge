import { Skeleton } from "@/components/ui/skeleton";

interface IInformationBoxProps {
  title: string;
  value: string;
}

const InformationBox: React.FC<IInformationBoxProps> = ({ title, value }) => {
  return (
    <div className="flex gap-x-2">
      <span className="font-bold">{title}</span>
      {value ? (
        <span>{value}</span>
      ) : (
        <Skeleton className="w-[100px] h-[20px] mt-[2px] rounded-full bg-gray-400" />
      )}
    </div>
  );
};

export default InformationBox;
