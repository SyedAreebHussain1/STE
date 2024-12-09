import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
  useJsApiLoader,
} from "@react-google-maps/api";
import useGoogleMap from "../../hooks/useGoogleMap";
import { MdMyLocation } from "react-icons/md";
import { Tooltip } from "antd";

interface Location {
  lat: number;
  lng: number;
  time: Date;
}

interface Place {
  address: string;
  city: string;
  country?: string;
}

interface MapsLocationProps {
  markers: Location[];
  setMarkers: React.Dispatch<React.SetStateAction<Location[]>>;
  setSelectedPlace: React.Dispatch<React.SetStateAction<Place>>;
  hideSearch?: boolean | undefined;
  notClickable?: boolean | undefined;
}

const containerStyle = {
  width: "100%",
  height: "310px",
};

const centerDefault = {
  lat: 24.860966,
  lng: 66.990501,
};

const MapsLocation: React.FC<MapsLocationProps> = ({
  markers,
  setMarkers,
  setSelectedPlace,
  hideSearch,
  notClickable,
}) => {
  const [searchBox, setSearchBox] = useState<any>(null); // Change the type accordingly
  const [isLoaded] = useGoogleMap();
  const [center, setCenter] = useState(centerDefault);
  const timeoutref: any = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const onMapClick = React.useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setMarkers((current) => [
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
                country: getCountryFromGeocode(results[0]),
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
  const handleLoaded = () => {
    timeoutref.current = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
  };

  const getCityFromGeocode = (geocode: google.maps.GeocoderResult) => {
    for (let component of geocode.address_components) {
      if (component.types.includes("locality")) {
        return component.long_name;
      }
    }
    return "";
  };

  function getCountryFromGeocode(geocode: any) {
    for (let component of geocode.address_components) {
      for (let type of component.types) {
        if (type === "country") {
          return component.long_name;
        }
      }
    }
    return "";
  }
  const onLoad = (ref: any) => setSearchBox(ref); // Change the type accordingly

  const onPlacesChanged = () => {
    const results = searchBox.getPlaces();
    setSelectedPlace({
      address: results[0].formatted_address,
      city: getCityFromGeocode(results[0]),
      country: getCountryFromGeocode(results[0]),
    });

    setMarkers((current) => [
      {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
        time: new Date(),
      },
    ]);
  };

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setMarkers([{ lat: latitude, lng: longitude, time: new Date() }]);
          setCenter({
            lat: latitude,
            lng: longitude,
          });
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode(
            { location: { lat: latitude, lng: longitude } },
            (results, status) => {
              if (status === "OK" && results) {
                if (results[0]) {
                  setSelectedPlace({
                    address: results[0].formatted_address,
                    city: getCityFromGeocode(results[0]),
                    country: getCountryFromGeocode(results[0]),
                  });
                } else {
                  window.alert("No results found");
                }
              } else {
                window.alert("Geocoder failed due to: " + status);
              }
            }
          );
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (markers?.[0]?.lat && markers?.[0]?.lng)
      setCenter({ lat: markers?.[0].lat, lng: markers?.[0]?.lng });
    return () => clearTimeout(timeoutref.current);
  }, [markers]);

  return isLoaded ? (
    <div className="w-full h-[60%]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={handleLoaded}
        onClick={!notClickable ? onMapClick : () => {}}
        options={{
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: 23.0,
          },
        }}
      >
        {!hideSearch && (
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Enter the Location..."
              className="border-[1px] border-transparent w-[240px] h-[32px] py-[0] px-[12px] rounded-[3px] text-[14px] shadow-[0 2px 6px rgba(0, 0, 0, 0.3)] outline-none absolute text-ellipsis left-[50%] ml-[-120px] box-border"
            />
          </StandaloneSearchBox>
        )}

        <Tooltip title="Select Current Location">
          <button
            disabled={notClickable}
            onClick={(e: any) => {
              e.preventDefault();
              getCurrentLocation();
            }}
            className="absolute top-4 right-4 bg-white w-9 h-9 flex justify-center items-center rounded-full shadow-md"
          >
            <MdMyLocation fontSize={18} />
          </button>
        </Tooltip>
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
