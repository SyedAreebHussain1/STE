import { Col, DatePicker, Input, Row, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { getLeadsByCampaignIdApi } from "../../../../../redux/api/SalesPlus/Campaigns";

const CompaignsFilter = ({ selectCampaign, pageLimit, setPageLimit }: any) => {
  const dispatch = useDispatch();
  const ref = useRef<any>();
  const [isReset, setIsReset] = useState(false);

  const [filter, setFilter] = useState({
    sortBy: "Descending",
    leadStatus: null,
    startDate: "",
    endDate: "",
    search: "",
  });

  useEffect(() => {
    if (
      filter.startDate ||
      filter.endDate ||
      filter.leadStatus ||
      filter.search ||
      filter.sortBy !== "Descending"
    ) {
      setIsReset(true);
    }

    clearTimeout(ref.current);
    if (filter.search && selectCampaign?.id) {
      ref.current = setTimeout(() => {
        onApiCall(filter.search);
      }, 500);
    } else if (selectCampaign?.id) {
      onApiCall("");
    }
  }, [selectCampaign, pageLimit, filter]);

  const onApiCall = (searchValue: any) => {
    if (filter.startDate && !filter.endDate) {
      return;
    }
    if (!filter.startDate && filter.endDate) {
      return;
    }

    getLeadsByCampaignIdApi(
      dispatch,
      pageLimit,
      selectCampaign?.id,
      filter.sortBy,
      filter.leadStatus,
      filter.startDate ? dayjs(filter.startDate).format("YYYY-MM-DD") : "",
      filter.endDate ? dayjs(filter.endDate).format("YYYY-MM-DD") : "",
      searchValue
    );
  };

  const disabledEndDate = (endDate: any) => {
    return endDate && endDate < filter.startDate;
  };
  return (
    <div className="flex justify-between">
      <div>
        <Row gutter={10}>
          <Col className="mt-2">
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
          <Col className="mt-2">
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

          <Col className="mt-2">
            <div className="flex gap-1 items-center dark:text-white">
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
      <div className="mt-2">
        <div className="flex items-center gap-3">
          <Select
            value={filter.sortBy}
            onChange={(e) => {
              setFilter((pre: any) => ({ ...pre, sortBy: e }));
              setPageLimit((pre: any) => ({ page: 1, limit: pre.limit }));
            }}
            className="h-[40px] min-w-[120px]"
            placeholder="SortBy"
            options={[
              { value: "Descending", label: "Descending" },
              { value: "Ascending", label: "Ascending" },
            ]}
          />
          <button
            className="text-[red] dark:text-dark-borderColor dark:disabled:text-[gray]  disabled:text-[gray] disabled:cursor-not-allowed font-semibold "
            disabled={!isReset}
            onClick={() => {
              setFilter({
                sortBy: "Descending",
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
    </div>
  );
};

export default CompaignsFilter;
