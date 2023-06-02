import React from "react";

const SuccessMessage = ({ setOpen }) => {
  return (
    <div className="flex flex-col  items-center justify-center space-y-5 py-16">
      <img src="/Assets/Success-icon.png" />
      <p className="font-rubik font-medium text-2xl">Submitted Successfully</p>
      <p className="font-rubik font-normal text-sm text-[#00000080]">
        Our executive will get in touch with you at the earliest.
      </p>
      <div className="w-full ">
        <button
          className="w-full  bg-[#f79633] py-4 font-krub text-sm font-semibold"
          onClick={setOpen}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
