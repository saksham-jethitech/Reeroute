import React from "react";

const HowItWorksSection = ({ isTrucker }) => {
  return (
    <div className="flex flex-col justify-center py-8 px-16 space-y-5">
      <div className="bg-[#E8E8E880] border-l-4 border-l-[#f99d5e] w-28 px-2">
        <span className="font-rubik font-normal text-[#2A4F6D] text-sm">
          How it works
        </span>
      </div>
      <h3 className="font-rubik font-semibold text-2xl lg:text-5xl text-[#2A4F6D]">
        How Reeroute works
      </h3>
      <p className="font-krub font-medium text-sm lg:text-3xl text-[#2A4F6D] w-full lg:w-4/5">
        With Reeroute, experience the perfect blend of reliability and
        convenience in your transportation needs.
      </p>
      <div className="flex justify-center items-center py-10 w-full">
        <img
          src={`/Assets/how-it-works-${isTrucker ? "trucker" : "shipper"}.png`}
          className="hidden lg:block w-[90%]"
        />
        <img
          src={`/Assets/how-it-works-${
            isTrucker ? "trucker" : "shipper"
          }-mobile.png`}
          className="lg:hidden w-[90%]"
        />
      </div>
    </div>
  );
};

export default HowItWorksSection;
