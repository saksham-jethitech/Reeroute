import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const UserReviewSections = ({ isTrucker }) => {
  return (
    <div className="bg-[#F4F4F4] lg:bg-white w-full flex justify-start lg:justify-center">
      <div className="flex flex-col i justify-center py-8 px-16 space-y-5 w-full lg:w-4/5">
        <div className="bg-[#E8E8E880] border-l-4 border-l-[#f99d5e] w-28 px-2">
          <span className="font-rubik font-normal text-[#2A4F6D] text-sm">
            Testimonial
          </span>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-rubik font-semibold text-xl lg:text-5xl text-[#2A4F6D]">
            {`What Our ${isTrucker ? "Truckers" : "Shippers"} Say`}
          </h3>
          <div className=" items-center space-x-3 hidden lg:flex">
            <div className="w-10 h-10 rounded-full bg-[#f89b5c] flex justify-center items-center cursor-pointer">
              <AiOutlineArrowLeft className="text-[#2A4F6D]" />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#2A4F6D] flex justify-center items-center cursor-pointer">
              <AiOutlineArrowRight className="text-white" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[90%] flex items-center justify-center">
            <div className="w-full lg:w-1/2 bg-[#F4F4F4] flex flex-col px-1 lg:px-4 py-12 justify-center space-y-5">
              <div className="flex flex-col lg:flex-row items-start justify-center space-y-3 lg:space-y-0 lg:justify-between lg:items-center">
                <div className="flex items-center space-x-2">
                  <img src="/Assets/User.png" />
                  <div className="flex flex-col">
                    <p className="text-[#091242] font-rubik font-medium text-xl">
                      Varun Trivedi
                    </p>
                    <p className="text-[#091242] font-krub font-medium text-base">
                      Fuel Company
                    </p>
                  </div>
                </div>
                <div className="flex w-[40%] justify-center">
                  <img
                    src="/Assets/review-icon.png"
                    className="w-7 h-7 lg:w-auto lg:h-auto"
                  />
                </div>
              </div>
              <p className="italic font-krub font-medium text-base text-[#666C89]">
                Reeroute frameworks to provide a robust synopsis for strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <div>
                <img src="/Assets/Star.png" />
              </div>
            </div>
            <div className="w-1/2 bg-[#2A4F6D] hidden lg:flex flex-col px-4 py-12 justify-center space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img src="/Assets/user-2.png" />
                  <div className="flex flex-col">
                    <p className="text-white font-rubik font-medium text-xl">
                      Vijay Nagar
                    </p>
                    <p className="text-white font-krub font-medium text-base">
                      Restoration Company
                    </p>
                  </div>
                </div>
                <div>
                  <img src="/Assets/review-icon.png" />
                </div>
              </div>
              <p className="italic font-krub font-medium text-base text-white">
                ReeRoute's framework fosters collaborative thinking, empowering
                diversity and driving disruptive innovation. They go beyond
                logistics, delivering a robust value proposition. Their
                commitment to positive change sets them apart. Highly
                recommended!
              </p>
              <div>
                <img src="/Assets/Star.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:hidden items-center space-x-3 w-full">
          <div className="w-10 h-10 rounded-full bg-[#f89b5c] flex justify-center items-center cursor-pointer">
            <AiOutlineArrowLeft className="text-[#2A4F6D]" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#2A4F6D] flex justify-center items-center cursor-pointer">
            <AiOutlineArrowRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviewSections;
