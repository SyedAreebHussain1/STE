import React, { useEffect, useState } from 'react'
import AddonSingle from './AddonSingle'
import AddAddonsModal from './AddAddonsModal'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllAddonsApi } from '../../../redux/api/SubscriptionAddons'
import { useModal } from '../../../utils/hooks/useModal'
import EditAddonsModal from './EditAddonsModal'
import { Spin } from 'antd'

const AddonsMain = ({ addModal, toggleAddModal }) => {
  const getAllAddons = useSelector((state) => state.getAllAddons)
  const createAddon = useSelector((state) => state.createAddon)
  const updateAddon = useSelector((state) => state.updateAddon)
  const deleteAddon = useSelector((state) => state.deleteAddon)

  const [editModal, toggleEditModal] = useModal()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 1000,
  })
  const [editData, setEditData] = useState()
  const dispatch = useDispatch()

  function onEditClick(data) {
    setEditData(data)
    toggleEditModal()
  }
  useEffect(() => {
    getAllAddonsApi(dispatch, pageLimit)
  }, [createAddon?.data, updateAddon?.data, deleteAddon?.data])
  return (
    <>
      {addModal && (
        <AddAddonsModal visible={addModal} toggle={toggleAddModal} />
      )}
      {editModal && (
        <EditAddonsModal
          visible={editModal}
          toggle={toggleEditModal}
          editData={editData}
        />
      )}
      <div className="h-[60vh]  bg-white">
        <Spin spinning={deleteAddon?.loading || getAllAddons.loading}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[22px] p-6 relative">
            {getAllAddons?.data &&
            getAllAddons?.data?.data?.items?.length > 0 ? (
              getAllAddons?.data?.data?.items?.map((item, key) => (
                <AddonSingle data={item} onEditClick={onEditClick} key={key} />
              ))
            ) : (
              <h2 className="text-[40px] font-black absolute left-[50%] translate-x-[-50%] opacity-30 cursor-default select-none">
                No Data
              </h2>
            )}
            {}
          </div>
        </Spin>
      </div>
    </>
  )
}

export default AddonsMain
