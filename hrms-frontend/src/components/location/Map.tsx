import { useEffect, useRef, useState } from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import useGoogleMap from "../../hooks/useGoogleMap";

const initialLocation = {
  lat: 24.85015291459445,
  lng: 67.06646919250488,
};

function Map({ data }: any) {
  const [isLoaded] = useGoogleMap();
  const [center, setCenter] = useState(initialLocation);
  const timeoutref: any = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [radius, setRadius] = useState(0);

  const handleLoaded = () => {
    timeoutref.current = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
  };

  useEffect(() => {
    if (data?.lat && data?.lng) {
      setCenter({
        lat: Number(data?.lat),
        lng: Number(data?.lng),
      });
    }
    if (data?.locationRadius) {
      setRadius(data?.locationRadius * 1000);
    } else if (!data?.locationRadius) {
      setRadius(0);
    }
    return () => clearTimeout(timeoutref.current);
  }, [data]);

  return isLoaded && data ? (
    <GoogleMap
      onLoad={handleLoaded}
      mapContainerStyle={{
        width: "100%",
        height: "100%",
      }}
      center={center}
      zoom={12}
    >
      {mapLoaded ? (
        <Marker
          position={{
            lat: Number(data?.lat),
            lng: Number(data?.lng),
          }}
        />
      ) : (
        ""
      )}
      {center && radius && mapLoaded && (
        <Circle
          center={center}
          radius={radius}
          options={{
            fillColor: "#a0cacc",
            fillOpacity: 0.5,
            strokeColor: "#fff",
            strokeOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            draggable: false,
            editable: false,
            visible: true,
            zIndex: -1,
          }}
        />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
