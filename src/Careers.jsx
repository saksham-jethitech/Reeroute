import React, { useState } from "react";
import "./index.css";
import Footer from "./Components/Footer";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "./Constants";

const Careers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  const handleSubmit = async () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);

    await axios
      .post(`${BASE_URL}/email/carrer`, {
        name,
        email,
        mobileNumber,
        department,
      })
      .then((res) => {
        setName("");
        setEmail("");
        setMobileNumber("");
        setDepartment("");
        setShowSuccessMessage(true);
      })
      .catch((error) => {
        setShowFailMessage(true);
      });
  };

  return (
    <>
      <div className="w-full h-auto">
        <div className="relative h-1/2vh">
          <img
            src={`/Assets/careersBackground.png`}
            className="w-full h-full object-cover inset-0"
          />
          <div className={`absolute inset-0 bg-black opacity-80 `}></div>
          <div className="absolute inset-0 flex flex-col py-2 space-y-16 lg:space-y-0 justify-center lg:flex-row items-center ">
            <div className="flex flex-col w-full px-4 lg:px-0 lg:w-2/5 space-y-3">
              <div className="px-2 w-fit  border-l-4 border-l-[#FFB629] bg-[#041C3780]">
                <p className="hidden  md:block font-rubik font-normal text-sm text-white">
                  Carrers
                </p>
              </div>
              <p className="font-rubik font-bold text-2xl md:text-6xl text-white">
                Join Our Team
              </p>
            </div>
          </div>
          {/* <ContactUsAdditionalDetail isTrucker={isTrucker} /> */}
        </div>

        <div className="min-h-screen py-16 flex justify-center">
          <div className="border border-[#000000CC] rounded-lg py-16 px-10 flex flex-col items-start w-1/2 space-y-8">
            <div className="flex flex-col w-full items-start space-y-2">
              <div className="bg-[#E8E8E880] border-l-4 border-l-[#f99d5e] w-28 px-2">
                <span className="font-rubik font-normal text-[#2A4F6D] text-sm">
                  Carrers
                </span>
              </div>
              <h3 className="font-rubik font-semibold text-4xl text-black">
                Join Our Team
              </h3>
              <p className="font-krub font-medium text-base text-black">
                Join Our Team: Unlock Your Potential and Build a Fulfilling
                Career in the Dynamic World of Logistics!
              </p>
            </div>

            <div className="flex w-full items-around justify-around">
              <div className="flex flex-col items-center justify-start space-y-2">
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                  <AiOutlineMail className="text-white text-2xl" />
                </div>
                <p className="font-krub font-medium text-sm text-black">
                  Contact@logistics.com
                </p>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                  <IoCallOutline className="text-white text-2xl" />
                </div>
                <p className="font-krub font-medium text-sm text-black">
                  (00) 112 365 489
                </p>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
                  <BiTimeFive className="text-white text-2xl" />
                </div>
                <div className="w-[60%] flex justify-center">
                  <p className="font-krub font-medium text-sm text-black w-full text-center">
                    Mon - Sat 9.00 - 18.00 Sunday Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <input
                type="text"
                placeholder="Name*"
                className="w-[45%] outline-none px-4 py-2 border border-[#00000033] placeholder:text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Id*"
                className="w-[45%] outline-none px-4 py-2 border border-[#00000033] placeholder:text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <input
                type="text"
                placeholder="Mobile Number*"
                className="w-[45%] outline-none px-4 py-2 border border-[#00000033] placeholder:text-black"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <select
                className="w-[45%] outline-none px-4 py-2 border border-[#00000033]"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="" hidden disabled selected>
                  Department*
                </option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Operations">Operations</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="flex flex-col w-full items-center space-y-4 justify-center">
              <button
                className="text-[#23212A] font-krub font-semibold text-base py-4 px-5 bg-[#F79633]"
                onClick={handleSubmit}
              >
                Submit Message
              </button>
              {showSuccessMessage && (
                <p className="font-krub font-normal text-sm text-green-500">
                  Form Submitted Successfully!
                </p>
              )}
              {showFailMessage && (
                <p className="font-krub font-normal text-sm text-red-500">
                  Something Went Wrong!
                </p>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
