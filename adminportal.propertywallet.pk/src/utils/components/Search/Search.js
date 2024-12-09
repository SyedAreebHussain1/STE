import { SearchOutlined } from '@ant-design/icons'
import { Button, DatePicker, Input, Popover, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import FilterIcon from '../../../components/assest/icon/filter.png'
import { useDispatch } from 'react-redux'

const Search = ({ api, pageLimit, setPageLimit }) => {
  const { RangePicker } = DatePicker
  const [startDate, setStartDate] = useState(null)
  const [range, setRange] = useState(null)
  const [isVerified, setIsVerified] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Full Name')
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    api(dispatch, pageLimit, search, selectedFilter, range, isVerified)
  }, [pageLimit])
  useEffect(() => {
    setPageLimit({
      page: 1,
      limit: 10,
    })
  }, [search, range, isVerified])

  useEffect(() => {
    setSearch('')
    setRange([])
    setIsVerified('')
  }, [selectedFilter])
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
      {selectedFilter === 'Role' ? (
        <Select
          onChange={(e) => setSearch(e)}
          value={search}
          className="w-full lg:w-[268px] h-[43px]"
        >
          {['agentManager', 'agentStaff', 'agentOwner']?.map((item, i) => {
            return <Select.Option key={item}>{item}</Select.Option>
          })}
        </Select>
      ) : selectedFilter === 'Phone' ? (
        <Input
          placeholder={`Search Phone`}
          prefix={<SearchOutlined />}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full lg:w-[268px] h-[43px]"
          value={search}
          onKeyPress={(event) => {
            if (!/[0-9,.]/.test(event.key)) {
              event.preventDefault()
            }
          }}
        />
      ) : selectedFilter === 'Date' ? (
        <RangePicker
          className="w-full h-[45px]"
          // style={{ width: "",height:"100px" }}
          separator={false}
          onChange={(value, dateString) => {
            if (value === null) {
              setStartDate(null)
            }
            setRange(dateString)
          }}
          // disabledDate={(current) => {
          //   let customDate = moment().format("YYYY-MM-DD");
          //   return (
          //     current && current < moment(customDate, "YYYY-MM-DD")
          //   );
          // }}
          onCalendarChange={(value, dateString) => {
            if (value && value[0] === null && value[1] === null) {
              return
            }
            setStartDate(value && value[0])
          }}
        />
      ) : selectedFilter === 'isVerified' ? (
        <Select
          onChange={(e) => {
            setIsVerified(e)
          }}
          value={isVerified}
          className="w-full lg:w-[268px] h-[43px]"
        >
          {['Verified', 'UnVerified']?.map((item, i) => {
            return <Select.Option key={item}>{item}</Select.Option>
          })}
        </Select>
      ) : (
        <Input
          placeholder={`Search ${selectedFilter}`}
          prefix={<SearchOutlined />}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full lg:w-[268px] h-[43px]"
          value={search}
        />
      )}
      <Popover
        placement="bottomRight"
        content={
          <div>
            {[
              'Email',
              'Phone',
              'Full Name',
              'Role',
              'Agency Name',
              'User Code',
              'Date',
              'isVerified',
            ].map((val) => {
              return (
                <div className="mt-[10px] mb-[10px] flex items-center gap-2">
                  <input
                    style={{ border: '1px solid #D0D5DD' }}
                    type="checkbox"
                    className="input bg-[##FFFFFF] h-[18px] w-[18px] cursor-pointer"
                    onChange={() => setSelectedFilter(val)}
                    checked={selectedFilter === val}
                  />
                  <label
                    for=""
                    className="font-normal text-[16px] text-[#667085]"
                  >
                    {val}
                  </label>
                </div>
              )
            })}
          </div>
        }
        trigger="click"
      >
        <Button
          className="btn-primary flex items-center justify-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
          // onClick={showDrawer}
        >
          <img src={FilterIcon} style={{ filter: 'brightness(4)' }} alt="" />
          <span>Filter</span>
        </Button>
      </Popover>
    </div>
  )
}

export default Search
