import React from "react";
import Footer from "./Components/Footer";

const PrivacyPolicy = () => {
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
              <p className=" font-rubik font-normal text-sm text-white">
                Privacy Policy
              </p>
            </div>
            <p className="font-rubik font-bold w-1/2 lg:w-auto text-5xl md:text-6xl text-white">
              Privacy Policy
            </p>
          </div>
        </div>
        {/* <ContactUsAdditionalDetail isTrucker={isTrucker} /> */}
      </div>

      <div className="min-h-screen py-16 flex justify-center">
        <div className="flex flex-col w-[70%] space-y-5">
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            At Reeroute, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard the information you provide when
            accessing our logistics services. By using our services, you consent
            to the practices described in this policy.
          </p>
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Information We Collect
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. Personal Information: We may collect personal information,
                  such as your name, contact details, and shipping addresses, to
                  provide our logistics services and fulfill your requests.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. Usage Information: We gather non-personal information,
                  including your IP address, browser type, and device
                  information, to analyze trends, administer our website, and
                  improve user experience.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Use of Information
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. Service Delivery: We use the information collected to
                  provide and improve our logistics services, process shipments,
                  and communicate with you regarding your orders.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. Internal Operations: We may use your information for
                  internal purposes such as data analysis, auditing, and
                  enhancing our services' effectiveness.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  c. Communication: We may contact you to provide updates,
                  respond to inquiries, or deliver important notifications
                  related to your shipments or our services.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  d. Legal Compliance: We may disclose your information if
                  required by law, to protect our rights, or to comply with
                  legal processes.
                </li>
              </ol>
            </li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Information Sharing
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. Third-Party Service Providers: We may engage trusted
                  third-party service providers to assist in delivering our
                  logistics services. These providers are bound by
                  confidentiality agreements and are only authorized to use your
                  information for the intended purpose.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. Business Transfers: In the event of a merger, acquisition,
                  or sale of assets, your information may be transferred to the
                  acquiring entity, subject to applicable privacy laws.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  c. Consent: We will obtain your consent before sharing your
                  information with third parties for purposes other than those
                  outlined in this policy.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Data Security
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. We implement industry-standard security measures to protect
                  your information from unauthorized access, disclosure,
                  alteration, or destruction.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. However, no method of transmission over the internet or
                  electronic storage is 100% secure. While we strive to protect
                  your data, we cannot guarantee absolute security.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Data Retention
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. We retain your personal information for as long as
                  necessary to fulfill the purposes outlined in this policy,
                  unless a longer retention period is required or permitted by
                  law.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Your Rights and Choices
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. You have the right to access, update, correct, or delete
                  your personal information. You may also opt-out of receiving
                  marketing communications from us.
                </li>
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  b. To exercise your rights or for any privacy-related
                  inquiries, please contact us using the provided contact
                  information.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Children's Privacy
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. Our services are not intended for individuals under the age
                  of 18. We do not knowingly collect personal information from
                  children. If we become aware that we have inadvertently
                  collected personal information from a child, we will take
                  steps to delete it.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              External Links
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. Our website may contain links to external sites that are
                  not governed by this Privacy Policy. We are not responsible
                  for the privacy practices or content of such third-party
                  sites.
                </li>
              </ol>
            </li>

            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
              Policy Updates
              <ol className="list-none ml-5">
                <li className="font-rubik font-normal text-xl text-[#2A4F6D]">
                  a. We may update this Privacy Policy from time to time. Any
                  changes will be effective upon posting the revised policy on
                  our website. We encourage you to review this policy
                  periodically.
                </li>
              </ol>
            </li>
          </ol>

          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            If you have any questions or concerns regarding our Privacy Policy,
            please contact us using the provided contact information. By using
            our logistics services, you agree to the terms of this Privacy
            Policy and consent to the collection and use of your information as
            described herein.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
