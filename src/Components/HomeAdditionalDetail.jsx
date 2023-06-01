import React from "react";

const HomeAdditionalDetail = () => {
  return (
    <>
      <div className="w-full py-14 flex justify-around">
        <div className="flex justify-between space-x-1 items-center">
          <p className="font-rubik font-semibold text-4xl text-[#2A4F6D]">
            10,000 +
          </p>
          <div className="w-4 h-4 bg-[#f99d5e]"></div>
          <p className="font-rubik font-normal text-base text-[#2A4F6D]">
            Vehicle Owners
          </p>
        </div>
        <div className="flex justify-between space-x-1 items-center">
          <p className="font-rubik font-semibold text-4xl text-[#2A4F6D]">
            25,000+
          </p>
          <div className="w-4 h-4 bg-[#f99d5e]"></div>
          <p className="font-rubik font-normal text-base text-[#2A4F6D]">
            Successful Bookings
          </p>
        </div>
        <div className="flex justify-between space-x-1 items-center">
          <p className="font-rubik font-semibold text-4xl text-[#2A4F6D]">
            3,000+
          </p>
          <div className="w-4 h-4 bg-[#f99d5e]"></div>
          <p className="font-rubik font-normal text-base text-[#2A4F6D]">
            Satisfied clients
          </p>
        </div>
        <div className="flex justify-between space-x-1 items-center">
          <p className="font-rubik font-semibold text-4xl text-[#2A4F6D]">
            70+
          </p>
          <div className="w-4 h-4 bg-[#f99d5e]"></div>
          <p className="font-rubik font-normal text-base text-[#2A4F6D]">
            Cities Covered
          </p>
        </div>
      </div>
      <div className="flex bg-[#F4F4F4] items-center py-5">
        <img src="/Assets/mobile-icon.png" className="w-1/2" />
        <div className="flex flex-col w-1/2 space-y-8">
          <div className="flex flex-col w-[70%] space-y-9">
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
            <p className="font-rubik font-medium text-2xl">
              Download Trucker App
            </p>
            <div className="flex space-x-2">
              <img src="/Assets/google.png" />
              <img src="/Assets/apple.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdditionalDetail;
