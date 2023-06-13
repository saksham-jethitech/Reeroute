import React, { useState } from "react";
import { GoogleMap, useGoogleMaps } from "google-map-react";
import GoogleMapReact from "google-map-react";

const MapComponent = ({ city, setCity }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const [placeSuggestions, setPlaceSuggestions] = useState([]);

  const handlePlaceChange = (e) => {
    const inputValue = e.target.value;

    setCity(inputValue);

    const service = new window.google.maps.places.AutocompleteService();

    service.getPlacePredictions(
      { input: inputValue },
      (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaceSuggestions(predictions);
        }
      }
    );
  };

  const handlePlaceSelect = (placeId) => {
    const service = new window.google.maps.places.PlacesService();

    service.getDetails({ placeId }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSelectedPlace(place);
        console.log(place);
        setCity(place);
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={handlePlaceChange}
        className="outline-none border border-[#00000033] py-2 px-1 rounded-md w-full"
        value={city}
      />
      <ul>
        {placeSuggestions.map((prediction) => (
          <li
            key={prediction.place_id}
            onClick={() => {
              // console.log(prediction.place_id);
              handlePlaceSelect(prediction.place_id);
            }}
          >
            {prediction.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapComponent;
