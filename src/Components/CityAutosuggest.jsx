import React, { useState } from "react";
import { GoogleApiWrapper } from "google-maps-react";

// Your Google Maps API key
const apiKey = "YOUR_API_KEY";

function CityAutosuggest({ google, city, setCity }) {
  const [suggestions, setSuggestions] = useState([]);

  const handlePlaceSelect = (place) => {
    // Do something with the selected place
    console.log(place);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCity(inputValue);

    if (inputValue) {
      const autocompleteService = new google.maps.places.AutocompleteService();

      autocompleteService.getPlacePredictions(
        {
          input: inputValue,
          types: ["(cities)"],
        },
        (predictions) => {
          if (predictions) {
            setSuggestions(predictions);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter city"
        id="city"
        className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
        value={city}
      />
      <ul>
        {suggestions.map((prediction) => (
          <li
            key={prediction.place_id}
            onClick={() => handlePlaceSelect(prediction)}
          >
            {prediction.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey,
})(CityAutosuggest);
