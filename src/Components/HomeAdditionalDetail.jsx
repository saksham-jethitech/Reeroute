import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const HomeAdditionalDetail = () => {
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
              <p>Associated with 10,000+ Vehicle Owners</p>
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

      {/* How it Works */}

      <div className="flex flex-col justify-center py-8 px-16 space-y-5">
        <div className="bg-[#E8E8E880] border-l-4 border-l-[#f99d5e] w-28 px-2">
          <span className="font-rubik font-normal text-[#2A4F6D] text-sm">
            How it works
          </span>
        </div>
        <h3 className="font-rubik font-semibold text-5xl text-[#2A4F6D]">
          How Reeroute works
        </h3>
        <p className="font-krub font-medium text-3xl text-[#2A4F6D] w-4/5">
          With Reeroute, experience the perfect blend of reliability and
          convenience in your transportation needs.
        </p>
        <div className="flex justify-center items-center py-10 w-full">
          <img src="/Assets/how-it-works-shipper.png" className="w-[90%]" />
        </div>
      </div>

      {/* What our shippers say */}
      <div className="w-full flex justify-center">
        <div className="flex flex-col i justify-center py-8 px-16 space-y-5 w-4/5">
          <div className="bg-[#E8E8E880] border-l-4 border-l-[#f99d5e] w-28 px-2">
            <span className="font-rubik font-normal text-[#2A4F6D] text-sm">
              Testimonial
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-rubik font-semibold text-5xl text-[#2A4F6D]">
              What Our Shippers Say
            </h3>
            <div className="flex items-center space-x-3">
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
              <div className="w-1/2 bg-[#F4F4F4] flex flex-col px-4 py-12 justify-center space-y-5">
                <div className="flex justify-between items-center">
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
                  <div>
                    <img src="/Assets/review-icon.png" />
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
              <div className="w-1/2 bg-[#2A4F6D] flex flex-col px-4 py-12 justify-center space-y-5">
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
                  ReeRoute's framework fosters collaborative thinking,
                  empowering diversity and driving disruptive innovation. They
                  go beyond logistics, delivering a robust value proposition.
                  Their commitment to positive change sets them apart. Highly
                  recommended!
                </p>
                <div>
                  <img src="/Assets/Star.png" />
                </div>
              </div>
              {/* <div className="w-1/2 bg-[#F4F4F4] flex flex-col px-4 py-6 justify-center space-y-5">
                <div className="flex justify-between items-center">
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
                  <div>
                    <img src="/Assets/review-icon.png" />
                  </div>
                </div>
                <p className="italic font-krub font-medium text-base text-[#666C89]">
                  Reeroute frameworks to provide a robust synopsis for strategy
                  foster collaborative thinking to further the overall value
                  proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdditionalDetail;
