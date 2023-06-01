import React, { useState } from "react";
import SuccessMessage from "./FormMessage/SuccessMessage";
import FailMessage from "./FormMessage/FailMessage";

const TruckerForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [numberOfTrucks, setNumberOfTrucks] = useState("");
  const [city, setCity] = useState("");
  const [emptyMobileNumberField, setEmptyMobileNumberField] = useState(false);
  const [emptyNumberOfTrucksField, setEmptyNumberOfTrucksField] =
    useState(false);
  const [emptyCityField, setEmpltyCityField] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  const handleSubmit = () => {
    setEmpltyCityField(false);
    setEmptyMobileNumberField(false);
    setEmptyNumberOfTrucksField(false);

    if (mobileNumber.length == 0) {
      setEmptyMobileNumberField(true);
    }

    if (numberOfTrucks.length == 0) {
      setEmptyNumberOfTrucksField(true);
    }

    if (city.length == 0) {
      setEmpltyCityField(true);
    }

    if (
      mobileNumber.length == 0 ||
      numberOfTrucks.length == 0 ||
      city.length == 0
    )
      return;

    setMobileNumber("");
    setNumberOfTrucks("");
    setCity("");
    // setShowSuccessMessage(true);

    setShowFailMessage(true);
  };

  return (
    <div className="bg-white rounded-lg p-5 w-[80%] lg:w-1/3 ">
      {showSuccessMessage ? (
        <SuccessMessage setOpen={setShowSuccessMessage} />
      ) : showFailMessage ? (
        <FailMessage setOpen={setShowFailMessage} />
      ) : (
        <div className="flex flex-col  items-center space-y-5">
          <h3 className="font-rubik font-medium text-2xl">Onboard Yourself!</h3>
          <div className="flex flex-col w-full space-y-2">
            <label
              for="mobileNumber"
              className="font-rubik font-normal text-sm"
            >
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              type="text"
              placeholder="Enter Mobile No."
              className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            {emptyMobileNumberField && (
              <p className="font-normal text-[#EA1414] font-rubik text-xs">
                This field is required!
              </p>
            )}
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label
              for="truckNumbers"
              className="font-rubik font-normal text-sm"
            >
              No. of Trucks
            </label>
            <input
              id="truckNumbers"
              type="text"
              placeholder="Enter No."
              className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
              value={numberOfTrucks}
              onChange={(e) => setNumberOfTrucks(e.target.value)}
            />
            {emptyNumberOfTrucksField && (
              <p className="font-normal text-[#EA1414] font-rubik text-xs">
                This field is required!
              </p>
            )}
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label for="city" className="font-rubik font-normal text-sm">
              City
            </label>
            <select
              id="city"
              className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="" hidden disabled></option>
              <option>Delhi</option>
              <option>Jaipur</option>
              <option>Manali</option>
              <option>Dehradun</option>
              <option>Lucknow</option>
            </select>
            {emptyCityField && (
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
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TruckerForm;
