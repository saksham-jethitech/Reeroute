import React from "react";

const FailMessage = ({ setOpen }) => {
  return (
    <div className="flex flex-col  items-center justify-center space-y-5 py-16">
      <img src="/Assets/failed.png" />
      <p className="font-rubik font-medium text-2xl">Submission Failed</p>
      <p className="font-rubik font-normal text-sm text-[#00000080]">
        lorem ipsum reason for failure
      </p>
      <div className="w-full ">
        <button
          className="w-full  bg-[#f79633] py-4 font-krub text-sm font-semibold"
          onClick={setOpen}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default FailMessage;
