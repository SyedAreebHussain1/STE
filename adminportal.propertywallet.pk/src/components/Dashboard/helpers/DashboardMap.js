import React, { useEffect, useRef, useState } from 'react'
import {
  GoogleMap,
  Marker,
  Circle,
  StandaloneSearchBox,
  InfoWindow,
  OverlayView,
} from '@react-google-maps/api'
import useGoogleMap from '../../../utils/hooks/useGoogleMap'
import MapMarker from '../../assest/icon/map-marker.png'
import MapMarkerSelected from '../../assest/icon/map-marker-selected.png'
import InfoWindowContent from './InfoWindowContent'
import { isAgencyWithinRadiusApi } from '../../../redux/api/Dashboard'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const containerStyle = {
  width: '100%',
  height: '500px',
}

const initialLocation = {
  lat: 24.85015291459445,
  lng: 67.06646919250488,
}

function DashboardMap({ isFullScreen, onMapFullScreenClick }) {
  const [isLoaded] = useGoogleMap()
  const googleMapRef = useRef()
  const [center, setCenter] = useState(initialLocation)
  const [radius, setRadius] = useState(0)
  const [markers, setMarkers] = useState([])
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [searchBox, setSearchBox] = React.useState(null)
  const onLoad = (ref) => setSearchBox(ref)
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const isAgencyWithinRadius = useSelector(
    (state) => state.isAgencyWithinRadius
  )
  const dispatch = useDispatch()
  const [infoBoxData, setInfoBoxData] = useState(null)
  const calculateCircle = () => {
    if (selectedLocation) {
      setCenter(selectedLocation)

      // Calculate the distance between the selected location and the initial location using the Haversine formula
      const lat1 = selectedLocation.lat
      const lon1 = selectedLocation.lng
      const lat2 = initialLocation.lat
      const lon2 = initialLocation.lng
      const R = 6371e3 // Earth's radius in meters
      const φ1 = (lat1 * Math.PI) / 180
      const φ2 = (lat2 * Math.PI) / 180
      const Δφ = ((lat2 - lat1) * Math.PI) / 180
      const Δλ = ((lon2 - lon1) * Math.PI) / 180
      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      const distance = R * c

      // Set the radius to 5 kilometers (5000 meters)
      const radiusMeters = 5000
      setRadius(radiusMeters)
    }
  }

  const onPlacesChanged = () => {
    const results = searchBox.getPlaces()
    // setSelectedPlace({
    //   address: results[0].formatted_address,
    //   city: getCityFromGeocode(results[0]),
    // });

    // setMarkers((current) => [
    //   {
    //     lat: results[0].geometry.location.lat(),
    //     lng: results[0].geometry.location.lng(),
    //     time: new Date(),
    //   },
    // ]);
    const clickedLocation = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng(),
    }
    setSelectedLocation(clickedLocation)
    isAgencyWithinRadiusApi(
      dispatch,
      clickedLocation.lat,
      clickedLocation.lng,
      5000
    )
  }

  const onMapClick = (event) => {
    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }

    setSelectedLocation(clickedLocation)
    isAgencyWithinRadiusApi(
      dispatch,
      clickedLocation.lat,
      clickedLocation.lng,
      5000
    )
    // setMarkers([clickedLocation]);
    setShowInfoWindow(false)
  }

  const onMarkerClick = (data) => {
    if (showInfoWindow) {
      setInfoBoxData(null)
      setShowInfoWindow(false)
    } else {
      setInfoBoxData(data)
      setShowInfoWindow(true)
    }
  }

  const onMouseOver = (data) => {
    setInfoBoxData(data)
    setShowInfoWindow(true)
  }
  const onMouseOut = () => {
    setInfoBoxData(null)
    setShowInfoWindow(false)
  }

  useEffect(() => {
    if (isAgencyWithinRadius?.data?.length > 0) {
      setMarkers(isAgencyWithinRadius?.data)
      calculateCircle()
    } else {
      setMarkers([])
    }
  }, [selectedLocation, isAgencyWithinRadius?.data])

  // const bounds = React.useMemo(() => {
  //   if (typeof window !== "undefined" && window.google && window.google.maps) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     markers.forEach((marker) => bounds.extend(marker));
  //     return bounds;
  //   } else {
  //     return null;
  //   }
  // }, [markers]);
  const mapOptions = {
    mapTypeControlOptions: {
      mapTypeIds: [],
    },
    fullscreenControl: false,
    fullscreenControlOptions: {
      position: 'TOP_RIGHT',
      fullscreenControl: false,
      content: 'Full Screen',
      index: 1,
    },
  }

  useEffect(() => {
    onMapFullScreenClick(isLoaded, googleMapRef)
  }, [isLoaded, isFullScreen])
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={calculateCircle}
      onClick={onMapClick}
      options={mapOptions}
      ref={googleMapRef}
    >
      {markers?.length > 0 &&
        center &&
        radius > 0 &&
        markers.map((marker, index) => (
          <Marker
            key={index}
            position={{
              lat: Number(marker.latitude),
              lng: Number(marker.longitude),
            }}
            // onClick={() => onMarkerClick(marker)}
            icon={MapMarker}
            onMouseOver={() => onMouseOver(marker)}
            onMouseOut={onMouseOut}
          />
        ))}
      <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
        <input
          type="text"
          placeholder="Search Location"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `50px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `12px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: 'absolute',
            left: '23%',
            top: '3%',
            marginLeft: '-120px',
          }}
        />
      </StandaloneSearchBox>
      {markers?.length > 0 && center && radius > 0 && (
        <Circle
          center={center}
          radius={radius}
          options={{
            fillColor: '#a0cacc',
            fillOpacity: 0.5,
            strokeColor: '#fff',
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
      {showInfoWindow && infoBoxData !== null && (
        <OverlayView
          position={{
            lat: Number(infoBoxData.latitude),
            lng: Number(infoBoxData.longitude),
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={(width, height) => ({
            x: -(width / 2),
            y: -height,
          })}
        >
          <InfoWindowContent infoBoxData={infoBoxData} />
        </OverlayView>
      )}
    </GoogleMap>
  ) : (
    <></>
  )
}

export default DashboardMap
