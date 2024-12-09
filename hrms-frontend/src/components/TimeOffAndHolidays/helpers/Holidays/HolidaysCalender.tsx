import { useState } from "react";
import { SlPencil } from "react-icons/sl";
import { Button, Checkbox, Form, Input, Tooltip } from "antd";
import circlenotsignIcon from "../../../../assets/circlenotsignicon.svg";

type HolidaysCalenderProps = {
  isTrue: boolean;
  setIsTrue: (e: boolean) => void;
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const HolidaysCalender = ({ isTrue, setIsTrue }: HolidaysCalenderProps) => {
  const [isUpdate, setIsUpdate] = useState<boolean | string>(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className="p-[20px] rounded ">
      {!isUpdate || !isTrue ? (
        <div className="p-[20px] bg-[#fff] shadow-inner inset-0 border border-solid rounded">
          <div className="flex justify-between">
            <div>
              <h3 className="text-[rgb(0,0,0)] text-[.875rem] font-black">
                HOLIDAY CALENDAR
              </h3>
            </div>
            <div>
              <SlPencil
                className="text-[20px] cursor-pointer"
                onClick={() => {
                  setIsUpdate(true), setIsTrue(false);
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="text-[rgb(66,75,99)] font-bold text-[1.25rem]">
              Imported Calendar (Pakistan)
            </h3>
          </div>
          <div className="mt-6">
            <h3 className="text-[rgb(0,0,0)] text-[.875rem] font-black">
              Members
            </h3>
          </div>
          <div className="mt-3">
            <p className="text-[rgb(0,0,0)] text-[.875rem] font-normal">
              All members must belong to a public holiday calendar. Add another
              calendar to re-assign members.
            </p>
          </div>
        </div>
      ) : (
        <div className="p-[20px] bg-[#fff]">
          <div className="flex justify-between">
            <div>
              <h3 className="text-[rgb(0,0,0)] text-[.875rem] font-black">
                HOLIDAY CALENDAR
              </h3>
            </div>
          </div>
          {isTrue ? (
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
            >
              <div className="mt-3 md:mt-10">
                <Form.Item
                  name="calendarName"
                  label="Calendar name"
                  rules={[{ required: false }]}
                >
                  <Input className="h-[50px] w-full md:w-[400px]" />
                </Form.Item>
                <Form.Item
                  name="calendarName"
                  label={" "}
                  rules={[{ required: false }]}
                >
                  <Checkbox value="leave">
                    {/* <span className="flex">
                      Make defualt&nbsp;
                      <span>
                        <Tooltip
                          placement="bottomLeft"
                          color="rgb(66,75,99)"
                          title={
                            <div className="p-[10px]">
                              <p className="text-[rgb(255,255,255)] font-normal text-[.75rem]">
                                By making this the default calendar, members or
                                groups that aren't directly assigned will be put
                                to the default calendar.
                              </p>
                              <p className="text-[rgb(255,255,255)] font-normal text-[.75rem] mt-3">
                                To switch the default calendar to another, make
                                the other calendar the default instead.
                              </p>
                            </div>
                          }
                        >
                          <img src={circlenotsignIcon} alt="" />
                        </Tooltip>
                      </span>
                    </span> */}
                  </Checkbox>
                </Form.Item>
              </div>
              <div className="w-full flex justify-end gap-2">
                <Button
                  className="h-[40px] font-normal "
                  onClick={() => setIsUpdate(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="dark:bg-dark-primary bg-light-primary text-[#fff] border-none h-[40px] font-normal"
                  onClick={() => setIsUpdate(false)}
                  type="primary"
                >
                  Save
                </Button>
              </div>
            </Form>
          ) : (
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
            >
              <div className="mt-3 md:mt-10">
                <Form.Item
                  name="calendarName"
                  label="Calendar name"
                  rules={[{ required: false }]}
                >
                  <Input className="h-[50px] w-full md:w-[400px]" />
                </Form.Item>
                <Form.Item
                  name="calendarName"
                  label={" "}
                  rules={[{ required: false }]}
                >
                  <Checkbox value="leave">
                    <span className="flex">
                      Make defualt&nbsp;
                      <span>
                        <Tooltip
                          placement="bottomLeft"
                          color="rgb(66,75,99)"
                          title={
                            <div className="p-[10px]">
                              <p className="text-[rgb(255,255,255)] font-normal text-[.75rem]">
                                By making this the default calendar, members or
                                groups that aren't directly assigned will be put
                                to the default calendar.
                              </p>
                              <p className="text-[rgb(255,255,255)] font-normal text-[.75rem] mt-3">
                                To switch the default calendar to another, make
                                the other calendar the default instead.
                              </p>
                            </div>
                          }
                        >
                          <img src={circlenotsignIcon} alt="" />
                        </Tooltip>
                      </span>
                    </span>
                  </Checkbox>
                </Form.Item>
              </div>
              <div className="w-full flex justify-end gap-2">
                <Button
                  className="h-[40px] font-normal "
                  onClick={() => [setIsUpdate(false)]}
                >
                  Cancel
                </Button>
                <Button
                  className="dark:bg-dark-primary bg-light-primary text-[#fff] border-none h-[40px] font-normal"
                  onClick={() => setIsUpdate(false)}
                  type="primary"
                >
                  Save
                </Button>
              </div>
            </Form>
          )}
        </div>
      )}
    </div>
  );
};
export default HolidaysCalender;
