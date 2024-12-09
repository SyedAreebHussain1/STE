import { Button, Col, DatePicker, Input, Row, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { getFromStorage } from "../../../../../utils/storage";
import { getAllLeadApi } from "../../../../../redux/api/SalesPlus/Analytics";

const AnalyticsTableFilter = ({ pageLimit, setPageLimit }: any) => {
  const dispatch = useDispatch();
  const ref = useRef<any>();
  const [isReset, setIsReset] = useState(false);
  const [staff, setStaff] = useState<any[]>([]);
  const [loadMorePageLimit, setLoadMorePageLimit] = useState({
    page: 1,
    limit: 10,
  });

  const [filter, setFilter] = useState({
    staffName: null,
    leadStatus: null,
    startDate: "",
    endDate: "",
    search: "",
  });
  const getAllStaff = useSelector((state: any) => state.getAllStaff);
  const userRole = getFromStorage("user")?.role;

  useEffect(() => {
    if (
      filter.startDate ||
      filter.endDate ||
      filter.leadStatus ||
      filter.search ||
      filter.staffName
    ) {
      setIsReset(true);
    }

    clearTimeout(ref.current);

    if (filter.search) {
      ref.current = setTimeout(() => {
        onApiCall(filter.search);
      }, 500);
    } else {
      onApiCall("");
    }
  }, [pageLimit, filter]);

  const onApiCall = (searchValue: any) => {
    if (filter.startDate && !filter.endDate) {
      return;
    }
    if (!filter.startDate && filter.endDate) {
      return;
    }
    getAllLeadApi(
      dispatch,
      pageLimit,
      searchValue,
      filter.leadStatus,
      "",
      filter.staffName,
      filter.startDate,
      filter.endDate
    );
  };

  const onLoadMore = () => {
    setLoadMorePageLimit((pre: any) => ({ ...pre, page: pre.page + 1 }));
  };

  const onSuccess = (res: any) => {
    if (res?.items?.length > 0) {
      setStaff([...res?.items]);
    }
  };

  const onLoadSuccess = (res: any) => {
    if (res?.items?.length > 0) {
      setStaff((pre: any) => [...pre, ...res?.items]);
    }
  };

  const disabledEndDate = (endDate: any) => {
    return endDate && endDate < filter.startDate;
  };
  return (
    <div className="flex justify-between">
      <div>
        <Row gutter={10}>
          <Col className="mt-[10px]">
            <Input
              className="h-[40px] rounded-[8px] dark-input"
              placeholder="Search Leads"
              value={filter.search}
              onChange={(e) => {
                setFilter((pre) => ({ ...pre, search: e.target.value }));
                setPageLimit((pre: any) => ({ page: 1, limit: pre.limit }));
              }}
              prefix={<SearchOutlined className="h-[13.51px] w-[13.51px]" />}
            />
          </Col>
          <Col className="mt-[10px]">
            <Select
              value={filter.leadStatus}
              className="h-[40px] w-[200px]"
              placeholder="Lead status"
              onChange={(e) => {
                setFilter((pre: any) => ({ ...pre, leadStatus: e }));
                setPageLimit((pre: any) => ({ page: 1, limit: pre.limit }));
              }}
              options={[
                { value: "Pending", label: "Pending" },
                { value: "Inprogress", label: "Inprogress" },
                { value: "Completed", label: "Completed" },
                { value: "Interested", label: "Interested" },
                { value: "Appointment Aligned", label: "Appointment Aligned" },
                { value: "Untouched", label: "Untouched" },
                { value: "Top Priority", label: "Top Priority" },
                { value: "Not Interested", label: "Not Interested" },
                { value: "Not Connected", label: "Not Connected" },
                { value: "Wrong No", label: "Wrong No" },
              ]}
            />
          </Col>
          {userRole !== "agentStaff" && (
            <Col className="mt-[10px]">
              <Select
                className="h-[40px] min-w-[150px]"
                placeholder="Select a User"
                optionFilterProp="children"
                value={filter.staffName}
                onChange={(e) => {
                  setFilter((pre: any) => ({
                    ...pre,
                    staffName: e,
                  }));
                  setPageLimit((pre: any) => ({ page: 1, limit: pre.limit }));
                }}
                options={[
                  ...staff?.map((item: any) => ({
                    value: item?.profile?.fullName,
                    label: item?.profile?.fullName,
                  })),
                ]}
                dropdownRender={(menu) => {
                  return (
                    <>
                      {menu}
                      <div className="flex justify-center items-center ">
                        <Button
                          className="custom-btn mt-2 mb-2"
                          loading={getAllStaff?.loading}
                          onClick={onLoadMore}
                        >
                          Load More
                        </Button>
                      </div>
                    </>
                  );
                }}
              />
            </Col>
          )}
          <Col className="mt-[10px]">
            <div className="flex gap-1 items-center text-black dark:text-white">
              <DatePicker
                value={filter.startDate}
                onChange={(event) => {
                  setFilter((pre: any) => ({ ...pre, startDate: event }));
                  setPageLimit((pre: any) => ({ page: 1, limit: pre.limit }));
                }}
                placeholder="Start Date"
                suffixIcon={null}
                className="h-[40px] w-[120px] dark-input"
              />
              -
              <DatePicker
                value={filter.endDate}
                onChange={(event) =>
                  setFilter((pre: any) => ({ ...pre, endDate: event }))
                }
                disabledDate={disabledEndDate}
                placeholder="End Date"
                disabled={!filter.startDate}
                suffixIcon={null}
                className="h-[40px] w-[120px] dark-input"
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="flex items-center h-[40px] mt-[10px]">
        <button
          className="text-[red] dark:text-dark-borderColor dark:disabled:text-[gray] disabled:text-[gray] disabled:cursor-not-allowed font-semibold mr-[10px]"
          disabled={!isReset}
          onClick={() => {
            setFilter({
              staffName: null,
              leadStatus: null,
              startDate: "",
              endDate: "",
              search: "",
            });
            setPageLimit((pre: any) => ({ page: 1, limit: pre.limit }));
            setIsReset(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AnalyticsTableFilter;
