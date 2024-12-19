import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};

// Set the map center
const center = {
    lat: 26.472669128879893, 
    lng: 80.32395234500306, 
};


/* eslint-disable */
const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GMAP_KEY // "AIzaSyD7XC0se2i__i-6ULWSeVn1uMqIS5QGnRg", // Replace with your actual API key
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = () => {
    const googleMapsURL = `https://www.google.com/maps/place/Multifacet+Software+Systems+Pvt+Ltd/@26.4726595,80.3236151,49m/data=!3m1!1e3!4m6!3m5!1s0x399c3880bcee05c7:0xd7ffc1af02582e8c!8m2!3d26.4726406!4d80.3239828!16s%2Fg%2F11fy4v6lrc?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D`;
    window.open(googleMapsURL, "_blank");
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20} // Adjust this value for desired zoom level
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Marker to display location */}
      <Marker position={center} onClick={()=> handleMarkerClick()} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapComponent;
