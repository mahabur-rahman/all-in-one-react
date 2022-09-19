import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 23.810331,
  lng: 90.412521,
};

function GoogleMapFirst() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCkkQi739AtYtcy-BhqDbXl2lZDTG_ArIk",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapFirst);
