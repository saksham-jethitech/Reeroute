import React, { useState } from "react";
import "./index.css";
import Footer from "./Components/Footer";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "./Constants";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  const handleSubmit = async () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
    await axios
      .post(`${BASE_URL}/email/contactUs`, {
        name,
        email,
        phoneNumber,
        city,
        message,
      })
      .then((res) => {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setCity("");
        setMessage("");
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
            src={`/Assets/ContactUsBackground.png`}
            className="w-full h-full object-cover inset-0"
          />
          <div className={`absolute inset-0 bg-black opacity-80 `}></div>
          <div className="absolute inset-0 flex flex-col py-2 space-y-16 lg:space-y-0 justify-center lg:flex-row items-center ">
            <div className="flex flex-col w-full px-4 lg:px-0 lg:w-2/5 space-y-3">
              <div className="px-2 w-fit  border-l-4 border-l-[#FFB629] bg-[#041C3780]">
                <p className="hidden  md:block font-rubik font-normal text-sm text-white">
                  Contact
                </p>
              </div>
              <p className="font-rubik font-bold text-2xl md:text-6xl text-white">
                Contact Us
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
                  Contact
                </span>
              </div>
              <h3 className="font-rubik font-semibold text-4xl text-black">
                Get in touch with us
              </h3>
              <p className="font-krub font-medium text-base text-black">
                Choose Reeroute as your logistics partner and experience
                seamless operations, improved efficiency, and cost-effective
                solutions for your supply chain
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
                placeholder="Your Name*"
                className="w-[45%] outline-none px-4 py-2 border border-[#00000033] placeholder:text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-[45%] outline-none px-4 py-2 border border-[#00000033] placeholder:text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <input
                type="text"
                placeholder="Phone Number*"
                className="w-[45%] outline-none px-4 py-2 border border-[#00000033] placeholder:text-black"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="City*"
                className="w-[45%] outline-none px-4 py-2 border border-[#00000033] placeholder:text-black"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <textarea
              rows="9"
              cols="85"
              placeholder="Message*"
              className="outline-none px-4 py-2 border border-[#00000033] resize-none placeholder:text-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="flex flex-col w-full justify-center items-center space-y-4">
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

export default ContactUs;
