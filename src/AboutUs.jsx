import React, { useState } from "react";
import Footer from "./Components/Footer";
import BottomBannerSection from "./Components/HomePageComponents/BottomBannerSection";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ExpertProfile from "./Components/ExpertProfile";

const expert = [
  {
    imageName: "expert-1",
    name: `Jessca Arow`,
    role: `Desginer`,
    isTwitter: true,
    isFacebook: true,
    isInstagram: true,
    isLinkedin: false,
  },
  {
    imageName: "expert-2",
    name: `Kathleen Smith`,
    role: `Desginer`,
    isLinkedin: true,
    isTwitter: true,
    isFacebook: true,
    isInstagram: true,
  },
  {
    imageName: "expert-3",
    name: `Rebecca Tylor`,
    role: `Desginer`,
    isLinkedin: false,
    isTwitter: false,
    isFacebook: true,
    isInstagram: true,
  },
];

const AboutUs = () => {
  const [isOurMissionActive, setIsOurMissionActive] = useState(true);
  const [activeExpertProfile, setActiveExpertProfile] = useState(0);

  const handleNext = () => {
    setActiveExpertProfile((prevCount) => (prevCount + 1) % 3);
  };

  const handlePrevious = () => {
    setActiveExpertProfile((prevCount) => (prevCount + 2) % 3);
  };

  return (
    <>
      <div className="w-full h-auto">
        <div className="relative h-1/2vh">
          <img
            src={`/Assets/AboutBackground.png`}
            className="w-full h-full object-cover inset-0 hidden lg:block"
          />
          <img
            src={`/Assets/AboutBackgroundMobile.png`}
            className="w-full h-full object-cover inset-0 lg:hidden"
          />
          <div
            className={`absolute inset-0 bg-black opacity-60 lg:opacity-70 `}
          ></div>
          <div className="absolute inset-0 flex flex-col py-2 space-y-16 lg:space-y-0 justify-center lg:flex-row items-center ">
            <div className="flex flex-col w-full px-4 lg:px-0 lg:w-[70%] space-y-3">
              <div className="px-2 w-fit  border-l-4 border-l-[#FFB629] bg-[#041C3780]">
                <p className=" font-rubik font-normal text-sm text-white">
                  About Us
                </p>
              </div>
              <p className="font-rubik font-bold w-1/2 lg:w-auto text-5xl md:text-6xl text-white">
                About ReeRoute
              </p>
            </div>
          </div>
          {/* <ContactUsAdditionalDetail isTrucker={isTrucker} /> */}
        </div>

        <div className="flex flex-col w-full bg-[#F4F4F4] py-16 px-3 lg:px-10 items-center space-y-20">
          <div className="w-full flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0">
            <div className="flex flex-col items-start w-full lg:hidden space-y-6 px-5">
              <div className="px-2 w-fit  border-l-4 border-l-[#FFB629] bg-[#041C3780]">
                <p className=" font-rubik font-normal text-sm text-white">
                  About Us
                </p>
              </div>
              <h3 className="font-rubik text-xl font-semibold text-[#1C1F35]">
                Our Company Overview
              </h3>
              <p className="font-krub font-medium text-base text-[#666C89]">
                Welcome to ReeRoute! We specialize in providing reliable and
                trustworthy services for full truck loads. Our primary focus is
                on ensuring transparency in every aspect of our business
                operations. With us, you can book trucks with confidence,
                knowing that your cargo will be handled with utmost care and
                delivered on time.{" "}
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row  items-center justify-center relative">
              <img
                src="/Assets/about-image.png"
                className="w-[90%] lg:w-[80%]"
              />
              <div className="absolute top-[75%] left-[78%] lg:top-[70%] lg:left-[70%] w-20 h-20 lg:w-48 lg:h-48 bg-white">
                <img src="/Assets/ambitious-businessman.png" />
              </div>
            </div>
            <div className="flex flex-col items-start w-full lg:w-1/2 space-y-6 px-5  lg:px-12">
              <div className="px-2 w-fit  border-l-4 border-l-[#FFB629] bg-[#041C3780] hidden lg:block">
                <p className=" font-rubik font-normal text-sm text-white">
                  About Us
                </p>
              </div>
              <h3 className="font-rubik text-4xl font-semibold text-[#1C1F35] hidden lg:block">
                About Reeroute
              </h3>
              <p className="font-krub font-medium text-base text-[#666C89] hidden lg:block">
                Welcome to ReeRoute! We specialize in providing reliable and
                trustworthy services for full truck loads. Our primary focus is
                on ensuring transparency in every aspect of our business
                operations. With us, you can book trucks with confidence,
                knowing that your cargo will be handled with utmost care and
                delivered on time.{" "}
              </p>
              <div className="flex items-center space-x-5">
                <button
                  className={`py-3 px-5 font-krub font-semibold text-lg ${
                    isOurMissionActive ? "bg-[#F79633]" : "bg-[#F4F4F4]"
                  } `}
                  onClick={() => setIsOurMissionActive(true)}
                >
                  Our Mission
                </button>
                <button
                  className={`py-3 px-5 font-krub font-semibold text-lg ${
                    !isOurMissionActive ? "bg-[#F79633]" : "bg-[#F4F4F4]"
                  } `}
                  onClick={() => setIsOurMissionActive(false)}
                >
                  Our Vision
                </button>
              </div>
              {isOurMissionActive ? (
                <p className="font-krub font-medium text-base text-[#666C89]">
                  To provide end-to-end logistics solutions that empower
                  businesses to thrive in today's marketplace. We deliver
                  tailored, reliable, and cost-effective services. We optimize
                  supply chains and foster long-term relationships. Through
                  innovation, expertise, and strategic partnerships, we aim to
                  be the preferred logistics partner driving growth and success
                  for businesses in India.
                </p>
              ) : (
                <p className="font-krub font-medium text-base text-[#666C89]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus cum nam sunt odio expedita error, minima quia,
                  nisi beatae necessitatibus dolores neque vel cumque quam
                  obcaecati iure possimus! Optio inventore quos deleniti ipsum!
                  Quidem maiores modi doloribus earum provident! Repudiandae
                  quos error, omnis sit dicta magnam impedit fuga quis tenetur.
                </p>
              )}
              <div>
                <button className="py-3 px-5 font-krub font-semibold text-base text-white bg-[#2a4f6d]">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="w-[85%] lg:w-4/5 flex flex-col items-start space-y-7">
            <div className="lg:ml-8 px-2 w-fit  border-l-4 border-l-[#FFB629] bg-[#041C3780]">
              <p className=" font-rubik font-normal text-sm text-white">
                What We Do
              </p>
            </div>
            <h3 className="lg:ml-8 font-rubik text-4xl font-semibold text-[#1C1F35]">
              Our Logistics Services
            </h3>
            <div className="flex flex-col lg:flex-row flex-wrap pt-5 justify-between">
              <div className="flex flex-col w-full lg:w-[23%] space-y-3 items-start my-9 lg:mx-9">
                <img src="/Assets/first-icon.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#1C1F35]">
                  Warehousing and Distribution
                </h4>
                <p className="font-krub font-medium text-base text-[#666C89]">
                  Our state-of-the-art warehouses and efficient distribution
                  network enable timely delivery of your products across India.
                </p>
              </div>
              <div className="flex flex-col w-full lg:w-[23%] space-y-3 items-start my-9 lg:mx-9">
                <img src="/Assets/second-icon.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#1C1F35]">
                  Transportation Services
                </h4>
                <p className="font-krub font-medium text-base text-[#666C89]">
                  We provide reliable transportation services, ensuring safe and
                  timely movement of goods through road, rail, and air.
                </p>
              </div>
              <div className="flex flex-col w-full lg:w-[23%] space-y-3 items-start my-9 lg:mx-9">
                <img src="/Assets/third-icon.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#1C1F35]">
                  Supply Chain Management
                </h4>
                <p className="font-krub font-medium text-base text-[#666C89]">
                  Our end-to-end supply chain management solutions reduce lead
                  times, and enhance overall operational efficiency.
                </p>
              </div>
              <div className="flex flex-col w-full lg:w-[23%] space-y-3 items-start my-9 lg:mx-9">
                <img src="/Assets/fourth-icon.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#1C1F35]">
                  Customs Clearance
                </h4>
                <p className="font-krub font-medium text-base text-[#666C89]">
                  Our experienced team handles all customs clearance procedures,
                  ensuring smooth and hassle-free import and export processes.
                </p>
              </div>
              <div className="flex flex-col w-full lg:w-[23%] space-y-3 items-start my-9 lg:mx-9">
                <img src="/Assets/fifth-icon.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#1C1F35]">
                  Value-Added Services
                </h4>
                <p className="font-krub font-medium text-base text-[#666C89]">
                  From packaging and labeling to quality control and reverse
                  logistics, we provide a range of value-added services to meet
                  your specific requirements.
                </p>
              </div>
              <div className="flex flex-col w-full lg:w-[23%] space-y-3 items-start my-9 lg:mx-9">
                <img src="/Assets/sixth-icon.png" />
                <h4 className="font-rubik font-normal text-2xl text-[#1C1F35]">
                  Timely Delivery
                </h4>
                <p className="font-krub font-medium text-base text-[#666C89]">
                  We excel in timely delivery, ensuring your goods reach their
                  destination on schedule.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="py-3 px-8 font-krub font-semibold text-base text-white bg-[#2a4f6d]">
                More Works
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full bg-white pt-16 pb-16 lg:pb-36 px-2 lg:px-10 items-center space-y-20">
          <div className="w-4/5 flex flex-col items-start space-y-7 ">
            <div className="px-2 w-fit  border-l-4 border-l-[#FFB629] bg-[#041C3780]">
              <p className=" font-rubik font-normal text-sm text-white">
                The Transporters
              </p>
            </div>
            <h3 className="font-rubik text-4xl font-semibold text-[#1C1F35]">
              Meet Expert Team
            </h3>

            <div className="lg:flex flex-row items-center space-x-8 w-full hidden ">
              {expert.map((person, i) => (
                <ExpertProfile
                  key={i}
                  imageName={person.imageName}
                  name={person.name}
                  role={person.role}
                  isTwitter={person.isTwitter}
                  isFacebook={person.isFacebook}
                  isInstagram={person.isInstagram}
                  isLinkedin={person.isLinkedin}
                />
              ))}
            </div>

            <div className="flex flex-col w-full lg:hidden space-y-8 items-center">
              <ExpertProfile
                imageName={expert[activeExpertProfile].imageName}
                name={expert[activeExpertProfile].name}
                role={expert[activeExpertProfile].role}
                isTwitter={expert[activeExpertProfile].isTwitter}
                isFacebook={expert[activeExpertProfile].isFacebook}
                isInstagram={expert[activeExpertProfile].isInstagram}
                isLinkedin={expert[activeExpertProfile].isLinkedin}
              />
              <div className=" items-center space-x-3 flex lg:hidden">
                <div className="w-10 h-10 rounded-full bg-[#f89b5c] flex justify-center items-center cursor-pointer">
                  <AiOutlineArrowLeft
                    className="text-[#2A4F6D]"
                    onClick={handleNext}
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#2A4F6D] flex justify-center items-center cursor-pointer">
                  <AiOutlineArrowRight
                    className="text-white"
                    onClick={handlePrevious}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <BottomBannerSection />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
