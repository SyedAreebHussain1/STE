import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  Circle
} from "@react-google-maps/api";
import useGoogleMap from "../../../hooks/useGoogleMap";
import { useDispatch } from "react-redux";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const initialLocation = {
  lat: 24.85015291459445,
  lng: 67.06646919250488,
};

function Map() {
  const [isLoaded] = useGoogleMap();
  const [center, setCenter] = useState(initialLocation);
  const [markers, setMarkers] = useState([]);
  const dispatch = useDispatch();

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      <Marker
        position={{
          lat: Number(center.lat),
          lng: Number(center.lng),
        }}
      />
      {center && (
        <Circle
          center={center}
          radius={5000}
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
