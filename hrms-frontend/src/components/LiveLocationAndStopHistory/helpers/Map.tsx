import { useEffect, useRef, useState } from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import useGoogleMap from "../../../hooks/useGoogleMap";
import { FaS } from "react-icons/fa6";

const containerStyle = {
  width: "100%",
  height: window.innerWidth < 992 ? "400px" : "100%",
};

const initialLocation = {
  lat: 24.85015291459445,
  lng: 67.06646919250488,
};

function Map({ data }: { data?: any }) {
  const [isLoaded] = useGoogleMap();
  const [center, setCenter] = useState(initialLocation);
  const [mapLoaded, setMapLoaded] = useState(false);
  const timeoutref: any = useRef();
  useEffect(() => {
    if (data) {
      setCenter({
        lat: Number(data?.latitude),
        lng: Number(data?.longitude),
      });
    }
    return () => clearTimeout(timeoutref.current);
  }, [data]);

  const handleLoaded = () => {
    timeoutref.current = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={handleLoaded}
    >
      {mapLoaded && (
        <Marker
          position={{
            lat: Number(center.lat),
            lng: Number(center.lng),
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
