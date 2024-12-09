import { Button, Divider, Modal } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import InputLabel from '../../../../../../utils/components/InputFields/InputLabel'
import { DownOutlined } from '@ant-design/icons'
import HotListingLists from './HotListingLists'

const SaveChangesModal = ({
  visible,
  toggle,
  onFinishFromSaveChangesModal,
}) => {
  const [isSelectListVisible, setIsSelectListVisible] = useState(false)
  const [selectedList, setSelectedList] = useState({
    id: null,
    title: '-',
  })

  function onCancel() {
    setIsSelectListVisible(false)
    setSelectedList({
      id: null,
      title: '-',
    })
    toggle()
  }
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      //   if (modalRef.current && !modalRef.current.contains(event.target)) {
      //     setIsSelectListVisible(false);
      //   }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <Modal
      title={<h3 className="text-[18px] font-semibold">Save Listing</h3>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
      width={539}
      ref={modalRef}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div className="mb-[30px]">
            <p className="text-base">
              Before changing Active Listing to In-Active please ensure that
              your other listing must be active.
            </p>
          </div>
          <div>
            <InputLabel>Select Listing</InputLabel>
            <div
              className="relative border-[#D0D5DD] border-2 rounded-lg px-[18px] py-[10px] mt-[8px] cursor-pointer"
              onClick={() => setIsSelectListVisible((prev) => !prev)}
            >
              <span>{selectedList.title}</span>
              <span className="absolute right-[10px]">
                <DownOutlined />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        {isSelectListVisible && (
          <HotListingLists
            setSelectedList={setSelectedList}
            toggle={setIsSelectListVisible}
            ref={modalRef}
          />
        )}
      </div>
      <div className="flex justify-end mt-[40px]">
        <Button
          size="middle"
          key="1"
          // type="primary"
          className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
          onClick={toggle}
        >
          Close
        </Button>
        <Button
          size="middle"
          disabled={selectedList.title === '-'}
          key="2"
          // type="primary"
          className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
          // loading={postRoles.loading}
          //   htmlType="submit"
          onClick={() =>
            onFinishFromSaveChangesModal(selectedList.id, () => {
              setIsSelectListVisible(false)
              setSelectedList({
                id: null,
                title: '-',
              })
            })
          }
        >
          Save Changes
        </Button>
      </div>
    </Modal>
  )
}

export default SaveChangesModal
