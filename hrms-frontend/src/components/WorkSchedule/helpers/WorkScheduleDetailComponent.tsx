import { Button, Col, Divider, Input, Row } from "antd";
import { useEffect, useState } from "react";
import FixedWorkArragementDaysDetails from "./Fixed/FixedWorkArragementDaysDetails";
import AddAndEditWorkScheduleDrawer, {
  daysEnum,
} from "./AddandEditWorkScheduleDrawer";
import FlexibleWorkArragementDaysDetails from "./Flexible/FlexibleWorkArragementDaysDetails";
import { MdOutlineModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { getWorkScheduleByIdApi } from "../../../redux/api/WorkSchedule";
import { GetWorkScheduleByIdClear } from "../../../redux/slices/WorkSchedule/GetWorkScheduleByIdSlice";
import RoundedButton from "../../../helpers/button/RoundedButton";

type Props = {
  id: any;
};

const WorkScheduleDetailComponent = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const drawerHandler = () => {
    setOpen((pre) => !pre);
  };
  const editWorkSchedule = useSelector(
    (state: RootState) => state.editWorkSchedule
  );
  const GetWorkScheduleById = useSelector(
    (state: RootState) => state.GetWorkScheduleById
  );

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (id) {
      getWorkScheduleByIdApi(dispatch, id);
    }
    return () => {
      dispatch(GetWorkScheduleByIdClear());
    };
  }, [editWorkSchedule, id]);
  return (
    <div className="p-[20px] h-full  border-none rounded-[10px] bg-white dark:bg-dark-grayprimary">
      {open && (
        <AddAndEditWorkScheduleDrawer
          open={open}
          drawerHandler={drawerHandler}
          data={GetWorkScheduleById?.data}
        />
      )}
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <h1 className="text-[1.2rem] font-semibold mt-[5px] dark:text-white">
            {GetWorkScheduleById?.data?.title} Details
          </h1>
        </Col>
        <Col>
          <div className="pb-4 pt-3">
            <RoundedButton
              onClick={drawerHandler}
              title={
                <div className="flex items-center">
                  <span className=" pr-[2px] flex">
                    <MdOutlineModeEdit />
                  </span>
                  Edit Schedule
                </div>
              }
              className="dark:bg-dark-primary dark:text-white"
              disabled={!id}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={20} className="mt-[10px]">
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="mt-[10px]">
            <span className="mt-[10px] text-[#667085] text-[1rem] font-medium  mb-[5px] dark:text-[#D0D5DD]">
              Schedule Name
            </span>
            <div className="my-[5px]">
              <Input
                size="large"
                className="dark-input"
                disabled
                value={GetWorkScheduleById?.data?.title}
              />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="mt-[10px]">
            {GetWorkScheduleById?.data?.workSheetType && (
              <span className="mt-[10px] text-[#667085] dark:text-[#D0D5DD] text-[1rem] font-medium  mb-[5px]">
                Work Arragement
              </span>
            )}
            <div>
              <h2 className="text-[1.17rem] font-semibold dark:text-white">
                {GetWorkScheduleById?.data?.workSheetType}
              </h2>
            </div>
          </div>
        </Col>
        {GetWorkScheduleById?.data?.workSheetType == "Fixed" && (
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className="mt-[20px]">
              {Object.values(daysEnum)?.map((item, i) => {
                return (
                  <FixedWorkArragementDaysDetails
                    key={i}
                    name={item}
                    data={
                      GetWorkScheduleById?.data?.workSheetFixedDetail?.filter(
                        (val: any) => val.dayName === item
                      )[0]
                    }
                  />
                );
              })}
            </div>
          </Col>
        )}
        {GetWorkScheduleById?.data?.workSheetType == "Flexible" && (
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className="mt-[20px]">
              {Object.values(daysEnum)?.map((item, i) => {
                return (
                  <FlexibleWorkArragementDaysDetails
                    key={i}
                    name={item}
                    data={
                      GetWorkScheduleById?.data?.workSheetFlexibleDetail?.filter(
                        (val: any) => val.dayName === item
                      )[0]
                    }
                  />
                );
              })}
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default WorkScheduleDetailComponent;
