import React from "react";

const FirstStep = ({
  fromCity,
  toCity,
  setFromCity,
  setToCity,
  emptyFromCityField,
  emptyToCityField,
  setShowSecondStep,
  handleSubmit,
}) => {
  //   const handleSubmit = () => {

  //     setShowSecondStep(true);
  //   };

  return (
    <div className="flex flex-col items-center space-y-10 ">
      <h3 className="font-rubik font-medium text-2xl">Book Your Truck</h3>
      <div className="flex flex-col w-full space-y-2">
        <label for="fromCity" className="font-rubik font-normal text-sm">
          From
        </label>
        <input
          id="fromCity"
          type="text"
          placeholder="Enter Origin City"
          className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
        />
        {emptyFromCityField && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            This field is required!
          </p>
        )}
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label for="toCity" className="font-rubik font-normal text-sm">
          To
        </label>
        <input
          id="toCity"
          type="text"
          placeholder="Enter Destination City"
          className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
        />
        {emptyToCityField && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            This field is required!
          </p>
        )}
      </div>
      <div className="w-full ">
        <button
          className="w-full  bg-[#f79633] py-4 font-krub text-sm font-semibold"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FirstStep;
