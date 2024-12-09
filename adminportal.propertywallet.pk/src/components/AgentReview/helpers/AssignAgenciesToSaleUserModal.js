import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Divider, Form, Modal, Select, Row } from 'antd'
import { useSelector } from 'react-redux'
import InputLabel from './../../../utils/components/InputFields/InputLabel'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import {
  assignSaleUserToAgencyApi,
  getAllAgenciesForSaleUsersApi,
  getAllELoungesForSaleUserApi,
  getAllSaleUserByLoungeIdApi,
} from '../../../redux/api/AgencyReview'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'

const AssignAgenciesToSaleUserModal = ({ visible, toggle, type }) => {
  const [selectedLounge, setSelectedLounge] = useState(null)
  const getAllAgency = useSelector((state) => state?.getAllAgenciesForSaleUsers)
  const getAllLounges = useSelector((state) => state?.getAllELoungesForSaleUser)
  const getAllSaleUsers = useSelector(
    (state) => state?.getAllSaleUserByLoungeId
  )
  const [form] = useForm()
  const [pageLimitAgency, setPageLimitAgency] = useState({
    page: 1,
    limit: 10,
  })
  const [pageLimitLounge, setPageLimitLounge] = useState({
    page: 1,
    limit: 10,
  })
  const [pageLimitSaleUser, setPageLimitSaleUser] = useState({
    page: 1,
    limit: 10,
  })
  const [lounges, setLounges] = useState([])
  const [agencies, setAgencies] = useState([])
  const [saleUsers, setSaleUsers] = useState([])
  const [agencySearch, setAgencySearch] = useState('')
  const dispatch = useDispatch()
  const ref = useRef()
  function onCancel() {
    toggle()
  }
  useEffect(() => {
    getAllAgenciesForSaleUsersApi(
      dispatch,
      pageLimitAgency,
      onSuccessGetLoadMore,
      setAgencies,
      agencySearch
    )
  }, [pageLimitAgency, agencySearch])
  useEffect(() => {
    getAllELoungesForSaleUserApi(
      dispatch,
      pageLimitLounge,
      onSuccessGetLoadMore,
      setLounges
    )
  }, [pageLimitLounge])

  useEffect(() => {
    if (selectedLounge) {
      getAllSaleUserByLoungeIdApi(
        dispatch,
        pageLimitSaleUser,
        selectedLounge,
        onSuccessGetLoadMore,
        setSaleUsers
      )
    }
  }, [selectedLounge, pageLimitSaleUser])
  function onSuccess() {
    onCancel()
  }
  function onFinish(e) {
    const body = {
      ...e,
    }
    if (type === 'assign') {
      body.assignStatus = 'Assign'
    } else {
      body.assignStatus = 'Remove'
    }
    assignSaleUserToAgencyApi(dispatch, body, onSuccess)
  }
  function onSuccessGetLoadMore(state, setState) {
    setState((prev) => {
      return [...prev, ...state]
    })
  }

  function handleChangeLoadMore(setPageLimit) {
    setPageLimit((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
      }
    })
  }
  return (
    <Modal
      width={'817px'}
      title={
        <h3 className="text-[18px] font-semibold">
          {' '}
          {type === 'assign'
            ? 'Assign Sale User to Agencies'
            : 'Remove Sale Users from Agencies'}
        </h3>
      }
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%' }} bordered={false}>
          <Form onFinish={onFinish} form={form}>
            <div>
              <InputLabel>Select Agencies</InputLabel>
              <SelectField
                name={'agencyId'}
                mode="multiple"
                options={agencies?.map((item) => {
                  return {
                    label: item?.agencyName,
                    value: item?.id,
                  }
                })}
                loadMore
                filterOption={false}
                onSearch={(agencyName) => {
                  clearTimeout(ref.current)
                  ref.current = setTimeout(() => {
                    setAgencySearch(agencyName)
                    setAgencies([])
                    setPageLimitAgency({
                      page: 1,
                      limit: 10,
                    })
                  }, 500)
                }}
                onBlur={() => {
                  setAgencySearch('')
                  setAgencies([])
                  setPageLimitAgency({
                    page: 1,
                    limit: 10,
                  })
                }}
                handleLoadMore={() => {
                  handleChangeLoadMore(setPageLimitAgency)
                }}
                loading={getAllAgency.loading}
              />
            </div>
            {type === 'assign' && (
              <>
                <div>
                  <InputLabel>Select Lounge</InputLabel>
                  <SelectField
                    options={lounges?.map((item) => {
                      return {
                        label: item?.name,
                        value: item?.id,
                      }
                    })}
                    onChange={(e) => {
                      setSaleUsers([])
                      form.setFieldValue('eLoungSalesUserId', null)
                      setSelectedLounge(e)
                    }}
                    loadMore
                    handleLoadMore={() => {
                      handleChangeLoadMore(setPageLimitLounge)
                    }}
                    loading={getAllLounges.loading}
                  />
                </div>
                <div>
                  <InputLabel>Select Users</InputLabel>
                  <SelectField
                    name={'eLoungSalesUserId'}
                    options={saleUsers?.map((item) => {
                      return {
                        label: item?.eloungeUser?.fullName,
                        value: item?.eloungeUser?.eLoungeSaleUser?.id,
                      }
                    })}
                    disabled={selectedLounge === null}
                    loadMore
                    handleLoadMore={() => {
                      handleChangeLoadMore(setPageLimitSaleUser)
                    }}
                    loading={getAllSaleUsers.loading}
                  />
                </div>
              </>
            )}
            <div className="flex justify-end mt-[30px] gap-2">
              <Button
                size="middle"
                key="1"
                type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-white text-black h-[40px]"
                onClick={onCancel}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="2"
                type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
              >
                {type === 'assign' ? 'Assign' : 'Remove'}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default AssignAgenciesToSaleUserModal
