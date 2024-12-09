import { Button, Divider, Drawer, Form, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import TextField from '../../../../utils/components/InputFields/TextField'
import { SelectField } from '../../../../utils/components/InputFields/SelectField'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import DraggableContainer from './DraggableContainer'
import ListingPreviews from './ListingPreviews'
import { getAllProjectsApi } from '../../../../redux/api/Project/index'
import { useDispatch } from 'react-redux'
import ProjectsList from './ProjectsList'
import { useForm } from 'antd/es/form/Form'
import ProductsList from './ProductsList'
import { cleargetAllProductList } from '../../../../redux/slices/SingleProperty/getAllProductListSlice'
import { cleargetAllProjects } from '../../../../redux/slices/Project/getAllProjectsSlice'
import { errorMessage } from '../../../../utils/message'
import { createHotListingApi } from '../../../../redux/api/Advertisement/HotListing'

const AddListingsModal = ({ isAddModalVisible, toggleAdd }) => {
  const dispatch = useDispatch()
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
  const [move, setMove] = useState({
    source: null,
    destination: null,
  })
  function onSuccess() {
    onCancel()
  }
  function onFinish(values) {
    if (selectedList.length === 0) {
      errorMessage('Please select atleast 1 listing')
      return
    }
    const body = {
      title: values.title,
      status: 'INACTIVE',
      propertyWalletProduct: [],
      propertyWalletProject: [],
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
    createHotListingApi(dispatch, body, onSuccess)
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
  }

  return (
    <Drawer
      title={<h2 className="text-[18px] text-[#000]">Add Listing</h2>}
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
            {/* <div>
              <h4 className="text-[14px] font-medium mb-[6px]">Status</h4>
              <SelectField
                name="status"
                options={[
                  { label: "Active", value: "Active" },
                  { label: "In-Active", value: "In-Active" },
                ]}
                placeholder="Status"
                onChange={(value) => {
                  setStatus(value);
                }}
              />
            </div> */}
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
        <div className="flex justify-end mt-[55px]">
          <Button
            size="middle"
            key="1"
            // type="primary"
            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
            // loading={postRoles.loading}
            htmlType="submit"
          >
            Add Now
          </Button>
        </div>
      </Form>
    </Drawer>
  )
}

export default AddListingsModal
