import React, { useRef, useState } from "react";
import { GoogleMap, Marker, StandaloneSearchBox } from "@react-google-maps/api";
import useGoogleMap from "../../../hooks/useGoogleMap";

interface Location {
  lat: number;
  lng: number;
  time: Date;
}

interface Place {
  address: string;
  city: string;
}

interface MapsLocationProps {
  markers: Location[];
  setMarkers: React.Dispatch<React.SetStateAction<Location[]>>;
  setSelectedPlace: React.Dispatch<React.SetStateAction<Place>>;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 24.860966,
  lng: 66.990501,
};

const MapsLocation: React.FC<MapsLocationProps> = ({
  markers,
  setMarkers,
  setSelectedPlace,
}) => {
  const [searchBox, setSearchBox] = useState<any>(null); // Change the type accordingly
  const [isLoaded] = useGoogleMap();
  const timeoutref: any = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const handleLoaded = () => {
    timeoutref.current = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
  };

  const onMapClick = React.useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setMarkers(() => [
        {
          lat: event && event.latLng ? event.latLng.lat() : 0,
          lng: event && event.latLng ? event.latLng.lng() : 0,
          time: new Date(),
        },
      ]);

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { location: { lat: event.latLng.lat(), lng: event.latLng.lng() } },
        (results, status) => {
          if (status === "OK" && results) {
            if (results[0]) {
              setSelectedPlace({
                address: results[0].formatted_address,
                city: getCityFromGeocode(results[0]),
              });
            } else {
              window.alert("No results found");
            }
          } else {
            window.alert("Geocoder failed due to: " + status);
          }
        }
      );
    }
  }, []);

  const getCityFromGeocode = (geocode: google.maps.GeocoderResult) => {
    for (let component of geocode.address_components) {
      if (component.types.includes("locality")) {
        return component.long_name;
      }
    }
    return "";
  };

  const onLoad = (ref: any) => setSearchBox(ref); // Change the type accordingly

  const onPlacesChanged = () => {
    const results = searchBox.getPlaces();
    setSelectedPlace({
      address: results[0].formatted_address,
      city: getCityFromGeocode(results[0]),
    });

    setMarkers(() => [
      {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
        time: new Date(),
      },
    ]);
  };

  return isLoaded ? (
    <div className="w-full h-[100%]">
      <GoogleMap
        onLoad={handleLoaded}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onClick={onMapClick}
        options={{
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: 23.0,
          },
        }}
      >
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Enter the Location..."
            className="border-[1px] border-transparent w-[240px] h-[32px] py-[0] px-[12px] rounded-[3px] text-[14px] shadow-[0 2px 6px rgba(0, 0, 0, 0.3)] outline-none absolute text-ellipsis left-[50%] ml-[-120px] box-border"
          />
        </StandaloneSearchBox>
        {mapLoaded &&
          markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapsLocation;
