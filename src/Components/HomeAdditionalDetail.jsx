import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  IoCallOutline,
  IoLocationOutline,
  IoStopCircle,
} from "react-icons/io5";
import FAQsection from "./HomePageComponents/FAQsection";
import BottomBannerSection from "./HomePageComponents/BottomBannerSection";
import UserReviewSections from "./HomePageComponents/UserReviewSections";
import HowItWorksSection from "./HomePageComponents/HowItWorksSection";

// const FAQs = [
//   {
//     question: "How can I make an online truck booking?",
//     answer:
//       "Booking your truck with ReeRoute is very simple. Just add pickup and destination location. Then, select the weight of goods, type, and size of the truck. Our network of truckers will provide you the best prices with highest reliability.",
//   },
//   {
//     question: "Can I place a booking with multi-point pick up and drop?",
//     answer:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam molestiae, sequi aliquam ea placeat sed quia aliquid recusandae! Voluptas assumenda corrupti ratione doloremque numquam inventore, sed quibusdam modi obcaecati!",
//   },
//   {
//     question: "Can I cancel my booking? Is there any cancellation fee?",
//     answer:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam molestiae, sequi aliquam ea placeat sed quia aliquid recusandae! Voluptas assumenda corrupti ratione doloremque numquam inventore, sed quibusdam modi obcaecati!",
//   },
// ];

const HomeAdditionalDetail = ({ isTrucker }) => {
  return (
    <>
      <div className="w-full py-14 flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-around">
        <div className="w-full md:hidden flex items-center px-4">
          <ul>
            <li className="font-krub font-medium text-lg text-[#2A4F6D] flex space-x-3 w-full items-center">
              <img src="/Assets/list-icon.png" className="w-3 h-3" />
              <p>Pan-India operations</p>
            </li>
            <li className="font-krub font-medium text-lg text-[#2A4F6D] flex space-x-3 w-full items-center">
              <img src="/Assets/list-icon.png" className="w-3 h-3" />
              <p>{`${
                isTrucker
                  ? "Associated with 3,000+ SMEs/Transporters"
                  : "Associated with 10,000+ Vehicle Owners"
              }`}</p>
            </li>
            <li className="font-krub font-medium text-lg text-[#2A4F6D] flex space-x-3 w-full items-center">
              <img src="/Assets/list-icon.png" className="w-3 h-3" />
              <p>Guaranteed Timely Payments</p>
            </li>
          </ul>
        </div>
        <div className="flex lg:justify-between space-x-1 items-center py-4 lg:py-0 px-3 lg:px-0">
          <p className="w-[50%] lg:w-auto font-rubik font-semibold text-4xl text-[#2A4F6D]">
            10,000 +
          </p>
          <div className="w-4 h-4 bg-[#f99d5e]"></div>
          <p className="w-[40%]font-rubik font-normal text-base text-[#2A4F6D]">
            Vehicle Owners
          </p>
        </div>
        <div className="flex lg:justify-between space-x-1 items-center py-4 lg:py-0 px-3 lg:px-0">
          <p className="w-[50%] lg:w-auto font-rubik font-semibold text-4xl text-[#2A4F6D]">
            25,000+
          </p>
          <div className="w-4 h-4 bg-[#f99d5e]"></div>
          <p className="w-[40%] font-rubik font-normal text-base text-[#2A4F6D]">
            Successful Bookings
          </p>
        </div>
        <div className="flex lg:justify-between space-x-1 items-center py-4 lg:py-0 px-3 lg:px-0">
          <p className="w-[50%] lg:w-auto font-rubik font-semibold text-4xl text-[#2A4F6D]">
            3,000+
          </p>
          <div className="w-4 h-4 bg-[#f99d5e]"></div>
          <p className="w-[40%] font-rubik font-normal text-base text-[#2A4F6D]">
            Satisfied clients
          </p>
        </div>
        <div className="flex lg:justify-between space-x-1 items-center py-4 lg:py-0 px-3 lg:px-0">
          <p className="w-[50%] lg:w-auto font-rubik font-semibold text-4xl text-[#2A4F6D]">
            70+
          </p>
          <div className="w-4 h-4 bg-[#f99d5e]"></div>
          <p className="w-[40%] font-rubik font-normal text-base text-[#2A4F6D]">
            Cities Covered
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row sapce-y-6 lg:space-y-0 bg-[#F4F4F4] items-center py-10">
        <img src="/Assets/mobile-icon.png" className="w-full lg:w-1/2" />
        <div className="flex flex-col-reverse lg:flex-col w-full lg:w-1/2 space-y-8">
          <div className="mt-8 lg:mt-0 px-3 lg:px-0 flex flex-col w-full lg:w-[70%] space-y-9">
            <div className="flex flex-col">
              <p className="font-krub font-medium text-2xl text-[#2A4F6D]">
                Choose Your Own Load
              </p>
              <p className="font-krub font-normal text-lg text-[#2A4F6D99]">
                Take control of your workload with our interactive "Choose Your
                Own Load" feature. Select the type of load and city based on
                real-time truck availability.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-krub font-medium text-2xl text-[#2A4F6D]">
                Timely Payments
              </p>
              <p className="font-krub font-normal text-lg text-[#2A4F6D99]">
                Experience the power of interactive payments. With ReeRoute, Get
                advance payment in 2 hours after loading and balance within 24
                hours upon proof of delivery.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-krub font-medium text-2xl text-[#2A4F6D]">
                Manage Bookings Seamlessly
              </p>
              <p className="font-krub font-normal text-lg text-[#2A4F6D99]">
                Seamlessly manage your bookings and payment details with our
                interactive platform. Say goodbye to paperwork and scattered
                information
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-center lg:text-left lg:font-rubik font-medium text-2xl">
              Download Trucker App
            </p>
            <div className="flex flex-col lg:flex-row lg:space-x-2 w-full items-center">
              <img src="/Assets/google.png" />
              <img src="/Assets/apple.png" />
            </div>
            <p className="text-center lg:text-left text-[#000000E6] font-rubik font-semibold text-lg">
              Coming Soon
            </p>
          </div>
        </div>
      </div>

      <HowItWorksSection isTrucker={isTrucker} />

      <UserReviewSections isTrucker={isTrucker} />

      <FAQsection isTrucker={isTrucker} />

      <BottomBannerSection />
    </>
  );
};

export default HomeAdditionalDetail;
