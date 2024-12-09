import { Button, Divider, Drawer, Form, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import TextField from '../../../../../utils/components/InputFields/TextField'
import { SelectField } from '../../../../../utils/components/InputFields/SelectField'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import DraggableContainer from '../DraggableContainer'
import ListingPreviews from '../ListingPreviews'
import { getAllProjectsApi } from '../../../../../redux/api/Project/index'
import { useDispatch } from 'react-redux'
import ProjectsList from '../ProjectsList'
import { useForm } from 'antd/es/form/Form'
import ProductsList from '../ProductsList'
import { cleargetAllProductList } from '../../../../../redux/slices/SingleProperty/getAllProductListSlice'
import { cleargetAllProjects } from '../../../../../redux/slices/Project/getAllProjectsSlice'
import { errorMessage } from '../../../../../utils/message'
import {
  createHotListingApi,
  deleteHotListingApi,
  getOnetHotListingApi,
  updateHotListingApi,
} from '../../../../../redux/api/Advertisement/HotListing'
import { useSelector } from 'react-redux'

import DeleteListingInfoModal from './helpers/DeleteListingInfoModal'
import { useModal } from '../../../../../utils/hooks/useModal'
import SaveChangesModal from './helpers/SaveChangesModal'

const EditListingsModal = ({
  isAddModalVisible,
  toggleAdd,
  selectedListingId,
  setHotListingIdToState,
}) => {
  const dispatch = useDispatch()

  const [isDeleteModalVisible, toggleDelete] = useModal()
  const [isSaveModalVisible, toggleSaveChanges] = useModal()
  const [selectedList, setSelectedList] = useState([])
  const [propertyType, setPropertyType] = useState('')
  const [status, setStatus] = useState('')
  const [searchText, setSearchText] = useState('')
  const [form] = useForm()
  function addProjectAndProductToList(item) {
    setSelectedList((prev) => [...prev, item])
  }
  function removeProjectAndProductFromList(id) {
    setSelectedList(selectedList.filter((item) => item.id !== id))
  }
  const getOnetHotListing = useSelector((state) => state.getOnetHotListing)
  const [move, setMove] = useState({
    source: null,
    destination: null,
  })
  function onSuccess() {
    onCancel()
  }
  function onSuccessFromSaveChanges() {
    onCancel()
    toggleSaveChanges()
  }
  function onFinish(values) {
    if (
      getOnetHotListing?.data?.data?.status === 'ACTIVE' &&
      status === 'INACTIVE'
    ) {
      toggleSaveChanges()
      return
    }
    if (selectedList.length === 0) {
      errorMessage('Please select atleast 1 listing')
      return
    }
    const body = {
      title: values.title,
      status: status,
      propertyWalletProduct: [],
      propertyWalletProject: [],
      id: getOnetHotListing?.data?.data?.id,
    }
    for (let i = 0; i < selectedList.length; i++) {
      if (selectedList[i].hasOwnProperty('projectName')) {
        body.propertyWalletProject.push(
          Number(selectedList[i].id.split('-')[0])
        )
      } else {
        body.propertyWalletProduct.push(
          Number(selectedList[i].id.split('-')[0])
        )
      }
    }
    updateHotListingApi(dispatch, body, onSuccess)
  }

  function onFinishFromSaveChangesModal(activeId, onCancelSave) {
    if (selectedList.length === 0) {
      errorMessage('Please select atleast 1 listing')
      return
    }
    const body = {
      title: form.getFieldValue('title'),
      status: status,
      propertyWalletProduct: [],
      propertyWalletProject: [],
      id: getOnetHotListing?.data?.data?.id,
      activeId,
    }
    for (let i = 0; i < selectedList.length; i++) {
      if (selectedList[i].hasOwnProperty('projectName')) {
        body.propertyWalletProject.push(
          Number(selectedList[i].id.split('-')[0])
        )
      } else {
        body.propertyWalletProduct.push(
          Number(selectedList[i].id.split('-')[0])
        )
      }
    }
    updateHotListingApi(dispatch, body, () => {
      onSuccessFromSaveChanges()
      onCancelSave()
    })
  }
  function setSourceAndDestionation(source, destination) {
    setMove({
      source,
      destination,
    })
  }
  function onCancel() {
    toggleAdd()
    dispatch(cleargetAllProductList())
    dispatch(cleargetAllProjects())
    form.resetFields()
    setSelectedList([])
    setPropertyType('')
    setSearchText('')
    setHotListingIdToState(null)
  }

  useEffect(() => {
    if (isAddModalVisible && selectedListingId) {
      getOnetHotListingApi(dispatch, selectedListingId)
    }
  }, [dispatch, isAddModalVisible, selectedListingId])

  useEffect(() => {
    if (getOnetHotListing?.data) {
      const propertyWalletProductHotListing =
        getOnetHotListing?.data?.data?.propertyWalletProductHotListing?.map(
          (list) => ({
            ...list.propertyWalletProduct,
            id: list.propertyWalletProduct.id + '-product',
          })
        )
      const propertyWalletProjectHotListing =
        getOnetHotListing?.data?.data?.propertyWalletProjectHotListing?.map(
          (list) => ({
            ...list.propertyWalletProject,
            id: list.propertyWalletProject.id + '-project',
          })
        )

      setSelectedList([
        ...propertyWalletProductHotListing,
        ...propertyWalletProjectHotListing,
      ])

      form.setFieldsValue({
        status: getOnetHotListing?.data?.data?.status,
        title: getOnetHotListing?.data?.data?.title,
      })
      setStatus(getOnetHotListing?.data?.data?.status)
    }
  }, [getOnetHotListing?.data])

  return (
    <>
      <DeleteListingInfoModal
        visible={isDeleteModalVisible}
        toggle={toggleDelete}
      />
      <SaveChangesModal
        visible={isSaveModalVisible}
        toggle={toggleSaveChanges}
        onFinishFromSaveChangesModal={onFinishFromSaveChangesModal}
      />
      <Drawer
        title={<h2 className="text-[18px] text-[#000]">Edit Listing</h2>}
        placement="right"
        onClose={onCancel}
        open={isAddModalVisible}
        extra={
          <div className="flex items-center">
            <span className="text-[14px] text-[#5b5b5b] mr-2">Close All</span>
            <CloseOutlined
              className="cursor-pointer"
              color="#5B5B5B"
              onClick={onCancel}
            />
          </div>
        }
        closable={false}
        width={548}
      >
        <Form
          name="hot-listing"
          className="projects-form"
          initialValues={{ remember: true }}
          form={form}
          onFinish={onFinish}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%' }}>
              <div>
                <h4 className="text-[14px] font-medium mb-[6px]">Status</h4>
                <SelectField
                  name="status"
                  options={[
                    { label: 'Active', value: 'ACTIVE' },
                    { label: 'In-Active', value: 'INACTIVE' },
                  ]}
                  placeholder="Status"
                  onChange={(value) => {
                    setStatus(value)
                  }}
                />
              </div>
              <div>
                <h4 className="text-[14px] font-medium mb-[6px]">Name</h4>
                <TextField name="title" placeholder="Name" />
              </div>
              <div className="bg-[#f0f1f3] p-4">
                <h4 className="text-[14px] font-medium mb-[6px]">
                  Inventory Selection
                </h4>
                <div>
                  <SelectField
                    name="propertyType"
                    options={[
                      { label: 'Project', value: 'Project' },
                      { label: 'Product', value: 'Product' },
                    ]}
                    placeholder="Property Type"
                    onChange={(value) => {
                      setPropertyType(value)
                    }}
                    required={false}
                  />
                </div>
                <div>
                  <TextField
                    name="searchProperties"
                    required={false}
                    placeholder="Search"
                    prefix={
                      <SearchOutlined
                        style={{
                          color: 'rgba(102, 112, 133, 0.62)',
                          fontSize: '20px',
                          marginRight: '10px',
                        }}
                      />
                    }
                    onChange={(e) => {
                      setSearchText(e.target.value)
                    }}
                    disabled={propertyType === ''}
                  />
                </div>
                <>
                  <ProjectsList
                    addProjectAndProductToList={addProjectAndProductToList}
                    removeProjectAndProductFromList={
                      removeProjectAndProductFromList
                    }
                    visible={propertyType === 'Project'}
                    searchText={searchText}
                    propertyType={propertyType}
                    selectedList={selectedList}
                  />
                  <ProductsList
                    addProjectAndProductToList={addProjectAndProductToList}
                    removeProjectAndProductFromList={
                      removeProjectAndProductFromList
                    }
                    visible={propertyType === 'Product'}
                    searchText={searchText}
                    propertyType={propertyType}
                    selectedList={selectedList}
                  />
                </>

                <div>
                  <DraggableContainer
                    setSourceAndDestionation={setSourceAndDestionation}
                    selectedList={selectedList}
                    removeProjectAndProductFromList={
                      removeProjectAndProductFromList
                    }
                    setSelectedList={setSelectedList}
                  />
                  <ListingPreviews move={move} selectedList={selectedList} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[55px] justify-between">
            <div>
              {getOnetHotListing?.data?.data?.status === 'INACTIVE' && (
                <Button
                  size="middle"
                  key="1"
                  // type="primary"
                  className="py-[11px] px-[33px] flex items-center  h-[40px] text-[#E23442] border-[#E23442] bg-transparent"
                  onClick={() => {
                    // if (status === "ACTIVE") {
                    //   toggleDelete();
                    //   return;
                    // }
                    deleteHotListingApi(
                      dispatch,
                      getOnetHotListing?.data?.data?.id,
                      onSuccess
                    )
                  }}
                >
                  Delete
                </Button>
              )}
            </div>
            <div className="flex  gap-[10px]">
              <Button
                size="middle"
                key="2"
                // type="primary"
                className="py-[11px] px-[33px] flex items-center  h-[40px] text-[#27A3A3] border-[#27A3A3] bg-transparent"
                onClick={toggleAdd}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="3"
                // type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                // loading={postRoles.loading}
                htmlType="submit"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  )
}

export default EditListingsModal
