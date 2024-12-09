import React, { useState } from "react";
import { Drawer, Space, Col, Row, Button, Form, Select } from "antd";
import type { DatePickerProps } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import TextInput from "../../../../helpers/inputs/TextInput";
import { DatePicker } from "antd";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const { RangePicker } = DatePicker;
type AddHolidayDrawerProps = {
  open?: boolean;
  setOpen?: any;
};

const AddHolidayDrawer: React.FC<AddHolidayDrawerProps> = ({
  open,
  setOpen,
}: AddHolidayDrawerProps) => {
  const [placement] = useState<DatePickerProps["placement"]>("topLeft");
  const [addShortened, setAddShortened] = useState<number[]>([]);
  function handleAdd(e: number) {
    setAddShortened((prev) => {
      return [...prev, e];
    });
  }
  function hanldeDelete(e: number) {
    addShortened.splice(e, 1);
    setAddShortened((prev) => {
      return [...prev];
    });
  }

  return (
    <>
      <Drawer
        title={
          <span className="text-[1.25rem] text-[rgba(0,0,0,0.87)] font-bold">
            Add Holiday
          </span>
        }
        closable={false}
        placement="right"
        width={720}
        onClose={() => setOpen(false)}
        open={open}
        footer={
          <div className="flex justify-end  gap-3">
            <Button
              onClick={() => setOpen(false)}
              className="h-[40px] font-medium"
            >
              Cancel
            </Button>
            <Button
              className="dark:bg-dark-primary bg-light-primary text-[#fff] border-none h-[40px] font-normal"
              onClick={() => setOpen(false)}
              type="primary"
            >
              Save
            </Button>
          </div>
        }
        className="bg-[#fff]"
        extra={
          <Space>
            <CloseOutlined onClick={() => setOpen(false)} />
          </Space>
        }
      >
        <Form wrapperCol={{ span: 24 }} layout="vertical">
          <Row gutter={10}>
            <Col lg={24} sm={24} md={24}>
              <TextInput
                className="h-[50px] w-full "
                placeholder="Holiday Name"
                name="holidayName"
                label={
                  <span className="mt-[10px] text-[rgb(0,0,0)] text-[.875rem] font-normal  ">
                    Holiday Name
                  </span>
                }
                rules={[{ required: false }]}
              />
            </Col>
            <Col lg={24} sm={24} md={24}>
              <span className="mt-[10px] text-[rgb(0,0,0)] text-[.875rem] font-normal  !mb-[3px]">
                Date
              </span>
              <RangePicker className="w-full h-[50px]" placement={placement} />
            </Col>
            {addShortened.map((item: number, i) => {
              return (
                <Col
                  key={item}
                  xs={24}
                  lg={24}
                  sm={24}
                  md={24}
                  className="!mt-10"
                >
                  <Row gutter={16} className="flex items-center">
                    <Col xs={22} lg={12} sm={12} md={12}>
                      <span className="mt-[10px] text-[rgb(0,0,0)] text-[.875rem] font-normal  mb-1">
                        Shortened day rule
                      </span>
                      <Select
                        className="w-full h-[50px]"
                        placeholder="Select a property"
                      >
                        <Select.Option value="sample">Sample</Select.Option>
                      </Select>
                    </Col>
                    <Col xs={2} lg={12} sm={12} md={12}>
                      <div className="flex justify-end">
                        <RiDeleteBin6Line
                          className="text-[20px] cursor-pointer"
                          onClick={() => hanldeDelete(i)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              );
            })}
            <Col sm={24} lg={24} md={24}>
              <div className="mt-[10px]">
                <Button
                  type="text"
                  className="text-primary text-[.875rem] border-none h-[40px] font-bold flex gap-2 items-center"
                  onClick={() => handleAdd(addShortened.length + 1)}
                >
                  <FaPlus className="text-[18px]" /> Add shortened day rule
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddHolidayDrawer;
