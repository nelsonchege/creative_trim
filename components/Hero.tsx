import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

type HeroProps = {
  name: string;
  title: string;
  Image:any;
};

const Hero = ({Image, name, title }: HeroProps) => {
  return (
    <div className="w-[98%] md:w-[46%] lg:w-[23%] p-2 flex flex-col justify-center items-center gap-3">
      <div>{Image}</div>
      <h1 className="font-bold text-xl text-gray-800">{name}</h1>
      <span className="text-gray-600 text-[0.95rem]">{title}</span>
      <div className="flex gap-7">
        <Twitter fill="#26a7de" color="#26a7de" size={22} />
        <Facebook fill="#26a7de" color="#26a7de" size={22} />
        <Instagram color="white" fill="#FF6969" size={22} />
      </div>
    </div>
  );
};

export default Hero;
