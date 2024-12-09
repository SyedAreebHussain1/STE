import React, { useEffect, useRef, useState } from "react";
import { Drawer, Space, Button, Form, Row, Col } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import TextInput from "../../../helpers/inputs/TextInput";
import CompansationWorkScheduleTabs from "./CompansationWorkScheduleTabs";
import FixedScheduleComponent from "./Fixed/FixedScheduleComponent";
import FlexibleScheduleComponent from "./Flexible/FlexibleScheduleComponent";
import {
  createWorkScheduleApi,
  editWorkScheduleApi,
} from "../../../redux/api/WorkSchedule";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import RoundedButton from "../../../helpers/button/RoundedButton";

type AddAndEditWorkScheduleProps = {
  open?: boolean;
  drawerHandler: () => void;
  data?: any;
};
export enum daysEnum {
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday",
}
const AddAndEditWorkScheduleDrawer: React.FC<AddAndEditWorkScheduleProps> = ({
  open,
  drawerHandler,
  data,
}: AddAndEditWorkScheduleProps) => {
  const [activeCompensation, setActiveCompensation] = useState<number>(0);
  const [stateFixed, setStateFixed] = useState<daysEnum[]>([]);
  const [stateFlexible, setStateFlexible] = useState<daysEnum[]>([]);

  const [isSetDefault, setIsSetDefault] = useState<boolean>(false);
  const componentMounted = useRef<boolean>(false);
  const [form] = Form.useForm();
  const dispatch: AppDispatch = useDispatch();
  const AddWorkSchedule = useSelector(
    (state: RootState) => state.AddWorkSchedule
  );
  const editWorkSchedule = useSelector(
    (state: RootState) => state.editWorkSchedule
  );

  function handleTabsState(value: number) {
    setActiveCompensation(value);
  }

  const onFinish = (val: any) => {
    let body: any;
    if (activeCompensation === 0) {
      body = {
        isSetDefault: isSetDefault,
        title: val.name,
        workSheetType: "Fixed",
        workSheetFixedDetailDto: [],
      };
      stateFixed.forEach((item) =>
        body.workSheetFixedDetailDto.push({
          workStartTimes: val[`${item}-workStartTimes`],
          workEndTimes: val[`${item}-workEndTimes`],
          dayNames: item,
        })
      );
    } else {
      for (let item of stateFlexible) {
        if (!val[`${item}-hours`] && !val[`${item}-minutes`]) {
          form.setFields([
            {
              name: `${item}-hours-minutes-component`,
              errors: ["field is Required"],
            },
          ]);
          return;
        } else {
          form.setFields([
            {
              name: `${item}-hours-minutes-component`,
              errors: [""],
            },
          ]);
        }
      }

      body = {
        isSetDefault: isSetDefault,
        title: val.name,
        workSheetType: "Flexible",
        workSheetFlexibleDetailDto: [],
      };
      stateFlexible.forEach((item) =>
        body.workSheetFlexibleDetailDto.push({
          hours: val[`${item}-hours`],
          minutes: val[`${item}-minutes`],
          dayNames: item,
        })
      );
    }
    if (data) {
      editWorkScheduleApi(dispatch, data.id, body, onSuccess);
    } else {
      createWorkScheduleApi(dispatch, body, onSuccess);
    }
  };

  const onSuccess = drawerHandler;
  // when edit
  useEffect(() => {
    if (componentMounted.current === false && data) {
      setIsSetDefault(data?.isSetDefault);
      form.setFieldValue("name", data.title);
      if (data.workSheetType == "Fixed") {
        setActiveCompensation(0);
        data?.workSheetFixedDetail.forEach((val: any) => {
          setStateFixed((pre) => [...pre, val.dayName]);
          form.setFieldValue(
            `${val.dayName}-workStartTimes`,
            dayjs(val.workStartTime)
          );
          form.setFieldValue(
            `${val.dayName}-workEndTimes`,
            dayjs(val.workEndTime)
          );
        });
      } else if (data.workSheetType == "Flexible") {
        setActiveCompensation(1);
        data?.workSheetFlexibleDetail.forEach((val: any) => {
          setStateFlexible((pre) => [...pre, val.dayName]);
          form.setFieldValue(`${val.dayName}-hours`, val.hour);
          form.setFieldValue(`${val.dayName}-minutes`, val.minute);
        });
      }
      componentMounted.current = true;
    }
  }, []);

  return (
    <>
      <Drawer
        title={
          <span className="text-[1.25rem] text-[rgba(0,0,0,0.87)] font-bold dark:text-white">
            {data ? "Edit" : "Add"} Schedule
          </span>
        }
        closable={false}
        placement="right"
        width={500}
        onClose={drawerHandler}
        open={open}
        className="bg-[#fff]"
        extra={
          <Space>
            <CloseOutlined onClick={drawerHandler} />
          </Space>
        }
      >
        <Form
          wrapperCol={{ span: 24 }}
          layout="vertical"
          onFinish={onFinish}
          name="add-schedule"
          form={form}
        >
          <Row gutter={10}>
            <Col xs={24} lg={24} sm={24} md={24}>
              <TextInput
                className="h-[50px] w-full text-[1rem] font-normal dark-input"
                placeholder="Name"
                name="name"
                label={
                  <span className="mt-[10px] text-[rgb(0,0,0)] text-[.875rem] font-normal  mb-[5px] dark:text-[#D0D5DD]">
                    Schedule Name
                  </span>
                }
                rules={[{ required: true }]}
              />
              <div className="mt-[15px]">
                <div className="text-[rgb(0,0,0)] text-[.875rem] font-normal  mb-[5px] dark:text-[#D0D5DD]">
                  <span>Work Arragement</span>
                </div>

                <CompansationWorkScheduleTabs
                  activeCompensation={activeCompensation}
                  handleTabsState={handleTabsState}
                  items={[
                    {
                      label: "Fixed",
                      component: (
                        <>
                          <FixedScheduleComponent
                            required={activeCompensation == 0}
                            state={stateFixed}
                            setState={setStateFixed}
                          />
                        </>
                      ),
                    },
                    {
                      label: "Flexible",
                      component: (
                        <>
                          <FlexibleScheduleComponent
                            form={form}
                            state={stateFlexible}
                            setState={setStateFlexible}
                          />
                        </>
                      ),
                    },
                  ]}
                />
              </div>
            </Col>
            <div className="flex justify-end  gap-3 mt-[20px] w-[100%] ">
              <RoundedButton
                onClick={drawerHandler}
                title={"Cancel"}
                className="dark:bg-dark-primary dark:text-white w-full"
              />

              <RoundedButton
                loading={editWorkSchedule.loading || AddWorkSchedule.loading}
                title={<>{data ? "Update" : "Create"} Schedule</>}
                className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white w-full"
                htmlType="submit"
              />
            </div>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AddAndEditWorkScheduleDrawer;
