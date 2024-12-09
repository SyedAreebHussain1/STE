import { Col, Divider, Input, Row, Checkbox, DatePicker } from "antd";
import { SearchOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAllLeadApi } from "../../../redux/api/LeadManagement";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import moment from "moment";
import dayjs from "dayjs";

const FilterLead = () => {
  const [statusDropDown, setStatusDropDown] = useState(false);
  const [leadsSourceDropDown, setLeadsSourceDropDown] = useState(false);
  const [designationDropDown, setDesignationDropDown] = useState(false);
  const [generatedDateDropDown, setGeneratedDateDropDown] = useState(false);
  const [searchName, setSearchName] = useState<any>("");
  const [status, setStatus] = useState<any>("");
  const [leadsSource, setLeadsSource] = useState<any>("");
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const dispatch: AppDispatch = useDispatch();

  function handleStatusDropDown(item: string) {
    const value = item.split(" ").join("");
    setStatus(item);
  }

  const disabledEndDate = (endDate: any) => {
    return endDate && endDate < startDate;
  };

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };
  function applyNow() {
    getAllLeadApi(
      dispatch,
      { page: 1, limit: 100 },
      searchName,
      status,
      leadsSource
    );
  }
  function handleReset() {
    setStatus("");
    setSearchName("");
    setLeadsSource("");
    getAllLeadApi(dispatch, { page: 1, limit: 10 });
  }
  useEffect(() => {
    getAllLeadApi(
      dispatch,
      { page: 1, limit: 100 },
      searchName,
      status,
      leadsSource
    );
  }, [searchName]);

  return (
    <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl ">
      <Row gutter={16} className="mt-2">
        <Col sm={24} lg={24} md={24} xs={24}>

          {/*  */}
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[#667085] font-medium text-[1rem]">
                Filters
              </span>
            </div>
            <div className="gap-2 flex">
              <button
                className="text-[#F04438] font-medium text-[1rem] "
                onClick={() => handleReset()}
              >
                Reset
              </button>
              <button className="bg-[#27A3A3] gap-[8px] w-[71px] h-[32px] border rounded-lg flex justify-center items-center cursor-pointer">
                <span
                  className="text-[#F9FAFB] text-[1rem] font-medium"
                  onClick={() => applyNow()}
                >
                  Apply
                </span>
              </button>
            </div>
          </div>
        </Col>
        <Divider />
        <Col xs={24} sm={24} lg={24} md={24}>
          <Input
            className="rounded-[8px] h-[44px]"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            prefix={<SearchOutlined />}
            placeholder="Search Lead"
          />
        </Col>
        <Col xs={24} sm={24} lg={24} md={24}>
          <div className="flex justify-between mt-6">
            <span className="text-[#1D2939] font-medium text-[1rem]">
              Status
            </span>
            <span>
              {statusDropDown ? (
                <UpOutlined
                  onClick={() => setStatusDropDown(!statusDropDown)}
                />
              ) : (
                <DownOutlined
                  onClick={() => setStatusDropDown(!statusDropDown)}
                />
              )}
            </span>
          </div>
          <div>
            {statusDropDown &&
              [
                "Interested",
                "Pending",
                "Inprogress",
                "Appointment Aligned",
                "Completed",
                "Untouched",
                "Top Priority",
                "Not Connected",
                "Wrong No",
              ].map((item: string) => {
                return (
                  <div className="mt-2">
                    <Checkbox
                      onChange={() => handleStatusDropDown(item)}
                      checked={status === item}
                      value={status}
                    >
                      {" "}
                      <span className="text-[#475467] text-[1rem] font-medium">
                        {item}
                      </span>
                    </Checkbox>
                  </div>
                );
              })}
          </div>
        </Col>
        <Divider />
        <Col xs={24} sm={24} lg={24} md={24}>
          <div className="flex justify-between ">
            <span className="text-[#1D2939] font-medium text-[1rem]">
              Generated Date
            </span>
            <span>
              {generatedDateDropDown ? (
                <UpOutlined
                  onClick={() =>
                    setGeneratedDateDropDown(!generatedDateDropDown)
                  }
                />
              ) : (
                <DownOutlined
                  onClick={() =>
                    setGeneratedDateDropDown(!generatedDateDropDown)
                  }
                />
              )}
            </span>
          </div>
          <div className="mt-2">
            {generatedDateDropDown && (
              <div className="flex items-center gap-1">
                <DatePicker
                  value={startDate}
                  onChange={(event) => setStartDate(event)}
                  placeholder="Start Date"
                  suffixIcon={null}
                />{" "}
                -
                <DatePicker
                  value={endDate}
                  onChange={(event) => setEndDate(event)}
                  disabledDate={disabledEndDate}
                  placeholder="End Date"
                  disabled={!startDate}
                  suffixIcon={null}
                />
              </div>
            )}
          </div>
        </Col>
        <Divider />
        <Col xs={24} sm={24} lg={24} md={24}>
          <div className="flex justify-between ">
            <span className="text-[#1D2939] font-medium text-[1rem]">
              Leads Source
            </span>
            <span>
              {leadsSourceDropDown ? (
                <UpOutlined
                  onClick={() => setLeadsSourceDropDown(!leadsSourceDropDown)}
                />
              ) : (
                <DownOutlined
                  onClick={() => setLeadsSourceDropDown(!leadsSourceDropDown)}
                />
              )}
            </span>
          </div>
          <div>
            {leadsSourceDropDown &&
              [
                "App",
                "Digital Catalogue",
                "Web",
                "Digital Catalogue/Requirement",
                "Digital Catalogue/Review",
              ].map((item: string) => {
                return (
                  <div className="mt-2">
                    <Checkbox
                      onChange={() => setLeadsSource(item.toLowerCase())}
                      checked={leadsSource === item.toLowerCase()}
                      value={leadsSource}
                    >
                      {" "}
                      <span className="text-[#475467] text-[1rem] font-medium">
                        {item}
                      </span>
                    </Checkbox>
                  </div>
                );
              })}
          </div>
        </Col>
        <Divider />
        <Col xs={24} sm={24} lg={24} md={24}>
          <div className="flex justify-between ">
            <span className="text-[#1D2939] font-medium text-[1rem]">
              Designation
            </span>
            <span>
              {designationDropDown ? (
                <UpOutlined
                  onClick={() => setDesignationDropDown(!designationDropDown)}
                />
              ) : (
                <DownOutlined
                  onClick={() => setDesignationDropDown(!designationDropDown)}
                />
              )}
            </span>
          </div>
          <div>
            {designationDropDown &&
              ["Owner", "Manager", "Staff"].map((item: string) => {
                return (
                  <div className="mt-2">
                    <Checkbox onChange={() => handleStatusDropDown(item)}>
                      {" "}
                      <span className="text-[#475467] text-[1rem] font-medium">
                        {item}
                      </span>
                    </Checkbox>
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default FilterLead;
