import React, { useState } from 'react'

import SearchIcon from '../../../assest/icon/search.png'
import FilterIcon from '../../../assest/icon/filter.png'

import { Button, Divider, Input, Select, Drawer } from 'antd'

import DrawerModal from './FilterModal/DrawerModal'
import { CloseOutlined } from '@ant-design/icons'

const { Option } = Select

const Topallinventories = () => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <div className="flex gap-4 justify-between pt-[26px] pb-[40px] flex-col xl:flex-row">
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="md:w-[333px]">
          <Input
            placeholder="Search e.g home, apartment, plot"
            suffix={<img src={SearchIcon} alt="" />}
            className="rounded-[31px] text-[12px] h-[41px]"
          ></Input>
        </div>
        <div className="md:w-[181px]">
          <div className="my-select-container">
            <Select
              placeholder={'Property Type'}
              className="rounded-[31px] text-[12px] h-[41px] w-full"
            >
              <Option>-</Option>
            </Select>
          </div>
        </div>
        <div className="md:w-[268px]">
          <div className="my-select-container">
            <Select
              placeholder={'Select Agency'}
              className="rounded-[31px] text-[12px] h-[41px] w-full"
              dropdownRender={(menu) => (
                <>
                  <Divider style={{ margin: '8px 0' }} />
                  <div style={{ padding: '0 8px 4px' }} className="w-full">
                    <Input
                      placeholder="Search"
                      className="w-full border-none bg-[#6670850A]"
                    />
                  </div>

                  {menu}
                </>
              )}
            >
              <Option key={1}>-</Option>
              <Option key={1}>-</Option>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <Button
          className="flex items-center text-[14px] gap-2 text-textColor rounded-[41px] h-[41px]"
          onClick={showDrawer}
        >
          <img src={FilterIcon} alt="" />
          <span>Filter</span>
        </Button>
        <Drawer
          title={<h2 className="text-[18px] text-[#000]">Filter</h2>}
          placement="right"
          onClose={onClose}
          open={open}
          extra={
            <div className="flex items-center">
              <span className="text-[14px] text-[#5b5b5b] mr-2">Close All</span>
              <CloseOutlined
                className="cursor-pointer"
                color="#5B5B5B"
                onClick={onClose}
              />
            </div>
          }
          closable={false}
        >
          <DrawerModal />
        </Drawer>
      </div>
    </div>
  )
}

export default Topallinventories
