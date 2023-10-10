import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Users, Users2 } from "lucide-react";

type Props = {};

const Messaging = (props: Props) => {
  return (
    <div className=" my-5 mx-3 sm:mx-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
      <div className="w-[95%] sm:w-[60%] p-2 flex flex-col gap-3 justify-start items-start">
        <div className="rounded-full p-5 shadow-xl bg-white">
          <Users fill="black" />
        </div>
        <h1 className="font-bold text-3xl">Working with us is a Pleasure</h1>
        <p className="text-gray-600 w-2/3">
          {`Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.`}
        </p>
        <p className="text-gray-600 w-2/3">
          {`The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.`}{" "}
        </p>
        <Button className="justify-end p-3 border border-blue-400 rounded-[7px] text-blue-400">
          Read More
        </Button>
      </div>
      <div className="w-[95%] sm:w-[30%] p-2 flex flex-col gap-3">
        <div className="w-[95%] m-3 ">
          <div style={{ width: "100%", height: "100%" }}>
            <Image
              width={400}
              height={400}
              className="rounded-xl"
              objectFit="cover"
              src="https://demos.creative-tim.com/material-tailwind-kit-react/img/teamwork.jpeg"
              alt="Messaging placeholder"
            />
          </div>
        </div>
        <h1 className="font-bold text-xl">Top Notch Services</h1>
        <p className="text-gray-600">
          The Arctic Ocean freezes every winter and much of the sea-ice then
          thaws every summer, and that process will continue whatever happens.
        </p>
      </div>
    </div>
  );
};

export default Messaging;
