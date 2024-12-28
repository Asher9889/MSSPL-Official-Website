import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { googleMapUrl } from "../../utils/links/links";


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
    googleMapsApiKey: import.meta.env.VITE_GMAP_KEY 
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = () => {
    const googleMapsURL = googleMapUrl;
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
