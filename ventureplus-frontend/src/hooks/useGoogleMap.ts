import { Libraries, useJsApiLoader } from "@react-google-maps/api";
const libraries: Libraries = ["places"];
const useGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY || "",
    libraries: libraries,
  });
  return [isLoaded];
};
export default useGoogleMap;
