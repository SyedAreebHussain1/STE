import { Col, Row, Tooltip, Flex, Spin } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import React, { useEffect, useState } from "react";
import CreateSlotDrawer from "./CreateSlotDrawer";
import BookedSlot from './BookedSlot';
import { getAgentCalendarSlotRequestApi } from '../../../../../../../redux/api/LeadManagement';
import { AppDispatch } from '../../../../../../../redux/store';
import viewIcon from "../../../../../../../assets/viewIcon.png"
import expiredIcon from "../../../../../../../assets/expiredIcon.png"
import { errorMessage } from '../../../../../../../utils/message';
import { getFromStorage } from '../../../../../../../utils/storage';

const AvailabliityList = ({ selectDate, selectDateForCreate }: any) => {
  const getAgentCalendarSlotList = useSelector(
    (state: any) => state?.getAgentCalendarSlotList
  );
  const dispatch: AppDispatch = useDispatch()
  const [createSlot, setCreateSlot] = useState<any>(false);
  const [bookedSlot, setBookedSlot] = useState<any>(false);
  const [dataSource, setDataSource] = useState([]);
  const [reschudule, setReschudule] = useState<boolean>(false)
  const getAgentCalendarSlotRequest = useSelector((state: any) => state?.getAgentCalendarSlotRequest);
  useEffect(() => {
    if (getAgentCalendarSlotList.data) {
      const data = getAgentCalendarSlotList.data.map((item: any, i: number) => {
        return item;
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAgentCalendarSlotList?.data]);
  function handleValue(e: boolean) {
    if (!e) {
      setCreateSlot(false)
      setBookedSlot(false)
    }
    setReschudule(false)
  }
  const handleForm = (e: any) => {
    if (e?.status === "Available") {
      setCreateSlot(true)
      setBookedSlot(false)
    } else if (e?.status === "Reserved") {
      setBookedSlot(true)
      setCreateSlot(false)
      getAgentCalendarSlotRequestApi(dispatch, e)
    }
  }
  if (getAgentCalendarSlotList?.loading) {
    return <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl h-[100px] flex justify-center">
      <Flex align="center" gap="middle">
        <Spin size="large" />
      </Flex>
    </div>
  }
  return (
    <div>
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl ">
        <Row gutter={16} className="mt-2">
          {dataSource.length > 0 ? dataSource?.map((item: any, i: number) => {
            return (
              <Col
                sm={8}
                lg={6}
                md={8}
                key={i}
                className="cursor-pointer"
                xs={8}
                onClick={() => getFromStorage("user")?.availablity ? handleForm(item) : errorMessage("Please mark yourself as available before proceeding")}
              >
                <Tooltip onOpenChange={handleValue} overlayStyle={{ width: '390px' }} title={createSlot && item ? <CreateSlotDrawer toggle={createSlot} setToggle={setCreateSlot} data={item} selectDate={selectDate} selectDateForCreate={selectDateForCreate} /> : bookedSlot && getAgentCalendarSlotRequest.data ? <BookedSlot toggle={bookedSlot} setToggle={setCreateSlot} data={item} formSetValue={getAgentCalendarSlotRequest?.data?.Data} selectDate={selectDate} selectDateForCreate={selectDateForCreate} reschudule={reschudule} setReschudule={setReschudule} /> : null} trigger="click" color={"#fff"} placement="rightBottom">
                  <div className={`p-[7px]   mt-3 h-[187px]  border-t-0 border-l-0 border-r-0 border-[#${item?.status === "Expired" ? "F04438" : item?.status === "Available" ? "27A3A3" : "2E90FA"}] border-b-4`}>
                    <div className="mt-2 mb-2">
                      <span
                        className={
                          item?.status === "Expired"
                            ? "bg-[#FEF3F2] text-[.75rem] rounded-xl p-[5px] text-[#F04438]"
                            : item?.status === "Available"
                              ? "bg-[#E9F6F6] text-[.75rem] rounded-xl p-[5px] text-[#27A3A3]"
                              : "bg-[#EFF8FF] text-[.75rem] rounded-xl p-[5px] text-[#2E90FA]"
                        }
                      >
                        {item?.status === "Available" ? "Open" : item?.status}
                      </span>
                    </div>
                    <div className="text-[#98A2B3] mt-3 mb-1">
                      <div>
                        <p className="font-semibold text-[1.2rem]">
                          {moment(item?.meetingStartDateTime).format("h:mm A")} -{" "}
                          {moment(item?.meetingEndDateTime).format("h:mm A")}
                        </p>
                        <p className="font-medium text-[1rem]">
                          {!selectDate
                            ? moment().format("dddd, MMMM YYYY")
                            : selectDate}
                        </p>
                      </div>
                    </div>
                    <div className='relative flex justify-end  min-h-[60px]'>
                      <div className=' absolute w-full left-0 bottom-0' >
                        <div className=' w-full flex justify-end'>
                          {item?.status === "Available" ? <p className=' text-[#27A3A3] text-[30px]'>+</p> : item?.status === "Reserved" ? <img src={viewIcon} alt="" /> : <img src={expiredIcon} alt="" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </Tooltip>
              </Col>
            );
          }) : <div className='flex justify-center'>
            <h3>No data</h3>
          </div>}
        </Row>

      </div>
    </div >
  );
};

export default AvailabliityList;
