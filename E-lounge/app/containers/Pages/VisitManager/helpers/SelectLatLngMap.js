import React, { useState } from "react";
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

    setMarkers((current) => [
      {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
        time: new Date(),
      },
    ]);
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markers.length > 0 ? markers[0] : center}
        zoom={12}
        dis
        options={{
          fullscreenControl: false,
          fullscreenControlOptions: {
            position: "TOP_RIGHT",
            fullscreenControl: false,
            content: "Full Screen",
            index: 1,
          },
        }}
      >
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
