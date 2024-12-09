import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const MapLocationSelect = ({
  setMapData: setStateMapData,
  mapdata: stateMap,
}) => {
  const [searchBox, setSearchBox] = React.useState(null);
  const [mapdata, setMapData] = useState({
    lat: null,
    lng: null,
    city: null,
    address: null,
  });
 
  const handleMapClick = (event) => {
    const latLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMapData({
      ...mapdata,
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    // Perform reverse geocoding
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK" && results[0]) {
        setMapData({
          ...mapdata,
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          city: formatAddress(results[0]),
          address: results[0].formatted_address,
        });
      } else {
        console.error("Error reverse geocoding:", status);
      }
    });
  };
  const formatAddress = (result) => {
    const addressComponents = result.address_components;
    const city = addressComponents.find((component) =>
      component.types.includes("locality")
    );
    const country = addressComponents.find((component) =>
      component.types.includes("country")
    );

    return `${city ? city.short_name + ", " : ""}${
      country ? country.short_name : ""
    }`;
  };
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const center = {
    lat: mapdata.lat !== null ? mapdata.lat : 24.860966,

    lng: mapdata.lng !== null ? mapdata.lng : 66.990501,
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
              const city = formatAddress(results[0]);
              const address = results[0].formatted_address;

              setMapData({
                lat,
                lng,
                city,
                address,
              });
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
  const onLoad = (ref) => setSearchBox(ref);
  const onPlacesChanged = () => {
    const results = searchBox.getPlaces();
    setMapData({
      ...mapdata,
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng(),
      city: formatAddress(results[0]),
      address: results[0].formatted_address,
    });
  };
  useEffect(() => {
    setStateMapData({
        ...mapdata
    })
  }, [mapdata])
  return (
    
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={containerStyle}
          onClick={handleMapClick} // Handle map clicks
        >
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Search the Location..."
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
            />
          </StandaloneSearchBox>
          {mapdata.lat !== null && <Marker position={mapdata} />}
        </GoogleMap>
  );
};
export default MapLocationSelect;
