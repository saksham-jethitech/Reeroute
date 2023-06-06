import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const ExpertProfile = ({
  imageName,
  name,
  role,
  isTwitter = false,
  isFacebook = false,
  isInstagram = false,
  isLinkedin = false,
}) => {
  return (
    <div className="flex flex-col w-full lg:w-[30%]">
      <div className="w-full relative">
        <img src={`/Assets/${imageName}.png`} className="w-full" />
        <div className="absolute top-[90%] right-[0%] py-5 flex items-center justify-around px-7 bg-[#fb9f60] space-x-5">
          {isLinkedin && <BsLinkedin className="text-[#1C1F35] text-2xl" />}
          {isTwitter && <BsTwitter className="text-[#1C1F35] text-2xl" />}
          {isFacebook && <BsFacebook className="text-[#1C1F35] text-2xl" />}
          {isInstagram && <BsInstagram className="text-[#1C1F35] text-2xl" />}
        </div>
      </div>
      <div className="flex flex-col py-10 px-7 bg-[#2A4F6D]">
        <p className="font-rubik font-medium text-xl text-white">{name}</p>
        <p className="font-krub font-medium text-base text-white">{role}</p>
      </div>
    </div>
  );
};

export default ExpertProfile;
