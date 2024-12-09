import { Divider, Pagination, Spin } from "antd";
import { ReactElement, useEffect, useRef, useState } from "react";
import UsersSearch from "./UserSearch";
import { getUserListForStopLocationApi } from "../../../redux/api/userStopLocation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const CheckInAndOutData = ({
  setActiveUserId,
  activeUserId,
  filter,
  setFilter,
}: any) => {
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const ref = useRef<any>();

  const getUserListForStopPoint = useSelector(
    (state: RootState) => state.getUserListForStopPoint
  );
  const [userData, setUserData] = useState<any[]>([]);

  function clickHandler(id: string) {
    setActiveUserId(id);
  }

  function onPageChange(pageNumber: any) {
    setPageLimit((pre) => ({ ...pre, page: pageNumber }));
    getUserListForStopLocationApi(
      dispatch,
      { page: pageNumber, limit: pageLimit.limit },
      filter.search,
      filter.date
    );
  }

  function onSearch(searchValue: any) {
    setFilter((pre: any) => ({ ...pre, search: searchValue }));
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setPageLimit((pre) => ({ ...pre, page: 1 }));
      getUserListForStopLocationApi(
        dispatch,
        pageLimit,
        searchValue,
        filter.date
      );
    }, 500);
  }

  function onDateChange(date: any) {
    setFilter((pre: any) => ({ ...pre, date: date }));
    setPageLimit((pre) => ({ ...pre, page: 1 }));
    getUserListForStopLocationApi(dispatch, pageLimit, filter.search, date);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    getUserListForStopLocationApi(
      dispatch,
      pageLimit,
      filter.search,
      filter.date
    );
  }, []);

  useEffect(() => {
    setActiveUserId(0);
    if (getUserListForStopPoint?.data?.items?.length > 0) {
      const data = getUserListForStopPoint?.data?.items?.map((item: any) => ({
        id: item?.companyUserId,
        title: item?.companyUser?.companyUserProfile?.name,
        url: item?.companyUser?.companyUserProfile?.profilePhoto,
      }));
      setUserData([...data]);
    } else {
      setUserData([]);
    }
  }, [getUserListForStopPoint]);

  return (
    <div className="dark:bg-dark-grayprimary dark:text-white  h-[100vh] flex flex-col">
      <div className="px-[30px] pt-[15px] mb-[20px] text-[1.1rem] font-bold dark:text-dark-secondary ">
        <div>
          <h1>Location Stop</h1>
        </div>
      </div>
      <div>
        <UsersSearch
          onSearch={onSearch}
          userSearch={filter.search}
          onDateChange={onDateChange}
        />
        <div className=" overflow-auto liveLocationUser flex-1">
          {getUserListForStopPoint?.loading ? (
            <div className="flex items-center h-16 w-full justify-center">
              <Spin spinning={getUserListForStopPoint?.loading}></Spin>
            </div>
          ) : userData.length <= 0 ? (
            <div className="flex items-center justify-center h-[300px]">
              <div className="flex items-center flex-col justify-center ">
                <img
                  src="https://web.jibble.io/img/NoLocations.4d1f33ec.svg"
                  width={200}
                />
                <span className="text-[.96rem] font-bold dark:text-white text-[#00000070]">
                  No one is clocked-in right now.
                </span>
              </div>
            </div>
          ) : (
            <div>
              {userData &&
                userData.map((item: any, i: any) => (
                  <User
                    key={i}
                    data={item}
                    activeUser={activeUserId}
                    handler={clickHandler}
                  />
                ))}
            </div>
          )}
        </div>
        <Divider />
        <Pagination
          className="mb-4 lg:mb-4 pb-[20px] flex justify-center "
          current={pageLimit?.page}
          total={getUserListForStopPoint?.data?.meta?.totalItems}
          hideOnSinglePage
          pageSize={pageLimit?.limit}
          showSizeChanger={false}
          responsive={true}
          simple
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

function User({
  data,
  activeUser,
  handler,
}: {
  data: any;
  activeUser: any;
  handler: any;
}) {
  return (
    <div
      key={data.id}
      className={`mx-4 py-4  border-b border-borderColor flex items-center gap-2   ${
        activeUser == data.id ? "activeUserInCheckInAndOutData " : ""
      }`}
      onClick={() => handler(data.id)}
    >
      {data?.url ? (
        <img
          src={data?.url}
          alt="userImage"
          className="w-[30px] h-[30px] rounded-full object-contain"
        />
      ) : (
        <div className="w-[30px] h-[30px] rounded-full bg-[#3e54ac] dark:bg-dark-purple flex items-center justify-center text-white font-medium">
          <h1>{data.title[0].toUpperCase()}</h1>
        </div>
      )}

      <h4 className="text-sm font-bold">{data.title}</h4>
    </div>
  );
}

export default CheckInAndOutData;
