// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };
// const Googlemap = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyDo7XNgqcpp6ZH4qbHi4_sHf8H3Ib-bIoc",
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       //   defaultZoom={18}
//       zoom={17}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// };
// export default Googlemap;
