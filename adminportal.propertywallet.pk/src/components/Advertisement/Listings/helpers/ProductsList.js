import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Checkbox } from 'antd'
import { getAllProductListApi } from '../../../../redux/api/SingleProperty'
import { errorMessage } from '../../../../utils/message'
import { debounce } from 'lodash'

const ProductsList = ({
  addProjectAndProductToList,
  removeProjectAndProductFromList,
  visible,
  searchText,
  propertyType,
  selectedList,
}) => {
  const containerRef = useRef()
  const dispatch = useDispatch()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 6,
  })
  const getAllProductList = useSelector((state) => state.getAllProductList)
  const [productList, setProductList] = useState([])
  const debouncedGetAllProductListApi = useRef(
    debounce((dispatch, pageLimit, searchText) => {
      getAllProductListApi(dispatch, pageLimit, searchText)
    }, 500)
  ).current

  useEffect(() => {
    if (visible) {
      debouncedGetAllProductListApi(dispatch, pageLimit, searchText)
    }
  }, [visible, pageLimit, searchText])
  useEffect(() => {
    containerRef.current.scrollTo(0, 0)
    setProductList([])
    setPageLimit({
      page: 1,
      limit: 6,
    })
  }, [searchText])
  useEffect(() => {
    if (getAllProductList?.data && pageLimit.page !== 1) {
      setProductList((prev) => [
        ...prev,
        ...getAllProductList?.data?.data?.items,
      ])
    } else if (getAllProductList?.data && pageLimit.page === 1) {
      setProductList((prev) => [...getAllProductList?.data?.data?.items])
    }
  }, [getAllProductList?.data])
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
  useEffect(() => {
    if (!visible) {
      // containerRef.current.scrollTo(0, 0);
      setProductList([])
      setPageLimit({
        page: 1,
        limit: 6,
      })
    }
  }, [visible])
  return (
    <div
      className="h-[257px] overflow-auto bg-white"
      ref={containerRef}
      style={{
        display: visible ? 'block' : 'none',
        boxShadow: '0px 0px 4px 2px #00000021',
        borderRadius: '5px',
      }}
    >
      <div className="flex flex-col gap-[10px]">
        {productList?.map((item, i) => (
          <div className="py-[8px] px-[10px] text-[#444B54]  relative" key={i}>
            <div className="flex gap-4 items-center ">
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    if (selectedList.length === 5) {
                      errorMessage('You are only allowed to select 5')
                      return
                    }
                    addProjectAndProductToList({
                      ...item,
                      id: `${item.id}-product`,
                    })
                  } else {
                    removeProjectAndProductFromList(`${item.id}-product`)
                  }
                }}
                checked={selectedList
                  ?.map((list) => list.id)
                  ?.includes(`${item.id}-product`)}
              />
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <img
                    // src="https://placehold.co/49x42"
                    className="w-[49px] h-[42px]"
                    // src={item?.projectType[0]?.logo}
                    src={item?.propertyWalletProductPhoto[0]?.photo}
                    alt=""
                  />
                  <h2>
                    {item?.title?.length >= 30
                      ? `${item?.title.substring(0, 30)}...`
                      : item?.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList
