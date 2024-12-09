import React, { useEffect, useRef, useState } from "react";
import { Divider, Input, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import deleteIcon from "../../../../../assets/deleteIcon.png";
import editIcon from "../../../../../assets/editPenIcon.png";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { SearchOutlined } from "@ant-design/icons";
import UpdateUsersModal from "./UpdateUsersModal";
import {
  companyUserDeleteApi,
  getAllUserListApi,
} from "../../../../../redux/api/UserManaegement/UserProfile";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosInformationCircleOutline, IoIosSearch } from "react-icons/io";
interface DataType {
  key: "1";
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  disignation: string;
  roles: string;
}
interface DataType1 {
  key: "1";
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  disignation: string;
  roles: string;
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
    title: "Action",
    dataIndex: "action",
  },
];
const AllUsersTable: React.FC = () => {
  const ref = useRef<any>();
  const [dataSource, setDataSource] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [updateData, setUpdateData] = useState<any>({});
  const [openUpdate, setOpenUpdate] = useState<boolean | undefined>(false);
  const [name, setname] = useState<string>("");
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const companyUserDelete = useSelector(
    (state: any) => state.companyUserDelete
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const getAllUserList = useSelector(
    (state: RootState) => state.getAllUserList
  );

  useEffect(() => {
    getAllUserListApi(dispatch, pageLimit, undefined, name);
  }, [pageLimit, dispatch, name, companyUserDelete]);

  useEffect(() => {
    if (getAllUserList?.data) {
      const data = getAllUserList?.data?.data?.items?.map(
        (item: any, i: number) => {
          return {
            key: i,
            id: <span className="font-medium text-[.975rem]  ">{item.id}</span>,
            name: (
              <span className="font-medium text-[.975rem] ">
                {item?.companyUserProfile?.name}
              </span>
            ),
            email: (
              <span className="font-medium text-[.975rem] ">{item.email}</span>
            ),
            phoneNo: (
              <span className="font-medium text-[.975rem] ">
                {item.phoneNo}
              </span>
            ),
            roles: (
              <div className="font-medium text-[.975rem] bg-[rgb(234,237,245)] flex justify-center  rounded-full">
                <span className="p-[4px, 14px, 4px, 14px] text-[#3E54AC]">
                  {item?.companyRole?.title}
                </span>
              </div>
            ),

            action: (
              <div className={`flex justify-center gap-2 items-center`}>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    navigate(`/user-profile/edit/${item?.id}`)
                  }}
                >
                  <img src={editIcon} alt="" />
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() =>
                    companyUserDeleteApi(dispatch, Number(item?.id))
                  }
                >
                  <img src={deleteIcon} alt="" />
                </span>
                <span
                  className="cursor-pointer "
                  onClick={() => navigate(`/stop-Location/${item?.id}`)}
                >
                  <IoIosInformationCircleOutline fontSize={35} />
                </span>
              </div>
            ),
          };
        }
      );
      setDataSource(data);
    }
  }, [getAllUserList]);
  function showTotal(total: number, range: number) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }
  const handleInputChange = (event: any) => {
    setname(event.target.value);
  };

  function onSearch(value: any) {
    setSearchValue(value);
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      getAllUserListApi(dispatch, pageLimit, undefined, value);
    }, 500);
  }
  return (
    <>
      <div>
        <div>
          <div className="w-[243px]">
            <p className="font-normal ml-5 dark:text-white text-[#344054]  text-[.8125rem] ">
              {" "}
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
              loading={getAllUserList.loading}
              pagination={{
                total: getAllUserList?.data?.data?.meta?.totalItems,
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
