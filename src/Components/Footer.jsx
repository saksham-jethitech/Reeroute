import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // setAllLinksToInactive();
    window.scroll(0, 0);
  };

  const handleHowItWorkClick = () => {
    setTimeout(() => {
      const howItWorksSection = document.getElementById("how-it-works");
      if (howItWorksSection) {
        howItWorksSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const handleDownloadClick = () => {
    setTimeout(() => {
      const downloadSection = document.getElementById("download-section");
      if (downloadSection) {
        downloadSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <>
      <div className="h-auto lg:min-h-[40%] bg-[#2A4F6D] py-8 lg:py-16 px-10 lg:px-16 w-full flex flex-wrap lg:flex-nowrap flex-row space-y-5 lg:space-x-7 lg:space-y-0 items-start lg:items-center justify-center p-2 pt-16">
        <div className="flex flex-col justify-start  w-full lg:w-[25%] h-1/2 space-y-7">
          <div className="flex flex-col justify-center items-start w-full space-y-5 lg:space-y-2">
            <img src="/Assets/logo.png" className="w-[90px] hidden lg:block" />
            <img
              src="/Assets/logo-mobile.png"
              className="w-[90px] block lg:hidden"
            />
            <p className="font-krub text-xl lg:text-sm font-semibold lg:font-medium text-[#E8E8E8] ">
              Reeroute: India's Fastest Truck Booking Platform!
            </p>
          </div>
          <div className="flex flex-col justify-center items-start w-full space-y-2">
            <p className="font-krub text-xl lg:text-base font-semibold text-[#E8E8E8] ">
              Follow us on
            </p>
            <div className="flex flex-row items-center space-x-5 py-4 lg:py-1">
              <AiOutlineInstagram className="text-white text-5xl lg:text-2xl" />
              <BsFacebook className="text-white text-4xl lg:text-xl" />
              <BsTwitter className="text-white text-4xl lg:text-xl" />
              <BsLinkedin className="text-white text-4xl lg:text-xl" />
            </div>
          </div>
        </div>

        <div className="pt-10 lg:mt-0 flex flex-col justify-start  w-1/2 lg:w-[25%] h-1/2 space-y-3">
          <Link
            to="/aboutUs"
            className="font-krub font-medium text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            About Us
          </Link>
          <Link
            to="/"
            className="font-krub font-medium text-base text-white cursor-pointer"
            onClick={handleHowItWorkClick}
          >
            How it Works
          </Link>
          <Link
            to="/"
            className="font-krub font-medium text-base text-white cursor-pointer"
            onClick={handleDownloadClick}
          >
            Download App
          </Link>
          <Link
            to="/contactUs"
            className="font-krub font-medium text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            Contact
          </Link>
        </div>

        <div className="pt-10 lg:pt-0 lg:mt-0 flex flex-col justify-start  w-1/2 lg:w-[25%] h-1/2 space-y-3">
          <Link
            to="/carrers"
            className="font-krub font-medium text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            Careers
          </Link>
          <Link
            to="/terms-and-conditions"
            className="font-krub font-medium text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="font-krub font-medium text-base text-white cursor-pointer"
            onClick={handleClick}
          >
            Privacy Policy
          </Link>
        </div>

        <div className="pt-10 lg:mt-0 flex flex-col justify-start  w-full lg:w-[25%] h-1/2 space-y-10 lg:space-y-3">
          <div className="w-full flex justify-start space-x-3 items-center">
            <div className="w-10 h-10 rounded-full bg-[#F79633] cursor-pointer flex justify-center items-center">
              <AiOutlineMail />
            </div>
            <div className="flex flex-col items-start justify-between">
              <p className="font-krub font-medium text-sm text-white">Email</p>
              <p className="font-krub font-medium text-sm text-white">
                contact@logistics.com
              </p>
            </div>
          </div>
          <div className="w-full flex justify-start space-x-3 items-center">
            <div className="w-10 h-10 rounded-full bg-[#F79633] cursor-pointer flex justify-center items-center">
              <IoCallOutline />
            </div>
            <div className="flex flex-col items-start justify-between">
              <p className="font-krub font-medium text-sm text-white">
                Call Us
              </p>
              <p className="font-krub font-medium text-sm text-white">
                (00) 112 365 489
              </p>
            </div>
          </div>
          <div className="w-full flex justify-start space-x-3 items-start">
            <div className="w-10 h-10 rounded-full bg-[#F79633] cursor-pointer flex justify-center items-center px-3">
              <IoLocationOutline />
            </div>
            <div className="flex flex-col items-start justify-between">
              <p className="font-krub font-medium text-sm text-white">
                Address
              </p>
              <p className="font-krub font-medium text-sm text-white w-[70%]">
                B-606, sector -12, Kharghar, Navi mumbai - 400706
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex h-[10%] bg-[#2A4F6D] w-full  flex-col lg:flex-row space-y-3 lg:space-y-0 py-2 justify-center px-12 items-center">
        <p className="text-white font-krub text-base font-normal text-center">
          Copyright © ReeRoute | Designed by Jethi Tech
        </p>
      </div>
    </>
  );
};

export default Footer;
