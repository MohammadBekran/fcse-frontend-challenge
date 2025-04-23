import React from "react";

interface IInformationBoxProps {
  title: string;
  value: string;
}

const InformationBox: React.FC<IInformationBoxProps> = ({ title, value }) => {
  return (
    <div className="flex gap-x-2">
      <span className="font-bold">{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default InformationBox;
