import { useEffect, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import useGoogleMap from "../../../../hooks/useGoogleMap";

const containerStyle = {
  width: "100%",
  height: "310px",
};

function Map({ data }: { data?: any }) {
  const [isLoaded] = useGoogleMap();
  const [center, setCenter] = useState<any>();
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
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
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
