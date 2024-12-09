import { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const useGoogleMap = () => {
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });
  return [isLoaded];
};

export default useGoogleMap;
