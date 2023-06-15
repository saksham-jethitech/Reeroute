import React from "react";
import GoogleAutocomplete from "react-google-autocomplete";

const AutocompleteInput = ({ setCity }) => {
  const handlePlaceSelected = (place) => {
    // Do something with the selected place
    // console.log("places", place.formatted_address);
    setCity(place.formatted_address);
  };

  // const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const API_KEY = "AIzaSyAbgSWBi_qaOWO8YWL8lNSwk8JPIz8Nb9w";

  return (
    <GoogleAutocomplete
      apiKey={API_KEY}
      onPlaceSelected={handlePlaceSelected}
      className="outline-none border border-[#00000033] py-2 px-1 rounded-md"
    />
  );
};

export default AutocompleteInput;
