import React from "react";
import BuildItem from "./BuildItem";
import { AreaChart, Rocket, Star } from "lucide-react";

type Props = {};

const Building = (props: Props) => {
  return (
    <div className="w-[100%] flex flex-col p-4 items-center gap-5">
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center text-center gap-4">
        <h1 className="font-bold text-4xl text-gray-900">Build Something</h1>
        <p className="text-gray-600 ">
          Put the potentially record low maximum sea ice extent tihs year down
          to low ice. According to the National Oceanic and Atmospheric
          Administration, Ted, Scambos.
        </p>
      </div>
      <div className="flex gap-7 flex-col sm:flex-row ">
        <BuildItem
          logo={<Star fill="black" size={20} />}
          title={"Excellent Services"}
          description={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <BuildItem
          logo={<AreaChart fill="black" size={20} />}
          title={"Grow your Market"}
          description={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <BuildItem
          logo={<Rocket fill="black" size={20} />}
          title={"Launch Time"}
          description={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
      </div>
    </div>
  );
};

export default Building;
