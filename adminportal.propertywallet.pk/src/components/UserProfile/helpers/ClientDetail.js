import React from 'react'
import clientprofilepic from '../../assest/img/client.png'
import { Col, Row, Spin } from 'antd'

const ClientDetail = () => {
  return (
    <>
      <div className="p-[]">
        <div className="p-[10px]">
          <div className="border bg-[#FFFFFF]  " style={{ padding: '25px' }}>
            <div className="flex gap-11 justify-between">
              <div>
                {' '}
                <img src={clientprofilepic} />{' '}
              </div>
              <div>
                {' '}
                <p className="text-[14px] font-medium text-[#626262] ">
                  Client CNIC
                </p>{' '}
                <p className="font-semibold">45203-5997946-1</p>{' '}
                <p className="text-[14px] font-medium text-[#626262] ">
                  Client Name
                </p>{' '}
                <p className="font-semibold">Syed Ali Akbar Shah</p>{' '}
              </div>
              <div>
                {' '}
                <p className="text-[14px] font-medium text-[#626262] ">
                  Phone No
                </p>{' '}
                <p className="font-semibold"> +923153968946</p>{' '}
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-[14px] font-medium text-[#626262] ">
                  Agency Name
                </p>
                <p>Broad Leaf Homes</p>
                <p className="text-[14px] font-medium text-[#626262] ">Hello</p>
                <p>12 Months</p>
                <p className="text-[14px] font-medium text-[#626262] ">
                  User Age
                </p>
              </div>
              {/* <div>
                                <p>Hello</p>
                                <p>Hello</p>
                                <p>Hello</p>
                                <p>Hello</p>
                                <p>Hello</p>
                            </div>
                            <div>
                                <p>Hello</p>
                                <p>Hello</p>
                                <p>Hello</p>
                                <p>Hello</p>
                                <p>Hello</p>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientDetail
