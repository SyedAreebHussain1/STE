import { Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import SideTabForWorkShedule from "./helpers/SideTabForWorkShedule";
import WorkScheduleDetailComponent from "./helpers/WorkScheduleDetailComponent";
import { getWorkScheduleApi } from "../../redux/api/WorkSchedule";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import AddAndEditWorkScheduleDrawer from "./helpers/AddandEditWorkScheduleDrawer";
import PageLoading from "../../helpers/loaders/PageLoading";
import RoundedButton from "../../helpers/button/RoundedButton";

const WorkScheduleComponent = () => {
  const [activeId, setActiveId] = useState<any>(null);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const [open, setOpen] = useState(false);
  const clickHandler = (item: any) => {
    setActiveId(item.id);
  };

  const getWorkSchedule = useSelector(
    (state: RootState) => state.GetWorkSchedule
  );
  const AddWorkSchedule = useSelector(
    (state: RootState) => state.AddWorkSchedule
  );

  const editWorkSchedule = useSelector(
    (state: RootState) => state.editWorkSchedule
  );

  const GetWorkScheduleById = useSelector(
    (state: RootState) => state.GetWorkScheduleById
  );
  const drawerHandler = () => {
    setOpen((pre) => !pre);
  };
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    getWorkScheduleApi(null, dispatch, pageLimit);
  }, [AddWorkSchedule, editWorkSchedule]);
  useEffect(() => {
    if (getWorkSchedule?.data?.data?.items?.[0]) {
      setActiveId(getWorkSchedule?.data?.data?.items?.[0]?.id);
    } else {
      setActiveId(null);
    }
  }, [getWorkSchedule]);

  const handlePageChange = (page: number, limit: number) => {
    getWorkScheduleApi(null, dispatch, {
      page: page,
      limit: limit,
    });
    setPageLimit({
      page: page,
      limit: limit,
    });
  };

  return (
    <>
      {open && (
        <AddAndEditWorkScheduleDrawer
          open={open}
          drawerHandler={drawerHandler}
        />
      )}

      <div className="px-[30px] mt-[30px] mb-[10px]">
        <RoundedButton
          onClick={drawerHandler}
          title={
            <span className="m-[6px] flex items-center">
              <span className="w-[14.27px] h-[14.27px] text-[1rem] pr-1">
                +
              </span>
              Create New Schedule
            </span>
          }
          className="dark:bg-dark-primary dark:text-white mb-[20px]"
        />

        {getWorkSchedule?.data?.data?.items.length > 0 && (
          <Row gutter={18}>
            <Col xs={24} sm={24} md={24} lg={6}>
              <div className="lg:h-[80vh] max-h-[80vh] overflow-y-auto overflow-x-hidden px-[5px]   work-schedule-class">
                {getWorkSchedule?.loading ? (
                  <div className="flex justify-center items-center w-full h-full">
                    <PageLoading />
                  </div>
                ) : (
                  <>
                    {getWorkSchedule?.data?.data &&
                      getWorkSchedule?.data?.data?.items?.map(
                        (item: any, i: number) => (
                          <div className="mb-[20px] cursor-pointer" key={i}>
                            <SideTabForWorkShedule
                              data={item}
                              onclick={clickHandler}
                              id={item.id}
                              active={activeId === item.id}
                            />
                          </div>
                        )
                      )}
                    {getWorkSchedule?.data?.data && (
                      <div className="flex justify-center my-[10px]">
                        <Pagination
                          total={getWorkSchedule?.data?.data?.meta?.totalItems}
                          current={pageLimit.page}
                          pageSize={pageLimit.limit}
                          showSizeChanger={false}
                          onChange={handlePageChange}
                        />
                      </div>
                    )}
                  </>
                )}
                {/* <PageLoading loading={getWorkSchedule.loading}></PageLoading> */}
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={18}>
              <WorkScheduleDetailComponent id={activeId} />
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};
export default WorkScheduleComponent;
