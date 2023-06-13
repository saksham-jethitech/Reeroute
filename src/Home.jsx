import React, { useState, useEffect } from "react";
import "./index.css";
import TruckerForm from "./Components/TruckerForm";
import HomeAdditionalDetail from "./Components/HomeAdditionalDetail";
import ShipperForm from "./Components/ShipperForm";
import Footer from "./Components/Footer";

const Home = ({ isTrucker }) => {
  const [activeBackground, setActiveBackground] = useState("");
  const [firstCircle, setFirstCircle] = useState("/Assets/filled-circle.png");
  const [secondCircle, setSecondCircle] = useState("/Assets/empty-circle.png");
  const [thirdCircle, setThirdCircle] = useState("/Assets/empty-circle.png");

  useEffect(() => {
    if (isTrucker) setActiveBackground("/Assets/background-trucker.jpg");
    else setActiveBackground("/Assets/background-shipper.png");
  }, [isTrucker]);

  const handleFirstCircleClick = () => {
    if (isTrucker) setActiveBackground("/Assets/background-trucker.jpg");
    else setActiveBackground("/Assets/background-shipper.png");
    setFirstCircle("/Assets/filled-circle.png");
    setSecondCircle("/Assets/empty-circle.png");
    setThirdCircle("/Assets/empty-circle.png");
  };

  const handleSecondCircleClick = () => {
    setActiveBackground("/Assets/background-2.png");
    setFirstCircle("/Assets/empty-circle.png");
    setSecondCircle("/Assets/filled-circle.png");
    setThirdCircle("/Assets/empty-circle.png");
  };

  const handleThirdCircleClick = () => {
    setActiveBackground("/Assets/background-3.png");
    setFirstCircle("/Assets/empty-circle.png");
    setSecondCircle("/Assets/empty-circle.png");
    setThirdCircle("/Assets/filled-circle.png");
  };

  return (
    <>
      <div className="w-full h-auto">
        <div className="relative h-screen">
          <img
            src={activeBackground}
            className="w-full h-full object-cover inset-0"
          />
          {/* <img
            src={`/Assets/background-${
              isTrucker ? "trucker.jpg" : "shipper.png"
            }`}
            className="w-full h-full object-cover inset-0"
          /> */}
          <div
            className={`absolute inset-0 bg-black ${
              isTrucker ? "opacity-10" : "opacity-50"
            } `}
          ></div>
          <div className="absolute inset-0 flex flex-col py-2 space-y-16 lg:space-y-0 justify-center lg:flex-row items-center ">
            <div className="flex flex-col w-full px-4 lg:px-0 lg:w-2/5 space-y-3">
              <div className="px-2 border-l-4 border-l-[#FFB629]">
                <p className="hidden md:block font-rubik font-normal text-sm text-white">
                  Streamline Your Logistics with Easy Truck Booking
                </p>
              </div>
              <p className="font-rubik font-bold text-2xl md:text-6xl text-white">
                ReeRoute: India's Fastest Truck Booking Platform!
              </p>
              <div className="w-full">
                <ul className="dot-list pl-0 hidden md:block">
                  <li className="font-krub font-medium text-base m-0">
                    Pan-India operations
                  </li>
                  <li className="font-krub font-medium text-base">
                    {`${
                      isTrucker
                        ? "Associated with 10,000+ Vehicle Owners"
                        : "Associated with 3,000+ SMEs/Transporters"
                    }`}
                  </li>
                  <li className="font-krub font-medium text-base">
                    {" "}
                    Guaranteed Timely Payments
                  </li>
                </ul>
              </div>
            </div>
            {isTrucker ? <TruckerForm /> : <ShipperForm />}
          </div>
          <div className="absolute inset-0 flex top-[90%] left-[40%] lg:left-[45%] space-x-5 items-center">
            <img
              src={firstCircle}
              className="cursor-pointer"
              onClick={handleFirstCircleClick}
            />
            <img
              src={secondCircle}
              className="cursor-pointer"
              onClick={handleSecondCircleClick}
            />
            <img
              src={thirdCircle}
              className="cursor-pointer"
              onClick={handleThirdCircleClick}
            />
          </div>
          <HomeAdditionalDetail isTrucker={isTrucker} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
