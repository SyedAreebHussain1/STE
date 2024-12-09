import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "150px",
};

const center = {
  lat: 24.860966,
  lng: 66.990501,
};

function SelectLatLongMap({ markers, setMarkers, setSelectedPlace }) {
  const [currentAddresss, setCurrentAddresss] = useState(null);

  const [searchBox, setSearchBox] = React.useState(null);
  const [libraries] = useState(["places"]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCDopm4vX7TGZNSSNb3wvfABABZRcjkS3M",
    libraries,
  });

  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { location: { lat: event.latLng.lat(), lng: event.latLng.lng() } },
      (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            setSelectedPlace({
              address: results[0].formatted_address,
              city: getCityFromGeocode(results[0]),
              country: getCountryFromGeocode(results[0]),
            });
            setCurrentAddresss(results[0].formatted_address);
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }, []);

  function getCountryFromGeocode(geocode) {
    for (let component of geocode.address_components) {
      for (let type of component.types) {
        if (type === "country") {
          return component.long_name;
        }
      }
    }
    return "";
  }

  const getCityFromGeocode = (geocode) => {
    for (let component of geocode.address_components) {
      if (component.types.includes("locality")) {
        return component.long_name;
      }
    }
    return "";
  };
  const onLoad = (ref) => setSearchBox(ref);
  const onPlacesChanged = () => {
    const results = searchBox.getPlaces();
    setSelectedPlace({
      address: results[0].formatted_address,
      city: getCityFromGeocode(results[0]),
      country: getCountryFromGeocode(results[0]),
    });
    // setCurrentAddresss(results[0].formatted_address);

    setMarkers((current) => [
      {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
        time: new Date(),
      },
    ]);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Perform reverse geocoding
          const geocoder = new window.google.maps.Geocoder();
          const latLng = new window.google.maps.LatLng(lat, lng);

          geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === "OK" && results[0]) {
              const address = results[0].formatted_address;

              setCurrentAddresss(address);
              setSelectedPlace({
                address: address,
              });
              setMarkers((current) => [
                {
                  lat: lat,
                  lng: lng,
                  time: new Date(),
                },
              ]);
            } else {
              console.error("Error reverse geocoding:", status);
            }
          });
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onClick={onMapClick}
        options={{
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: "TOP_RIGHT",
            fullscreenControl: false,
            content: "Full Screen",
            index: 1,
          },
        }}
      >
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input
            value={currentAddresss}
            onChange={(e) => {
              setCurrentAddresss(null);
            }}
            type="text"
            placeholder="Enter the Location..."
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
              }
            }}
          />
        </StandaloneSearchBox>
        {markers.map((marker) => (
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
}

export default SelectLatLongMap;
