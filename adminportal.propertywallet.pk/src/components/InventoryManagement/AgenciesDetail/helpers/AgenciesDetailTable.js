import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Input, Popover, Row, Select, Space, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import TablePagination from '../../../../utils/components/TablePagination'
import agenciesDetailColumns from '../../../../tableColumns/AgenciesDetailColumns.json'

// icon
import FilterIcon from '../../../assest/icon/filter.png'
import activeSignIcon from '../../../assest/icon/activesign.png'
// import AppUserFilter from "./AppUserFilter";

const AgenciesDetailTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  })
  const [dataSource, setDataSource] = useState([])
  const [filteration, setFilteration] = useState([])

  const handleNavigate = (routeKey) => {
    navigate(`/inventory/agencies-details/${routeKey.key}`)
  }

  const filterTitle = [
    {
      title: 'Name',
      index: 'name',
      value: 'name',
      key: 1,
      options: [<div>hello world</div>, 'Mughal Khan'],
    },
    {
      title: 'Phone No',
      index: 'phoneNo',
      value: 'phoneNo',
      key: 2,
      options: ['03483688128', '03483688128'],
    },
    {
      title: 'Agency Name	',
      index: 'agencyName',
      value: 'agencyName',
      key: 3,
      options: ['Areeb state', 'Hussain'],
    },
    {
      title: 'Agency Location',
      index: 'agencyLocation',
      value: 'agencyLocation',
      key: 4,
      options: ['Karachi', 'Lahore'],
    },
    {
      title: 'Referrals',
      index: 'referrals',
      value: 'referrals',
      key: 5,
      options: ['reference', 'Reference'],
    },
    {
      title: 'Designation',
      index: 'designation',
      value: 'designation',
      key: 6,
      options: ['Designation', 'Designation'],
    },
    {
      title: 'Location',
      index: 'location',
      value: 'location',
      key: 6,
      options: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'],
    },
    {
      title: 'Status',
      index: 'status',
      value: 'status',
      key: 7,
      options: [
        <div className="flex text-center items-center gap-1">
          {' '}
          <span>
            {' '}
            <img src={activeSignIcon} alt="" />
          </span>{' '}
          <span>Active</span>{' '}
        </div>,
        'In-Active',
      ],
    },
    {
      title: 'Email',
      index: 'email',
      value: 'email',
      key: 8,
      options: ['Active', 'In-Active'],
    },
    {
      title: 'Joining Date',
      index: 'joiningDate',
      value: 'joiningDate',
      key: 9,
      options: ['Active', 'In-Active'],
    },
    {
      title: 'Last Time Active',
      index: 'lastTimeActive',
      value: 'lastTimeActive',
      key: 10,
      options: ['Active', 'In-Active'],
    },
  ]

  useEffect(() => {
    const data = [
      {
        key: 1,
        agency: (
          <div style={{ display: 'flex' }}>
            <img
              style={{ borderRadius: '5px' }}
              className="w-[30px] h-[30px] mt-[2%]"
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            &nbsp;&nbsp;
            <p>lorem ispum lorem ispum lorem ispum</p>
          </div>
        ),
        agencyLocation: (
          <span className="text-[12px] font-medium text-[#3D4350]">
            Karachi
          </span>
        ),
        noOfStaff: (
          <span className="text-[12px] font-medium text-[#3D4350]">8</span>
        ),
        noOfManagers: (
          <span className="text-[12px] font-medium text-[#3D4350]">2</span>
        ),
        noOfInventories: (
          <span className="text-[12px] font-medium text-[#3D4350]">22</span>
        ),
        website: (
          <span className="text-[12px] font-medium text-[#444B54]">
            http://localhost:3000/inventory/agencies-details
          </span>
        ),
        owner: (
          <span className="text-[12px] font-medium text-[#444B54]">
            Rick Wright
          </span>
        ),
        phoneNo: (
          <span className="text-[12px] font-medium text-[#444B54]">
            12345-5678678-6
          </span>
        ),
      },
    ]
    setDataSource(data)
  }, [])

  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
            <div className="flex gap-2">
              <div className="shrink-0">
                <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                  All Agencies
                </h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
              <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
                className="w-full lg:w-[268px] h-[43px]"
              />
              <Popover
                placement="bottomRight"
                // content={<ProjectTabelFilter filterTitle={filterTitle} />}
                trigger="click"
              >
                <Button
                  className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                  // onClick={showDrawer}
                >
                  <img
                    src={FilterIcon}
                    style={{ filter: 'brightness(4)' }}
                    alt=""
                  />
                  <span>Filter</span>
                </Button>
              </Popover>
            </div>
          </div>
          <Table
            dataSource={dataSource}
            columns={agenciesDetailColumns}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => handleNavigate(record), // click row
              }
            }}
            //   loading={loading}
            scroll={{ x: true }}
            // loading={getCrmRequests?.loading}
            pagination={{
              //   total: getCrmRequests?.data?.data?.meta?.totalItems,
              // onChange: onShowSizeChange,
              showTotal: (total, range) => (
                <TablePagination
                  total={total}
                  range={range}
                  setPageLimit={setPageLimit}
                  pageLimit={pageLimit}
                />
              ),
            }}
          />
        </Col>
      </Row>
    </>
  )
}

export default AgenciesDetailTable
