import React, { useEffect, useRef, useState } from "react";
import { Button, Divider, Input, Switch, Table } from "antd";
import type { TableColumnsType } from "antd";
import editIcon from "../../../../../../assets/editPenIcon.png";
import { SearchOutlined } from "@ant-design/icons";
import { AppDispatch, RootState } from "../../../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllSystemUsersApi, updateStatusApi } from "../../../../../../services/api/Dashboard/UserManagment";

interface DataType1 {
  key: "1";
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  roles: string;
}

interface Prop {
  OpenModal: (data: any) => any;
}

const columns: TableColumnsType<DataType1> = [
  {
    title: "Id",
    dataIndex: "id",
    defaultSortOrder: "descend",
  },
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
  },
  {
    title: "Email",
    dataIndex: "email",
    defaultSortOrder: "descend",
  },
  {
    title: "Phone No",
    dataIndex: "phoneNo",
    defaultSortOrder: "descend",
  },
  {
    title: "Roles",
    dataIndex: "roles",
    defaultSortOrder: "descend",
  },
  {
    title: "Inactive/Active",
    dataIndex: "inactiveActive",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const AllUsersTable: React.FC<Prop> = ({ OpenModal }: Prop) => {
  const ref = useRef<any>();
  const [dataSource, setDataSource] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const dispatch: AppDispatch = useDispatch();
  const getAllSystemUsers = useSelector(
    (state: RootState) => state.getAllSystemUsers
  );
  const updateSystemUser = useSelector(
    (state: RootState) => state.updateSystemUser
  );
  const createUser = useSelector((state: RootState) => state.createUser);
  const updateStatus = useSelector((state: RootState) => state?.updateStatus);

  useEffect(() => {
    getAllSystemUsersApi(dispatch, pageLimit);
  }, [pageLimit, updateSystemUser, createUser, updateStatus]);

  useEffect(() => {
    if (getAllSystemUsers?.data) {
      const data = getAllSystemUsers?.data?.data?.items?.map(
        (item: any, i: number) => {
          return {
            key: i,
            id: <span className="font-medium text-[.975rem]  ">{item.id}</span>,
            name: (
              <span className="font-medium text-[.975rem] ">
                {item?.profile?.name}
              </span>
            ),
            email: (
              <span className="font-medium text-[.975rem] ">{item.email}</span>
            ),
            phoneNo: (
              <span className="font-medium text-[.975rem] ">{item.phone}</span>
            ),
            roles: (
              <div className="font-medium text-[.975rem] bg-[rgb(234,237,245)] flex justify-center  rounded-full">
                <span className="p-[4px, 14px, 4px, 14px] text-[#3E54AC]">
                  {item?.systemRole?.title}
                </span>
              </div>
            ),
            inactiveActive: (
              <Switch
                value={item?.isActive}
                className={`${
                  item?.isActive ? "dark:bg-dark-purple" : "bg-gray-300"
                } `}
                onChange={(e: any) => {
                  if (item?.isActive === true) {
                    updateStatusApi(
                      dispatch,
                      {
                        isActive: false,
                      },
                      Number(item.id)
                    );
                  } else {
                    updateStatusApi(
                      dispatch,
                      {
                        isActive: true,
                      },
                      Number(item.id)
                    );
                  }
                }}
              />
            ),
            action: (
              <span className="cursor-pointer" onClick={() => OpenModal(item)}>
                <img src={editIcon} alt="" />
              </span>
            ),
          };
        }
      );
      setDataSource(data);
    }
  }, [getAllSystemUsers]);

  function showTotal(total: number, range: number) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }

  function onSearch(value: string) {
    setSearchValue(value);
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      if (getAllSystemUsers?.data) {
        const nameFilter = getAllSystemUsers?.data?.data?.items
          ?.filter((item: any) =>
            item?.profile?.name.toLowerCase().includes(value.toLowerCase())
          )
          .map((item: any, i: number) => {
            return {
              key: i,
              id: <span className="font-medium text-[.975rem]  ">{item.id}</span>,
              name: (
                <span className="font-medium text-[.975rem] ">
                  {item?.profile?.name}
                </span>
              ),
              email: (
                <span className="font-medium text-[.975rem] ">
                  {item.email}
                </span>
              ),
              phoneNo: (
                <span className="font-medium text-[.975rem] ">
                  {item.phone}
                </span>
              ),
              roles: (
                <div className="font-medium text-[.975rem] bg-[rgb(234,237,245)] flex justify-center  rounded-full">
                  <span className="p-[4px, 14px, 4px, 14px] text-[#3E54AC]">
                    {item?.systemRole?.title}
                  </span>
                </div>
              ),
              inactiveActive: (
                <Switch
                  value={item?.isActive}
                  className={`${
                    item?.isActive ? "dark:bg-dark-purple" : "bg-gray-300"
                  } `}
                  onChange={(e: any) => {
                    if (item?.isActive === true) {
                      updateStatusApi(
                        dispatch,
                        {
                          isActive: false,
                        },
                        Number(item.id)
                      );
                    } else {
                      updateStatusApi(
                        dispatch,
                        {
                          isActive: true,
                        },
                        Number(item.id)
                      );
                    }
                  }}
                />
              ),
              action: (
                <span
                  className="cursor-pointer"
                  onClick={() => OpenModal(item)}
                >
                  <img src={editIcon} alt="" />
                </span>
              ),
            };
          });

        setDataSource(nameFilter);
      }
    }, 500);
  }

  return (
    <>
      <div>
        <div>
          <div className="w-[243px]">
            <p className="font-normal ml-5 dark:text-white text-[#344054]  text-[.8125rem] ">
              Search for User
            </p>
            <div className="flex justify-center items-center gap-2 w-[90%] mx-auto">
              <div className="w-full">
                <Input
                  className="h-[48px] dark-input"
                  placeholder="Search"
                  value={searchValue || ""}
                  onChange={(e) => onSearch(e.target.value)}
                  prefix={
                    <SearchOutlined className="h-[13.51px] w-[13.51px]" />
                  }
                />
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <Table
              scroll={{ x: 1300 }}
              columns={columns}
              dataSource={dataSource}
              loading={getAllSystemUsers?.loading}
              pagination={{
                total: getAllSystemUsers?.data?.data?.meta?.totalItems,
                onChange: showTotal,
                showSizeChanger: false,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsersTable;
