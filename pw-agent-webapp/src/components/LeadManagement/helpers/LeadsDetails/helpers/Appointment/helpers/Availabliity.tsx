import dayjs from "dayjs";
import { Calendar, Checkbox, Col, Radio, Row, Select, Switch, theme, } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import dayLocaleData from "dayjs/plugin/localeData";
import { getAgentCalendarSlotListApi, updateUserAvailabilityApi } from "../../../../../../../redux/api/LeadManagement";
import { useDispatch, } from "react-redux";
import { AppDispatch } from "../../../../../../../redux/store";
import { useEffect, useState } from "react";
import { getFromStorage, setInStorage } from "../../../../../../../utils/storage";
import historyIcon from "../../../../../../../assets/historyIcon.png"
import "dayjs/locale/zh-cn";
import { errorMessage } from "../../../../../../../utils/message";
dayjs.extend(dayLocaleData);

const Availabliity = ({ setSelectDate, setSelectDateForCreate, setHistory }: any) => {
  const { token } = theme.useToken();
  const dispatch: AppDispatch = useDispatch();
  const [storedValue, setStoredValue] = useState(getFromStorage("user")?.availablity);
  const onPanelChange = (value?: Dayjs, mode?: CalendarProps<Dayjs>["mode"]) => {
    if (getFromStorage("user")?.availablity) {
      setSelectDate(value?.format("dddd, MMMM YYYY"));
      setSelectDateForCreate(value);
      getAgentCalendarSlotListApi(dispatch, value?.format("YYYY-MM-DD"));
    } else {
      errorMessage("Please mark yourself as available before proceeding")
    }
  };
  useEffect(() => {
    getAgentCalendarSlotListApi(dispatch, dayjs().format("YYYY-MM-DD"));
  }, [])
  const wrapperStyle: React.CSSProperties = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  function onSuccess(res: any) {
    let user = getFromStorage("user")
    if (res?.isAvailable === true) {
      user.availablity = true
      setInStorage("user", user)
      setStoredValue(res?.isAvailable);
    }
    if (res?.isAvailable === false) {
      user.availablity = false
      setStoredValue(res?.isAvailable);
      setInStorage("user", user)
    }
  }
  useEffect(() => {
    const valueFromLocalStorage = getFromStorage("user")?.availablity;
    if (valueFromLocalStorage) {
      setStoredValue(getFromStorage("user")?.availablity);
    }
  }, []);

  return (
    <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl ">
      <Row gutter={16} className="mt-2">
        <Col sm={24} lg={24} md={24} xs={24}>
          <div className="flex justify-between items-center p-[3px] mb-2">
            <span className="text-[#667085] font-medium text-[1rem]">
              Availabliity
            </span>
            <span className="text-[#667085] font-medium text-[1rem]">
              <Switch
                checked={storedValue ? true : false}
                style={{ backgroundColor: storedValue ? '#27A3A3' : 'gray' }}
                onChange={() => {
                  if (getFromStorage("user")?.availablity === true) {
                    updateUserAvailabilityApi(dispatch, {
                      "isAvailable": false
                    }, onSuccess)
                  }
                  else {
                    updateUserAvailabilityApi(dispatch, {
                      "isAvailable": true
                    }, onSuccess)
                  }
                }
                }
              />
            </span>
          </div>
          <div style={wrapperStyle}>
            <Calendar
              fullscreen={false}
              headerRender={({ value, type, onChange, onTypeChange }) => {
                const start = 0;
                const end = 12;
                const monthOptions = [];

                let current = value.clone();
                const localeData = value.localeData();
                const months = [];
                for (let i = 0; i < 12; i++) {
                  current = current.month(i);
                  months.push(localeData.monthsShort(current));
                }

                for (let i = start; i < end; i++) {
                  monthOptions.push(
                    <Select.Option key={i} value={i} className="month-item">
                      {months[i]}
                    </Select.Option>
                  );
                }

                const year = value.year();
                const month = value.month();
                const options = [];
                for (let i = year - 10; i < year + 10; i += 1) {
                  options.push(
                    <Select.Option key={i} value={i} className="year-item">
                      {i}
                    </Select.Option>
                  );
                }
                return (
                  <div className="p-[8px]">
                    <Row gutter={8}>
                      <Col>
                        <Radio.Group
                          size="small"
                          onChange={(e) => onTypeChange(e.target.value)}
                          value={type}
                        >
                          {/* <Radio.Button value="month">Month</Radio.Button>
                          <Radio.Button value="year">Year</Radio.Button> */}
                        </Radio.Group>
                      </Col>
                      <Col>
                        <Select
                          size="small"
                          dropdownMatchSelectWidth={false}
                          className="my-year-select"
                          value={year}
                          onChange={(newYear) => {
                            const now = value.clone().year(newYear);
                            onChange(now);
                          }}
                        >
                          {options}
                        </Select>
                      </Col>
                      <Col>
                        <Select
                          size="small"
                          dropdownMatchSelectWidth={false}
                          value={month}
                          onChange={(newMonth) => {
                            const now = value.clone().month(newMonth);
                            onChange(now);
                          }}
                        >
                          {monthOptions}
                        </Select>
                      </Col>
                    </Row>
                  </div>
                );
              }}
              onChange={onPanelChange}
            />
          </div>
        </Col>
        <Col xl={24} sm={24} md={24} lg={24} className="mt-2">
          <div className="flex items-center gap-2">
            <div
              className="mb-2 mt-1"
              style={{
                borderLeft: "3px solid #27A3A3",
                height: "50px",
              }}
            ></div> <Checkbox className="text-[#475467] text-[1rem] font-medium">Open Slots</Checkbox>
          </div>
        </Col>
        <Col xl={24} sm={24} md={24} lg={24}>
          <div className="flex items-center gap-2">
            <div
              className="mb-2 mt-1"
              style={{
                borderLeft: "3px solid #2E90FA",
                height: "50px",
              }}
            ></div> <Checkbox className="text-[#475467] text-[1rem] font-medium">Booked</Checkbox>
          </div>
        </Col>
        <Col xl={24} sm={24} md={24} lg={24}>
          <div className="flex items-center gap-2">
            <div
              className="mb-2 mt-1"
              style={{
                borderLeft: "3px solid #F04438",
                height: "50px",
              }}
            ></div> <Checkbox className="text-[#475467] text-[1rem] font-medium">Expired</Checkbox>
          </div>
        </Col>
        <Col xl={24} sm={24} md={24} lg={24}>
          <div className="flex items-center gap-2">
            <div
              className="mb-2 mt-1"
              style={{
                borderLeft: "3px solid #7A5AF8",
                height: "50px",
              }}
            ></div> <Checkbox className="text-[#475467] text-[1rem] font-medium">Past bookings</Checkbox>
          </div>
        </Col>
        <hr />
        <Col className="mt-3">
          <div className="flex gap-1 items-center cursor-pointer" onClick={() => setHistory(true)}>
            <img src={historyIcon} alt="" className="w-[20px] h-[20px]" />  <span className="text-[#475467] font-medium text-[1.2rem]">
              History
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Availabliity;
