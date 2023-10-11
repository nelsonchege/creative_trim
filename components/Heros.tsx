import React from "react";
import Hero from "./Hero";
import Image from "next/image";

type HerosProps = {};

const Heros = ({}: HerosProps) => {
  return (
    <div className="w-[100%] my-10 p-2 flex flex-col justify-center items-center gap-10">
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center text-center gap-4">
        <h1 className="font-bold text-4xl text-gray-900">
          Here are our heroes
        </h1>
        <p className="text-gray-600 ">
          According to the National Oceanic and Atmospheric Administration, Ted,
          Scambos, NSIDClead scentist, puts the potentially record maximum.
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
        <Hero
          name={"Ryan Tompson"}
          title={"Web Developer"}
          Image={
            <>
              <Image
                width={400}
                height={400}
                className="rounded-xl"
                objectFit="cover"
                src="https://demos.creative-tim.com/material-tailwind-kit-react/img/team-1.jpg"
                alt="Messaging placeholder"
              />
            </>
          }
        />
        <Hero
          name={"Romina Hadid"}
          title={"Marketing Specialist"}
          Image={
            <>
              <Image
                width={400}
                height={400}
                className="rounded-xl"
                objectFit="cover"
                src="https://demos.creative-tim.com/material-tailwind-kit-react/img/team-2.jpg"
                alt="Messaging placeholder"
              />
            </>
          }
        />
        <Hero
          name={"Alexa Smith"}
          title={"UX/UI Developer"}
          Image={
            <>
              <Image
                width={400}
                height={400}
                className="rounded-xl"
                objectFit="cover"
                src="https://demos.creative-tim.com/material-tailwind-kit-react/img/team-3.jpg"
                alt="Messaging placeholder"
              />
            </>
          }
        />
        <Hero
          name={"Jenna Kardi"}
          title={"Founder and CEO"}
          Image={
            <>
              <Image
                width={400}
                height={400}
                className="rounded-xl"
                objectFit="cover"
                src="https://demos.creative-tim.com/material-tailwind-kit-react/img/team-4.png"
                alt="Messaging placeholder"
              />
            </>
          }
        />
      </div>
    </div>
  );
};

export default Heros;
