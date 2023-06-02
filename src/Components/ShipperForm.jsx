import React, { useState } from "react";
import SuccessMessage from "./FormMessage/SuccessMessage";
import FailMessage from "./FormMessage/FailMessage";
import FirstStep from "./ShipperFormPages/FirstStep";
import SecondStep from "./ShipperFormPages/SecondStep";
import axios from "axios";
import { BASE_URL } from "../Constants";

const ShipperForm = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [emptyFromCityField, setEmptyFromCityField] = useState(false);
  const [emptyToCityField, setEmptyToCityField] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [showSecondStep, setShowSecondStep] = useState(false);

  const [materialWeight, setMaterialWeight] = useState("");
  const [emptyMaterialWeightField, setEmptyMaterialWeightField] =
    useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [emptyVehicleTypeField, setEmpltyVehicleTypeField] = useState(false);
  const [truckLength, setTruckLength] = useState("");
  const [emptyTruckLengthField, setEmptyTruckLengthField] = useState(false);
  const [truckHeight, setTruckHeight] = useState("");
  const [emptyTruckHeightField, setEmptyTruckHeightField] = useState(false);

  const handleFirstStepSubmit = () => {
    setEmptyFromCityField(false);
    setEmptyToCityField(false);

    if (fromCity.length == 0) {
      setEmptyFromCityField(true);
    }

    if (toCity.length == 0) {
      setEmptyToCityField(true);
    }

    if (fromCity.length == 0 || toCity.length == 0) return;

    setShowSecondStep(true);

    // setFromCity("");
    // setToCity("");
    // setShowSuccessMessage(true);

    // setShowFailMessage(true);
  };

  const handleSecondStepSubmit = async () => {
    setEmptyMaterialWeightField(false);
    setEmpltyVehicleTypeField(false);
    setEmptyTruckLengthField(false);
    setEmptyTruckHeightField(false);

    if (materialWeight.length == 0) {
      setEmptyMaterialWeightField(true);
    }

    if (vehicleType.length == 0) {
      setEmpltyVehicleTypeField(true);
    }

    if (truckLength.length == 0) {
      setEmptyTruckLengthField(true);
    }

    if (truckHeight.length == 0) {
      setEmptyTruckHeightField(true);
    }

    if (
      materialWeight.length == 0 ||
      vehicleType.length == 0 ||
      truckLength.length == 0 ||
      truckHeight.length == 0
    )
      return;

    // setShowSecondStep(true);

    await axios
      .post(`${BASE_URL}/email/shipper`, {
        fromCity,
        toCity,
        materialWeight,
        vehicleType,
        truckLength,
        truckHeight,
      })
      .then((res) => {
        setShowSuccessMessage(true);
        setShowSecondStep(false);
        setFromCity("");
        setToCity("");
        setMaterialWeight("");
        setVehicleType("");
        setTruckLength("");
        setTruckHeight("");
      })
      .catch((error) => {
        setShowFailMessage(true);
      });

    // setShowSuccessMessage(true);

    // setFromCity("");
    // setToCity("");
    // setShowSuccessMessage(true);

    // setShowFailMessage(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessMessage(false);
    setShowSecondStep(false);
    // setFromCity("");
    // setToCity("");
    // setMaterialWeight("");
    // setVehicleType("");
    // setTruckLength("");
    // setTruckHeight("");
  };

  const handleFailClose = () => {
    setShowFailMessage(false);
    setShowSecondStep(true);
  };

  return (
    <div className="bg-white rounded-lg p-5 w-[80%] lg:w-[30%] min-h-[60%] ">
      {showSuccessMessage ? (
        <SuccessMessage setOpen={handleSuccessClose} />
      ) : showFailMessage ? (
        <FailMessage setOpen={handleFailClose} />
      ) : showSecondStep ? (
        <SecondStep
          setShowSecondStep={setShowSecondStep}
          fromCity={fromCity}
          toCity={toCity}
          setShowSuccessMessage={setShowSuccessMessage}
          setShowFailMessage={setShowFailMessage}
          materialWeight={materialWeight}
          setMaterialWeight={setMaterialWeight}
          emptyMaterialWeightField={emptyMaterialWeightField}
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
          emptyVehicleTypeField={emptyVehicleTypeField}
          truckLength={truckLength}
          setTruckLength={setTruckLength}
          emptyTruckLengthField={emptyTruckLengthField}
          truckHeight={truckHeight}
          setTruckHeight={setTruckHeight}
          emptyTruckHeightField={emptyTruckHeightField}
          handleSubmit={handleSecondStepSubmit}
        />
      ) : (
        <FirstStep
          fromCity={fromCity}
          toCity={toCity}
          emptyFromCityField={emptyFromCityField}
          emptyToCityField={emptyToCityField}
          setShowSecondStep={setShowSecondStep}
          setFromCity={setFromCity}
          setToCity={setToCity}
          handleSubmit={handleFirstStepSubmit}
        />
      )}
    </div>
  );
};

export default ShipperForm;
