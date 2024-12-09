import React from 'react'
import { Col, Row } from 'antd'
// import viewdetails from "../../../../assest/img/viewdetails.png";
// import iconview from "../../../../assest/img/iconview.png";

const PageHeadViewDetails = ({ title, stateGetAllProjects }) => {
  return (
    <>
      <div className="bg-[#fff] p-[5px] mb-[2%]">
        <div className="pb-[10px] md:pb-[25px]">
          <h2 className="text-[18px] text-textcolor2 font-semibold">{title}</h2>
        </div>

        <Row className="gap-[15px]" style={{ border: '' }}>
          <Col span={2}>
            {/* <img className="w-[100px] h-[70px]" src={stateGetAllProjects?.masterPlan} /> */}
            <img
              className="w-[100px] h-[70px]"
              src={
                stateGetAllProjects?.propertyWalletProjectPhoto[0]
                  ? stateGetAllProjects?.propertyWalletProjectPhoto[0].photo
                  : ''
              }
            />
          </Col>
          <Col span={2}>
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              {' '}
              Project Name{' '}
              <p className="font-medium text-[15px] leading-[22.5px] text-[#3D4350]">
                {/* {stateGetAllProjects.projectName} */}
                {stateGetAllProjects.projectName.length >= 10
                  ? `${stateGetAllProjects.projectName.substring(0, 8)}...`
                  : stateGetAllProjects.projectName}
              </p>{' '}
            </span>
          </Col>
          <Col span={2}>
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              {' '}
              Project Id{' '}
              <p className="font-medium text-[15px] leading-[22.5px] text-[#3D4350]">
                {/* {stateGetAllProjects.projectName} */}
                {stateGetAllProjects.id}
              </p>{' '}
            </span>
          </Col>
          <Col span={3}>
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              Property Builder{' '}
              <div className="flex gap-[5px]">
                <div>
                  <img
                    className="w-[35px] h-[35px]"
                    src={stateGetAllProjects.BuilderLogo}
                    alt=""
                  />
                </div>
                <p className="font-medium text-[15px] leading-[22.5px] text-[#3D4350]">
                  {stateGetAllProjects?.builderName}
                </p>{' '}
              </div>{' '}
            </span>
          </Col>
          <Col span={3}>
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              No of Inventories{' '}
              <p className="font-medium text-[15px] leading-[22.5px] text-[#3D4350]">
                {stateGetAllProjects?.inventoryCount}
              </p>{' '}
            </span>
          </Col>
          <Col span={3}>
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              Location
              <p className="font-medium text-[15px] leading-[22.5px] text-[#3D4350]">
                {' '}
                {stateGetAllProjects?.address}
              </p>{' '}
            </span>
          </Col>
          <Col span={3}>
            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
              City
              <p className="font-medium text-[15px] leading-[22.5px] text-[#3D4350]">
                {stateGetAllProjects?.city}
              </p>{' '}
            </span>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default PageHeadViewDetails
