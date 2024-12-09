import React from 'react'
import CheckboxField from '../../../../../utils/components/InputFields/CheckboxField'
import { Button, Checkbox, Form } from 'antd'

const AssignLead = ({ getAllInventory }) => {
  return (
    <div className="bg-white px-[12px] py-[30px] h-full">
      <h2 className="text-center text-[#667085] text-xs">
        {getAllInventory?.leadInventory?.length === 0 ? 'No Lead' : 'Leads'}
      </h2>

      <div className="flex items-center justify-between mt-[10px]">
        <Form.Item name={'leads'}>
          <Checkbox.Group style={{ width: '100%' }}>
            <div className="flex flex-wrap gap-[22px] justify-center 2xl:justify-normal">
              {getAllInventory?.leadInventory?.map((opt, i) => {
                return (
                  <div className="relative">
                    <div className="flex items-center gap-[10px]">
                      <div
                        className="border bg-[#147AD610] !rounded-[50%] border-white w-[35px] h-[35px] flex justify-center items-center"
                        style={{
                          position: 'relative',
                        }}
                      >
                        <span className="">
                          {opt?.lead?.client?.name.split(' ')?.length > 1
                            ? `${opt?.lead?.client?.name
                                .split(' ')[0][0]
                                ?.toUpperCase()} ${
                                opt?.lead?.client?.name.split(' ')[1][0]
                                  ? opt?.lead?.client?.name
                                      .split(' ')[1][0]
                                      ?.toUpperCase()
                                  : ''
                              }`
                            : opt?.lead?.client?.name
                                .split(' ')[0][0]
                                ?.toUpperCase()}
                        </span>
                      </div>

                      <span className="text-[16px]">
                        {opt?.lead?.client?.name}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </Checkbox.Group>
        </Form.Item>
      </div>
    </div>
  )
}

export default AssignLead
