import { useEffect, useRef, useState } from "react";
import { Button, Input, Pagination, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import facebook from "../../../../../assets/facebookicon.png";
// import facebook from "../../../../../assets/facebookicon.png";
import { getFromStorage } from "../../../../../utils/storage";
import RoundedButton from "../../../../../helpers/button/RoundedButton";

const CompaignsLeft = ({
  items,
  setBgBlurBox,
  selectCampaign,
  setSelectCampaign,
  totalItems = 0,
  pageLimit,
  onChange,
  onSearch,
  loading,
  searchValue,
  setSearchValue,
}: any) => {
  const ref: any = useRef();

  // when Search
  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      onSearch(searchValue);
    }, 1000);
  }, [searchValue]);
  return (
    <div className="w-full overflow-hidden ">
      <div className="flex gap-1 w-full justify-between sm:flex-nowrap md:flex-wrap">
        <div className=" w-full items-center mb-4">
          <RoundedButton
            onClick={() => setBgBlurBox(true)}
            title={
              <div className="flex items-center gap-1 justify-center">
                <span className="text-[1rem]  ">+</span>
                <span className=" text-[.8125rem] font-semibold">
                  Create Campaign
                </span>
              </div>
            }
            className="dark:bg-dark-primary dark:text-white w-full"
            sm
          />
        </div>
      </div>
      <div className="w-full  mb-4">
        <Input
          className="h-[40px] rounded-[8px] w-full dark-input"
          placeholder="Search"
          value={searchValue || ""}
          onChange={(e) => setSearchValue(e.target.value)}
          prefix={<SearchOutlined className="h-[13.51px] w-[13.51px]" />}
        />
      </div>
      {loading ? (
        <div className="flex items-center h-16 w-full justify-center">
          <Spin spinning={loading}></Spin>
        </div>
      ) : (
        items?.map((item: any, i: number) => {
          return (
            <div
              className="w-full mt-4 mb-4"
              key={item.id}
              onClick={() => setSelectCampaign(item)}
            >
              <div
                className={
                  selectCampaign?.id === item.id
                    ? `border min-h-[94px] dark:border-dark-secondary dark:text-white text-primary border-[#5f74b8] light:bg-[rgb(255,255,255)] rounded-[10px] p-[12px] cursor-pointer`
                    : `border min-h-[94px] light:text-black border-[#EAECF0] dark:text-white  light:bg-[rgb(255,255,255)] rounded-[10px] p-[12px] cursor-pointer`
                }
              >
                <h3
                  className={
                    selectCampaign?.id === item.id
                      ? "text-[#5f74b8]  text-[1rem] font-medium"
                      : "text-[#475467] dark:text-white text-[1rem] font-medium"
                  }
                >
                  {item.title}
                </h3>
                {item?.isMeta && (
                  <div
                    className={`text-[.8125rem] text-[#475467] font-medium flex ${
                      item?.icon ? "gap-1" : ""
                    } items-center`}
                  >
                    {" "}
                    <div>
                      <img src={facebook} alt="" width={25} />
                    </div>
                    <div>{/* <img src={facebook} alt="" width={25} /> */}</div>
                    <h1>Facebook</h1>
                  </div>
                )}

                <p className="text-[.75rem] text-[#98A2B3] font-medium mt-1">
                  Created:
                  {item?.createdAt
                    ? dayjs(item?.createdAt).format("ddd, DD YYYY hh:mm A")
                    : "-"}
                </p>
              </div>
            </div>
          );
        })
      )}
      <Pagination
        className="mb-4 lg:mb-4 flex justify-center "
        current={pageLimit?.page}
        total={totalItems}
        hideOnSinglePage
        pageSize={pageLimit?.limit}
        showSizeChanger={false}
        responsive={true}
        simple
        onChange={onChange}
      />
    </div>
  );
};

export default CompaignsLeft;
