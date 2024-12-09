import React, { useState } from "react";
import Container from "../../../../components/Container";
import InventoryMap from "../../../../components/InventoryMap/InventoryMap";
import { useSelector } from "react-redux";

const MapSection = ({ data }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const isAgencyWithinRadius = useSelector(
    (state) => state.isAgencyWithinRadius
  );
  function onMapFullScreenClick(isLoaded, googleMapRef) {
    if (isLoaded) {
      const { mapRef } = googleMapRef?.current;
      if (isFullScreen) {
        mapRef?.requestFullscreen();
        setIsFullScreen((prev) => !prev);
      }
    }
  }
  return (
    <div>
      <Container>
        <div className="mb-[3.25rem]">
          <h3 className="text-[#191F2B] text-2xl font-semibold mb-2">
            Location
          </h3>
          {data?.data ? (
            <InventoryMap
              isFullScreen={isFullScreen}
              onMapFullScreenClick={onMapFullScreenClick}
              data={data?.data}
            />
          ) : (
            <iframe
              title="1"
              height="450"
              style={{ border: 0, width: "100%" }}
              loading="lazy"
              allowfullscreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCDopm4vX7TGZNSSNb3wvfABABZRcjkS3M&q=${data?.data?.latitude},${data?.data?.longitude}`}
            ></iframe>
          )}
        </div>
        {/* <div className="mb-[3.25rem]">
          <h3 className="text-[#191F2B] text-2xl font-semibold mb-2">
            Location
          </h3>
          <iframe
            title="1"
            height="450"
            style={{ border: 0, width: "100%" }}
            loading="lazy"
            allowfullscreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCDopm4vX7TGZNSSNb3wvfABABZRcjkS3M&q=${data?.data?.latitude},${data?.data?.longitude}`}
          ></iframe>
        </div> */}
      </Container>
    </div>
  );
};

export default MapSection;
