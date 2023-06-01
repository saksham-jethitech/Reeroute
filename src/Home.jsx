import React from "react";
import "./index.css";
import TruckerForm from "./Components/TruckerForm";

const Home = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative h-screen">
        <img
          src="/Assets/Background.jpg"
          className="w-full h-full object-cover inset-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col w-2/5 space-y-3">
            <div className="px-2 border-l-4 border-l-[#FFB629]">
              <p className="font-rubik font-normal text-sm text-white">
                Streamline Your Logistics with Easy Truck Booking
              </p>
            </div>
            <p className="font-rubik font-bold text-6xl text-white">
              ReeRoute: India's Fastest Truck Booking Platform!
            </p>
            <div className="w-full">
              <ul className="dot-list pl-0">
                <li className="font-krub font-medium text-base m-0">
                  Pan-India operations
                </li>
                <li className="font-krub font-medium text-base">
                  Associated with 10,000+ Vehicle Owners
                </li>
                <li className="font-krub font-medium text-base">
                  {" "}
                  Guaranteed Timely Payments
                </li>
              </ul>
            </div>
          </div>
          <TruckerForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
