import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const BottomBannerSection = () => {
  const imageArray = [
    "/Assets/clientLogo1.png",
    "/Assets/clientLogo2.png",
    "/Assets/clientLogo3.png",
    "/Assets/clientLogo4.png",
  ];

  const [activeImage, setActiveImage] = useState(0);

  const handleNext = () => {
    setActiveImage((prevCount) => (prevCount + 1) % 4);
  };

  const handlePrevious = () => {
    setActiveImage((prevCount) => (prevCount + 3) % 4);
  };

  return (
    <div className="relative w-full">
      <div className="bg-black bg-opacity-80 absolute inset-0 z-0"></div>
      {/* <div
    style={{
      backgroundImage: `url('/Assets/clientLogoBackground.png')`,
      backgroundColor: "black",
      opacity: 0.9,
    }}
    className="w-full flex justify-center items-center h-[40%]  bg-black bg-opacity-80"
  > */}
      <img
        src="/Assets/clientLogoBackground.png"
        className="w-full hidden lg:block"
      />
      <img
        src="/Assets/clientLogoBackgroundMobile.png"
        className="w-full lg:hidden"
      />
      <div className="hidden lg:flex absolute inset-0 z-0 w-full justify-center items-center">
        <div className="flex justify-center items-center w-4/5">
          <img src="/Assets/clientLogo1.png" className="w-1/4" />
          <img src="/Assets/clientLogo2.png" className="w-1/4" />
          <img src="/Assets/clientLogo3.png" className="w-1/4" />
          <img src="/Assets/clientLogo4.png" className="w-1/4" />
        </div>
      </div>

      <div className="flex flex-col lg:hidden absolute inset-0 z-0 w-full justify-around items-center">
        <div className="flex lg:hidden justify-center items-center w-[90%]">
          <img src={imageArray[activeImage]} className="w-full" />
          {/* <img src="/Assets/clientLogo2.png" />
      <img src="/Assets/clientLogo3.png" />
      <img src="/Assets/clientLogo4.png" /> */}
        </div>
        <div className=" items-center space-x-3 flex lg:hidden">
          <div className="w-10 h-10 rounded-full bg-[#f89b5c] flex justify-center items-center cursor-pointer">
            <AiOutlineArrowLeft
              className="text-[#2A4F6D]"
              onClick={handleNext}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#2A4F6D] flex justify-center items-center cursor-pointer">
            <AiOutlineArrowRight
              className="text-white"
              onClick={handlePrevious}
            />
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default BottomBannerSection;
