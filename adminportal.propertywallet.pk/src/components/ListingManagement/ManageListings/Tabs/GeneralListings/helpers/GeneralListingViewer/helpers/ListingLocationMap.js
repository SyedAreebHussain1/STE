import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import useGoogleMap from '../../../../../../../../utils/hooks/useGoogleMap'

const containerStyle = {
  width: '100%',
  height: '281px',
}

function ListingLocationMap({ getAllInventory }) {
  const [isLoaded] = useGoogleMap()

  return isLoaded ? (
    <div style={{ width: '100%', height: '281px' }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: Number(getAllInventory?.project?.latitude),
          lng: Number(getAllInventory?.project?.longitude),
        }}
        zoom={15}
        // onClick={onMapClick}
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
        {getAllInventory?.project?.latitude &&
          getAllInventory?.project?.longitude && (
            <Marker
              key={`${getAllInventory?.project?.latitude}-${getAllInventory?.project?.longitude}`}
              position={{
                lat: Number(getAllInventory?.project?.latitude),
                lng: Number(getAllInventory?.project?.longitude),
              }}
            />
          )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  )
}

export default ListingLocationMap
