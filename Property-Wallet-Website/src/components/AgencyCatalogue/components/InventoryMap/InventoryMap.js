import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, Circle } from "@react-google-maps/api";
import useGoogleMap from "../../utils/hooks/useGoogleMap";

const containerStyle = {
  width: "100%",
  height: "500px",
};

function InventoryMap({ isFullScreen, onMapFullScreenClick, data }) {
  const [isLoaded] = useGoogleMap();
  const googleMapRef = useRef();
  const [center, setCenter] = useState(null);
  useEffect(() => {
    if (data) {
      setCenter({
        lat: Number(data?.latitude),
        lng: Number(data?.longitude),
      });
    }
  }, [data]);

  const mapOptions = {
    mapTypeControlOptions: {
      mapTypeIds: [],
    },
    fullscreenControl: false,
    fullscreenControlOptions: {
      position: "TOP_RIGHT",
      fullscreenControl: false,
      content: "Full Screen",
      index: 1,
    },
  };

  useEffect(() => {
    onMapFullScreenClick(isLoaded, googleMapRef);
  }, [isLoaded, isFullScreen]);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={mapOptions}
      ref={googleMapRef}
    >
      {center && (
        <Circle
          center={center}
          radius={1000}
          options={{
            fillColor: "#a0cacc",
            fillOpacity: 0.5,
            strokeColor: "#a0cacc",
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

export default InventoryMap;
