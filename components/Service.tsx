import React from "react";

type ServiceProps = {
  title: string;
  logo: any;
  description: string;
  colorCode:string
};

const Service = ({ logo, title, description,colorCode }: ServiceProps) => {
  return (
    <div className="w-[90%] sm:w-[45%] md:w-[30%] border bg-white shadow-lg text-black p-5 rounded-[7px] flex flex-col justify-center items-center gap-3">
      <div className={`rounded-full ${colorCode} p-4`}>{logo}</div>
      <h1 className="text-bold text-lg">{title}</h1>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Service;
