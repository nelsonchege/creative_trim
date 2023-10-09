import React from "react";
import Service from "./Service";
import { Fingerprint, RefreshCcw, Star } from "lucide-react";

const Services = () => {
  return (
    <div className="w-full px-3 flex flex-wrap justify-center gap-5 mt-[-25px]">
      <Service
        title={"Awarded Agency"}
        logo={<Star color="white" fill="white" />}
        description={
          "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough."
        }
        colorCode={"bg-[#176B87]"}
      />
      <Service
        title={"Free Revisions"}
        logo={<RefreshCcw  color="white" />}
        description={
          "Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious."
        }
        colorCode={"bg-[#FF7676]"}
      />
      <Service
        title={"Verified Company"}
        logo={<Fingerprint color="white" />}
        description={
          "Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!"
        }
        colorCode={"bg-[#6A9C89]"}
      />
    </div>
  );
};

export default Services;
