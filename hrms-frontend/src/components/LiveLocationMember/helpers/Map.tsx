import { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  Polyline,
  DirectionsRenderer,
} from "@react-google-maps/api";
import useGoogleMap from "../../../hooks/useGoogleMap";

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
  const [directionsRenderer, setDirectionsRenderer] = useState<any>(null);
  const [directionsService, setDirectionsService] = useState<any>(null);
  const [directionsResponse, setDirectionsResponse] = useState<any>(null);

  useEffect(() => {
    if (data?.length > 0) {
      setCenter({
        lat: Number(data[0].lat),
        lng: Number(data[0].lng),
      });
      if (data.length > 1) {
        directionsService.route(
          {
            origin: data?.[0],
            destination: data?.[data?.length - 1],
            waypoints: data
              ?.map((item: any) => ({
                location: item,
                stopover: true,
              }))
              ?.slice(1, data?.length - 1),
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result: any, status: any) => {
            if (status === google.maps.DirectionsStatus.OK) {
              setDirectionsResponse(result);
              directionsRenderer?.setDirections(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      }
    } else {
      setCenter(initialLocation);
      setDirectionsResponse(null);
      directionsRenderer?.setDirections({ routes: [] });
    }

    return () => clearTimeout(timeoutref.current);
  }, [data]);

  const handleLoaded = (mapInstance: any) => {
    const directionsRendererInstance = new google.maps.DirectionsRenderer();
    const directionsServiceInstance = new google.maps.DirectionsService();

    directionsRendererInstance.setMap(mapInstance);
    // setMap(mapInstance);
    setDirectionsRenderer(directionsRendererInstance);
    setDirectionsService(directionsServiceInstance);
    timeoutref.current = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
  };

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={handleLoaded}
      >
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
        {mapLoaded && data.length == 1 ? (
          <Marker
            position={{
              lat: Number(data?.[0]?.lat),
              lng: Number(data?.[0]?.lng),
            }}
          />
        ) : (
          ""
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default Map;
