import React, { useEffect, useRef, useState } from 'react'
import CrossIcon from '../../../assest/icon/cross.png'
import FilterModalContent from './FilterModalContent'
import { Button, Drawer } from 'antd'
function useOutsideAlerter(ref, onCancel) {
  // useEffect(() => {
  //   /**
  //    * Alert if clicked on outside of element
  //    */
  //   function handleClickOutside(event) {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       onCancel();
  //     }
  //   }
  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [ref]);
}

const FilterModal = ({ visible, onCancel }) => {
  const ref = useRef(null)
  useOutsideAlerter(ref, onCancel)

  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  return visible ? (
    <>
      {/* <div
        className="fixed left-0 right-0 top-0 bottom-0 w-full h-full z-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
      <div className="relative">
        <div
          className="w-[545px] absolute rounded z-20  bg-white px-4 py-6"
          style={{
            left: -530,
          }}
          ref={ref}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Filters</h2>
            <img
              src={CrossIcon}
              alt=""
              onClick={onCancel}
              className="cursor-pointer"
            />
          </div>
          <FilterModalContent />
        </div>
      </div> */}

      {/* <div onClick={showDrawer} className="flex items-center justify-between">
        <h2 className="text-lg">Filters</h2>
        <img
          src={CrossIcon}
          alt=""
          onClick={onCancel}
          className="cursor-pointer"
        />
      </div> */}
    </>
  ) : (
    ''
  )
}

export default FilterModal
