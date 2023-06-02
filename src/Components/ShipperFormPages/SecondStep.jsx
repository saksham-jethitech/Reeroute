import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SecondStep = ({
  setShowSecondStep,
  fromCity,
  toCity,
  setShowSuccessMessage,
  setShowFailMessage,
  materialWeight,
  setMaterialWeight,
  emptyMaterialWeightField,
  vehicleType,
  setVehicleType,
  emptyVehicleTypeField,
  truckLength,
  setTruckLength,
  emptyTruckLengthField,
  truckHeight,
  setTruckHeight,
  emptyTruckHeightField,
  handleSubmit,
}) => {
  //   const handleSubmit = () => {
  //     setShowSecondStep(false);
  //     setShowSuccessMessage(true);
  //     // setShowFailMessage(true);
  //   };

  return (
    <div className="flex flex-col items-center space-y-5 ">
      <div className="flex items-center w-full space-x-9">
        <AiOutlineArrowLeft
          className="w-8 text-[#2A4F6D] cursor-pointer"
          onClick={() => setShowSecondStep(false)}
        />
        <h3 className="font-rubik font-medium text-2xl">Book Your Truck</h3>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-[#00000099] font-rubik text-base font-normal">
            From:{" "}
          </p>
          <span className="text-[#2A4F6D] font-rubik text-base font-medium">
            {fromCity}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-[#00000099] font-rubik text-base font-normal">
            To:{" "}
          </p>
          <span className="text-[#2A4F6D] font-rubik text-base font-medium">
            {toCity}
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label for="materialWeight" className="font-rubik font-normal text-sm">
          Material Weight
        </label>
        <input
          id="materialWeight"
          type="text"
          placeholder="0"
          className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
          value={materialWeight}
          onChange={(e) => setMaterialWeight(e.target.value)}
        />
        {emptyMaterialWeightField && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            This field is required!
          </p>
        )}
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label for="vehicleType" className="font-rubik font-normal text-sm">
          Vehicle Type
        </label>
        <select
          id="vehicleType"
          type="text"
          placeholder="0"
          className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="" disabled hidden>
            Select Vehicle Type
          </option>
          <option value="truck">Truck</option>
          <option value="train">Train</option>
          <option value="aeroplane">aeroplane</option>
        </select>
        {emptyVehicleTypeField && (
          <p className="font-normal text-[#EA1414] font-rubik text-xs">
            This field is required!
          </p>
        )}
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col w-2/5 space-y-2">
          <label for="truckLength" className="font-rubik font-normal text-sm">
            Truck Length
          </label>
          <select
            id="truckLength"
            className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
            value={truckLength}
            onChange={(e) => setTruckLength(e.target.value)}
          >
            <option value="" disabled hidden>
              0
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {emptyTruckLengthField && (
            <p className="font-normal text-[#EA1414] font-rubik text-xs">
              This field is required!
            </p>
          )}
        </div>
        <div className="flex flex-col w-2/5 space-y-2">
          <label for="truckHeight" className="font-rubik font-normal text-sm">
            Truck Height
          </label>
          <select
            id="truckHeight"
            className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
            value={truckHeight}
            onChange={(e) => setTruckHeight(e.target.value)}
          >
            <option value="" disabled hidden>
              0
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {emptyTruckHeightField && (
            <p className="font-normal text-[#EA1414] font-rubik text-xs">
              This field is required!
            </p>
          )}
        </div>
      </div>

      <div className="w-full ">
        <button
          className="w-full  bg-[#f79633] py-4 font-krub text-sm font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SecondStep;
