import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import FireImg from '../../../assest/icon/fire-icon.png'
import LocationIcon from '../../../assest/icon/location-1.png'
import ListingPreviewsSingle from './ListingPreviewsSingle'

const ListingPreviews = ({ move, selectedList }) => {
  const [items, setItems] = useState(selectedList)
  useEffect(() => {
    setItems(selectedList)
  }, [selectedList])

  // useEffect(() => {
  //   if (move.source !== null) {
  //     const result = Array.from(items);
  //     const [removed] = result.splice(move.source, 1);
  //     result.splice(move.destination, 0, removed);
  //     setItems(result);
  //   }
  // }, [move]);

  return (
    <>
      <h4 className="text-[14px] mb-[14px] mt-[26px]">Listing Preview</h4>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '18% 18% 23% 18% 18%',
          gap: '1%',
          alignItems: 'center',
        }}
      >
        {items.map((item, i) => {
          return (
            <ListingPreviewsSingle
              item={item}
              key={i}
              style={i === 2 ? { height: '186px' } : {}}
            />
          )
        })}
      </div>
    </>
  )
}

export default ListingPreviews
