import React, { useEffect, useState } from 'react'
import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
  useJsApiLoader,
} from '@react-google-maps/api'
import useGoogleMap from '../../../utils/hooks/useGoogleMap'

const containerStyle = {
  width: '100%',
  height: '400px',
}

function LocationViewMap({ markers }) {
  const [isLoaded] = useGoogleMap()
  const [center, setCenter] = useState({
    lat: 24.860966,
    lng: 66.990501,
  })
  useEffect(() => {
    if (markers?.length > 0) {
      setCenter({
        lat: markers[0]?.lat,
        lng: markers[0]?.lng,
      })
    }
  }, [markers])
  return isLoaded ? (
    <div style={{ width: '100%', height: '400px' }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        options={{
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: 'TOP_RIGHT',
            fullscreenControl: false,
            content: 'Full Screen',
            index: 1,
          },
        }}
      >
        {markers?.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  )
}

export default LocationViewMap
