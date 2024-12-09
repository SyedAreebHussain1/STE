import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Spin, theme } from "antd";
import { getCompanyUsersApi } from "../../redux/api/TimeOffAndHoliday/TimeOfPolicies";
import { useDispatch, useSelector } from "react-redux";
import { companyUserLeavesApi } from "../../redux/api/TimeOff";

const LeaveBalanceSideBar = ({ activeKey, setActiveKey, tabChange }: any) => {
  const themeAnt = theme.getDesignToken();
  const [focused, setFocused] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const getCompanyUsers = useSelector((state: any) => state?.getCompanyUsers);
  const addCompanyUserLeave = useSelector(
    (state: any) => state?.addCompanyUserLeave
  );
  function clickHandler(key: string) {
    setActiveKey(key);
    companyUserLeavesApi(dispatch, key);
  }
  useEffect(() => {
    if (addCompanyUserLeave?.data && activeKey) {
      companyUserLeavesApi(dispatch, activeKey);
    }
  }, [addCompanyUserLeave?.data]);
  function onInputFocus() {
    setFocused(true);
  }
  function onInputBlur() {
    setFocused(false);
  }
  useEffect(() => {
    getCompanyUsersApi(dispatch, pageLimit, onSuccess, name);
  }, [pageLimit, tabChange, name]);
  function onSuccess() {}

  return (
    <div className=" dark:bg-dark-grayprimary">
      <div
        key={"LeaveBalanceSideBarKey"}
        className="flex  py-3 items-center gap-3 border-b border-r border-[#d8dadc] pl-[20px] w-[100%] text-black dark:text-white"
      >
        <CiSearch size={"20"} color={focused ? themeAnt.colorPrimary : ""} />
        <input
          placeholder="Search Members"
          className="flex-grow focus-visible:outline-none bg-transparent "
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className=" h-[500px] overflow-auto LeaveBalanceUser border-r-[#d8dadc] border-r">
        {getCompanyUsers.loading ? (
          <div className="flex justify-center items-center mt-5">
            {" "}
            <Spin size="large" />{" "}
          </div>
        ) : (
          getCompanyUsers?.data?.data?.items?.map((value: any, i: any) => (
            <User
              key={i}
              data={value}
              handler={clickHandler}
              activeKey={activeKey}
            />
          ))
        )}
      </div>
      <div className="flex justify-between p-3 dark:text-white ">
        <button
          disabled={pageLimit.page <= 1}
          onClick={() =>
            setPageLimit((prev) => {
              return {
                ...prev,
                page: pageLimit.page - 1,
              };
            })
          }
        >
          Prev
        </button>
        <button
          disabled={
            pageLimit.page == getCompanyUsers?.data?.data?.meta?.totalPages
          }
          onClick={() =>
            setPageLimit((prev) => {
              return {
                ...prev,
                page: pageLimit.page + 1,
              };
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

function User({
  data,
  handler,
  activeKey,
}: {
  data: any;
  handler: (key: string) => void;
  activeKey: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 py-[8px] pl-[20px] border-b border-b-[#d8dadc] cursor-pointer dark:text-white ${
        activeKey == data.id ? "activeUserInLeaveBalanceSideBar" : ""
      }`}
      key={data?.id}
      onClick={() => handler(data.id)}
    >
      <div className="w-[48px] h-[48px] rounded-full bg-black" />
      <h4 className="text-sm font-bold">{data?.companyUserProfile?.name}</h4>
    </div>
  );
}
export default LeaveBalanceSideBar;
