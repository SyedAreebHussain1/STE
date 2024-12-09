import React from 'react'
import UserInfoField from './UserInfoField'
// import ImgLogo from "../../../assest/img/hello.png";
import AgencyName from '../../../../assest/icon/agencyName.png'
// import AgencyLocation from "../../../../assest/icon/agencyLocation.png";
import TotalRevenue from '../../../../assest/icon/totalRevenue.png'
import NoOfStaff from '../../../../assest/icon/noOfStaff.png'
import Maneger from '../../../../assest/icon/maneger.png'
import NoOfProject from '../../../../assest/icon/project.png'
import NoOfSold from '../../../../assest/icon/noOfSold.png'
import TotalCommision from '../../../../assest/icon/totalCommison.png'

const AgenciesAndInventoryDetails = () => {
  return (
    <div className="bg-white rounded-lg h-[315px]">
      <div className="pt-[20px] px-[24px] pb-[58px]">
        <div className="flex justify-between items-center pb-[40px]">
          <h4 className="text-[15px] text-[#3D4350]">
            Staff & Inventory Details
          </h4>
        </div>
        <div className="flex justify-between">
          <div className=" flex flex-col justify-between gap-[37px]">
            <UserInfoField title="No of Staff" value="08" img={NoOfStaff} />
            <UserInfoField
              title="Commission Earned"
              value="10,000,00"
              img={TotalCommision}
            />
          </div>
          <div className=" flex flex-col justify-between gap-[37px]">
            <UserInfoField title="No of Managers" value="02" img={Maneger} />
            <UserInfoField
              title="No of Total Inventories"
              value="12"
              img={NoOfProject}
            />
          </div>
          <div className=" flex flex-col justify-between gap-[37px]">
            <UserInfoField
              title="Total Revenue"
              value="10,000,00"
              img={TotalRevenue}
            />
            <UserInfoField
              title="No of Sold Inventories"
              value="08"
              img={NoOfSold}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgenciesAndInventoryDetails
