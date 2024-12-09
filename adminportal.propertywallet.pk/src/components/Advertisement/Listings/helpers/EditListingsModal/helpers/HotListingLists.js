import React, { useEffect, useRef, useState } from 'react'
import { getAllHotListingConditionalApi } from '../../../../../../redux/api/Advertisement/HotListing'
import { useDispatch, useSelector } from 'react-redux'
import { cleargetAllHotListingConditional } from '../../../../../../redux/slices/Advertisement/HotListing/getAllHotListingConditionalSlice'

const HotListingLists = ({ visible, setSelectedList, toggle }) => {
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 6,
  })
  const [listingsList, setListingList] = useState([])
  const getAllHotListingConditional = useSelector(
    (state) => state.getAllHotListingConditional
  )
  useEffect(() => {
    getAllHotListingConditionalApi(dispatch, pageLimit, 'INACTIVE')
  }, [dispatch, pageLimit])
  const containerRef = useRef()

  useEffect(() => {
    if (getAllHotListingConditional?.data) {
      setListingList((prev) => [
        ...prev,
        ...getAllHotListingConditional?.data?.data?.items,
      ])
    }
  }, [getAllHotListingConditional?.data])
  useEffect(() => {
    return () => {
      dispatch(cleargetAllHotListingConditional())
    }
  }, [])
  useEffect(() => {
    containerRef.current.addEventListener('scroll', function () {
      if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
        // call api
        setPageLimit((prev) => ({
          page: prev.page + 1,
          limit: 6,
        }))
      }
    })
  }, [])
  return (
    <div
      className="h-[257px] overflow-auto bg-white absolute w-full z-10"
      ref={containerRef}
      style={{
        boxShadow: '0px 0px 4px 2px #00000021',
        borderRadius: '5px',
      }}
    >
      <div className="flex flex-col gap-[10px]">
        {listingsList?.map((item, i) => (
          <div
            className="py-[8px] px-[10px] text-[#444B54]  relative cursor-pointer"
            key={i}
            onClick={() => {
              setSelectedList({
                id: item.id,
                title: item.title,
              })
              toggle()
            }}
          >
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotListingLists
