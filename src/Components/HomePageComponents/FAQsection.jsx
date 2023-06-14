import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import FAQitem from "../FAQitem";

const FAQs = [
  {
    question: "How can I make an online truck booking?",
    answer:
      "Booking your truck with ReeRoute is very simple. Just add pickup and destination location. Then, select the weight of goods, type, and size of the truck. Our network of truckers will provide you the best prices with highest reliability.",
  },
  {
    question: "Can I place a booking with multi-point pick up and drop?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam molestiae, sequi aliquam ea placeat sed quia aliquid recusandae! Voluptas assumenda corrupti ratione doloremque numquam inventore, sed quibusdam modi obcaecati!",
  },
  {
    question: "Can I cancel my booking? Is there any cancellation fee?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam molestiae, sequi aliquam ea placeat sed quia aliquid recusandae! Voluptas assumenda corrupti ratione doloremque numquam inventore, sed quibusdam modi obcaecati!",
  },
];

const FAQsection = ({ isTrucker }) => {
  return (
    <div className="flex flex-col justify-center py-8 lg:py-16 lg:px-16 space-y-5 ">
      <div className="bg-[#E8E8E880] border-l-4 border-l-[#f99d5e] w-28 px-2 ml-2 lg:hidden">
        <span className="font-rubik font-normal text-[#2A4F6D] text-sm">
          FAQ
        </span>
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between">
        <div className="w-[90%] lg:w-1/3 flex flex-col items-start space-y-4">
          <div className="hidden lg:block bg-[#E8E8E880] border-l-4 border-l-[#f99d5e] w-28 px-2">
            <span className="font-rubik font-normal text-[#2A4F6D] text-sm">
              FAQ
            </span>
          </div>
          <h3 className="font-rubik font-semibold text-2xl lg:text-5xl text-[#1C1F35]">
            Frequently Asked Questions
          </h3>
          {FAQs.map((faq) => (
            <FAQitem question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="h-screen sm:h-vh-75 lg:h-auto w-full lg:w-1/2">
          <div className="relative w-full flex items-start">
            <img
              src={`/Assets/faq-${isTrucker ? "trucker" : "shipper"}.png`}
              className="w-full"
            />
            <div className="absolute top-[80%] left-[10%] lg:top-[25%] lg:left-[-10%] w-4/5 lg:w-1/2 bg-[#2A4F6D] p-14 lg:p-10 flex flex-col items-start space-y-6">
              <div className="bg-black border-l-4 border-l-[#f99d5e] w-28 px-2">
                <span className="font-rubik font-normal text-white text-sm">
                  Let's Talk
                </span>
              </div>
              <p className="font-rubik font-medium text-xl text-white">
                You need any help? get free consultation
              </p>
              <div className="w-full flex justify-start space-x-3 items-center">
                <div className="w-16 h-16 rounded-full bg-[#F79633] cursor-pointer flex justify-center items-center">
                  <IoCallOutline className="text-xl" />
                </div>
                <div className="flex flex-col items-start justify-between">
                  <p className="font-krub font-medium text-base text-white">
                    Have Any Questions
                  </p>
                  <p className="font-krub font-medium text-base text-white">
                    (00) 112 365 489
                  </p>
                </div>
              </div>
              <div>
                <button className="py-3 px-4 bg-[#F79633] font-krub font-semibold text-base text-[#23212A]">
                  Contact Us
                </button>
              </div>
            </div>

            {/* <div className="w-[90%] lg:w-1/3 flex lg:hidden flex-col items-start space-y-4 md:mt-[50%] mt-[98%] px-2">
              <div className="bg-[#E8E8E880] border-l-4 border-l-[#f99d5e] w-28 px-2">
                <span className="font-rubik font-normal text-[#2A4F6D] text-sm">
                  FAQ
                </span>
              </div>
              <h3 className="font-rubik font-semibold text-2xl lg:text-5xl text-[#1C1F35]">
                Frequently Asked Questions
              </h3>
              {FAQs.map((faq) => (
                <FAQitem question={faq.question} answer={faq.answer} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsection;
