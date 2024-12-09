import React from 'react'

export const BoxesOverview = () => {
  return (
     <div className="block md:flex gap-4 mt-10">
            <Cards
              icon={
                <CiDollar
                  size={25}
                  style={{ backgroundColor: "#5BBCFF", color: "white" }}
                  className="rounded-full "
                />
              }
              para={"Total Balance"}
            />
            <Cards
              icon={
                <CiBank
                  size={25}
                  style={{ color: "green" }}
                  className="rounded-full"
                />
              }
              para={"Total Spend"}
            />
            <Cards
              icon={
                <GoArrowUpRight
                  size={25}
                  style={{ backgroundColor: "#C40C0C", color: "white" }}
                  className="rounded-full"
                />
              }
              para={"Total Withdrawn"}
            />
          </div> 
  )
}
