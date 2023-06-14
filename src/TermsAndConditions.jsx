import React from "react";
import Footer from "./Components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative h-1/2vh">
        <img
          src={`/Assets/terms-and-conditions.png`}
          className="w-full h-full object-cover inset-0 hidden lg:block"
        />
        <img
          src={`/Assets/joinUsBannerMobile.png`}
          className="w-full h-full object-cover inset-0 lg:hidden"
        />
        <div className={`absolute inset-0 bg-black opacity-80 `}></div>
        <div className="absolute inset-0 flex flex-col py-2 space-y-16 lg:space-y-0 justify-center lg:flex-row items-center ">
          <div className="flex flex-col w-full px-4 lg:px-0 lg:w-[70%] space-y-3">
            <div className="px-2 w-fit  border-l-4 border-l-[#FFB629] bg-[#041C3780]">
              <p className=" font-rubik font-normal text-sm text-white">T&C</p>
            </div>
            <p className="font-rubik font-bold w-[60%] lg:w-auto text-5xl md:text-6xl text-white">
              Terms & Conditions
            </p>
          </div>
        </div>
        {/* <ContactUsAdditionalDetail isTrucker={isTrucker} /> */}
      </div>

      <div className="min-h-screen py-16 flex justify-center">
        <div className="flex flex-col w-[70%] space-y-5">
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            Welcome to Reeroute. These terms and conditions govern your use of
            our logistics services. By engaging with our services, you agree to
            comply with these terms and conditions. Please read them carefully.
          </p>
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Service Agreement
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. Our services are subject to availability and are provided
                  on a best-effort basis.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. We reserve the right to refuse service to any individual or
                  business without providing a reason.
                </li>
              </ol>
            </li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Pricing and Payment
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. The pricing for our logistics services is provided upon
                  request and is subject to change.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. Payment terms and methods will be communicated to you and
                  must be adhered to as agreed upon.
                </li>
              </ol>
            </li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Shipment Handling
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. We handle shipments with care, but we are not liable for
                  any loss or damage during transportation.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. You are responsible for ensuring that shipments comply with
                  relevant laws, regulations, and customs requirements.
                </li>
              </ol>
            </li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Delivery and Transit Times
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. We strive to provide accurate delivery estimates, but they
                  are not guaranteed.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. Transit times may vary due to factors beyond our control,
                  such as weather conditions or transportation delays.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Liability and Insurance
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. Our liability for any loss or damage is limited as per the
                  terms of our insurance coverage.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. It is recommended that you obtain additional insurance to
                  cover the full value of your shipments.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Confidentiality
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. Any information shared with us in the course of providing
                  our services will be treated as confidential.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. We will not disclose your confidential information to third
                  parties without your consent, unless required by law.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Intellectual Property
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. All intellectual property rights related to our website,
                  services, and materials remain our property or that of our
                  licensors.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. You agree not to use, reproduce, or distribute our
                  intellectual property without prior written permission.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Termination
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. Either party may terminate the service agreement with
                  written notice.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. Termination does not relieve you of any outstanding payment
                  obligations or liabilities incurred before termination.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Governing Law and Jurisdiction
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. These terms and conditions are governed by the laws of
                  India.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. Any disputes arising from these terms and conditions will
                  be subject to the exclusive jurisdiction of the courts in
                  India.
                </li>
              </ol>
            </li>
          </ol>

          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            By engaging with our logistics services, you acknowledge and agree
            to these terms and conditions. It is your responsibility to review
            them periodically for any updates or changes. If you have any
            questions or concerns, please contact us using the provided contact
            information on our website.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
