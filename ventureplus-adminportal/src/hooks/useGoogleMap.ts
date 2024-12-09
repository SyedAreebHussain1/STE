import { useJsApiLoader } from "@react-google-maps/api";

const useGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY || "",
    libraries: ["places"],
  });
  return [isLoaded];
};

export default useGoogleMap;
