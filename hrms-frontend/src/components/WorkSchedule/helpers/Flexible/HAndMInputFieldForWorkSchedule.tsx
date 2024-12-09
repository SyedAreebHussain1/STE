import { useEffect, useRef, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { daysEnum } from "../AddandEditWorkScheduleDrawer";
import { Col, Row } from "antd";
import { Form } from "antd";

const HAndMInputFieldForWorkSchedule = ({
  name,
  isRest,
  form,
}: {
  name: daysEnum;
  isRest: boolean;
  form: any;
}) => {
  const minutesInputRef = useRef<HTMLInputElement>(null);
  const hourInputRef = useRef<HTMLInputElement>(null);
  const [hourVal, setHourVal] = useState(0);
  const [minVal, setMinVal] = useState(0);

  const minutes = Form.useWatch(`${name}-minutes`, form);
  const hours = Form.useWatch(`${name}-hours`, form);

  useEffect(() => {
    setHourVal(hours || 0);
  }, [hours]);

  useEffect(() => {
    setMinVal(minutes || 0);
  }, [minutes]);

  const handleHourChange = () => {
    minutesInputRef?.current?.focus();
  };
  return (
    <div className="mt-[15px]">
      <Row gutter={10} align={"middle"}>
        <Col xs={8}>
          <h1 className="text-[1rem] text-[#667085] dark:text-[#D0D5DD]">
            {name}
          </h1>
        </Col>
        {isRest ? (
          <Col>
            <h2 className="text-[0.813rem] text-[#667085] dark:text-white">
              Rest Day
            </h2>
          </Col>
        ) : (
          <Col xs={16}>
            <Form.Item
              name={`${name}-hours-minutes-component`}
              className="h-[100%] m-0 text-[1rem]"
            >
              <div
                className="flex justify-between items-center h-[50px] rounded-md border text-[1rem] dark:border-dark-borderColor"
                onClick={() => {
                  hourInputRef?.current?.focus();
                }}
              >
                <div className="flex item-center gap-2 pl-[10px]">
                  <Form.Item
                    name={`${name}-hours`}
                    rules={[{ required: false }]}
                    className="h-[100%] m-0 text-[1rem]"
                  >
                    <input className="hidden" />
                  </Form.Item>
                  <div className="flex items-center ">
                    <input
                      ref={hourInputRef}
                      onKeyPress={(event) => {
                        if (event.key === "Enter") {
                          handleHourChange();
                        }
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                          return;
                        }
                        if (hourVal > 9) {
                          if (hourVal !== 24) {
                            form.setFieldValue(`${name}-minutes`, event.key);
                          }
                          handleHourChange();
                        }
                      }}
                      value={hourVal}
                      onChange={(e) => {
                        const number = parseInt(e.target.value);
                        form.setFieldValue(`${name}-minutes`, 0);
                        if (number == 0) {
                          handleHourChange();
                        } else if (number > 24) {
                          form.setFieldValue(`${name}-hours`, 24);
                          handleHourChange();
                        } else if (number > 10) {
                          form.setFieldValue(`${name}-hours`, number);
                          handleHourChange();
                        } else if (number > 0) {
                          form.setFieldValue(`${name}-hours`, number);
                        } else if (number !== 0) {
                          form.setFieldValue(`${name}-hours`, 0);
                        }
                      }}
                      maxLength={2}
                      className="w-[20px] !border-[0] !outline-none p-[0] text-right  focus:border-[0] mx-[2px] dark:text-white bg-transparent"
                    ></input>

                    <span className="font-bold text-[#00000050] dark:text-white">
                      h
                    </span>
                  </div>

                  <Form.Item
                    name={`${name}-minutes`}
                    rules={[{ required: false }]}
                    className="h-[100%] m-0 text-[1rem]"
                  >
                    <input className="hidden" />
                  </Form.Item>
                  <div className="flex items-center">
                    <input
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter")
                          minutesInputRef?.current?.blur();
                        if (event.key === "Backspace" && minVal == 0) {
                          event.preventDefault();
                          hourInputRef?.current?.focus();
                        }
                      }}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      value={minVal}
                      onChange={(e) => {
                        if (hourVal == 24) {
                          return;
                        }
                        const number = parseInt(e.target.value);
                        if (number > 59) {
                          form.setFieldValue(`${name}-minutes`, 59);
                        } else if (number > 0) {
                          form.setFieldValue(`${name}-minutes`, number);
                        } else if (number !== 0) {
                          form.setFieldValue(`${name}-minutes`, 0);
                        }
                      }}
                      ref={minutesInputRef}
                      maxLength={2}
                      className="w-[20px] !border-[0] !outline-none p-[0] text-right focus:border-[0] mx-[2px] dark:text-white bg-transparent"
                    ></input>

                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleHourChange();
                      }}
                      className="font-bold text-[#00000050] dark:text-white"
                    >
                      m
                    </span>
                  </div>
                </div>
                <div className=" px-[10px] text-[#00000070] text-[1rem]">
                  <IoTimeOutline />
                </div>
              </div>
            </Form.Item>
          </Col>
        )}
      </Row>
    </div>
  );
};
export default HAndMInputFieldForWorkSchedule;
