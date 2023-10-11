import React from "react";

type BuildItemProps = {
  logo: any;
  title: string;
  description: string;
};

const BuildItem = ({ logo, title, description }: BuildItemProps) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="rounded-full bg-white shadow-xl p-5">{logo}</div>
      <div className="font-bold text-xl">{title}</div>
      <p className="w-2/3 text-center text-gray-600">{description}</p>
    </div>
  );
};

export default BuildItem;
