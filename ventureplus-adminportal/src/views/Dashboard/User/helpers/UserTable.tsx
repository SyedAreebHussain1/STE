import React, { useEffect, useState, useCallback } from "react";
import { Table, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { SearchOutlined } from "@ant-design/icons";
import { RootState } from "../../../../store/store";
import usersColumn from "../../../../utils/tableColumns/usersColumn.json";
import { getUsersApi } from "../../../../services/api/Dashboard/Users";
import { debounce } from "lodash";

const UserTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const users = useSelector((state: RootState) => state?.users);

  const fetchUsers = useCallback(
    debounce((pageLimit, searchTerm) => {
      getUsersApi(dispatch, { page: 1, limit: 10 }, searchTerm);
    }, 1000),
    [dispatch]
  );

  useEffect(() => {
    fetchUsers(pageLimit, searchTerm);
    return fetchUsers.cancel;
  }, [pageLimit, searchTerm, fetchUsers]);

  useEffect(() => {
    const items = users?.data?.data?.items || [];
    if (items.length > 0) {
      const data = items.map((item: any) => ({
        key: item.id || "-",
        name: (
          <span className="font-normal text-[.75rem] flex items-center gap-1">
            {item.name || "-"}
          </span>
        ),
        company: (
          <span className="font-normal text-[.75rem]">
            {item.company || "-"}
          </span>
        ),
        package: (
          <span className="font-normal text-[.75rem]">
            {item.package || "-"}
          </span>
        ),
        createdAt: (
          <span className="font-normal text-[.75rem]">
            {item.createdAt
              ? moment(item.createdAt).local().format("lll")
              : "-"}
          </span>
        ),
      }));

      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [users?.data, searchTerm]);

  return (
    <>
      <div className="flex justify-end">
        <Input
          placeholder="Search by user"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: 20, width: 300 }}
          prefix={<SearchOutlined />}
          size="large"
        />
      </div>
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <div className="p-3">
          <div className="flex gap-2 items-center">
            <div className="shrink-0">
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Users
              </h3>
            </div>
            <div className="h-[23px] w-[23px] bg-[#147ad60d] rounded-[100%] inline-block ">
              {" "}
              <span className="text-[#147AD6] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[32px]">
                {users?.data?.data?.meta?.totalItems || 0}
              </span>
            </div>
          </div>
        </div>
        <Table
          scroll={{ x: 900 }}
          columns={usersColumn}
          loading={users?.loading}
          dataSource={dataSource}
          pagination={{
            total: users?.data?.data?.meta?.totalItems || 0,
            onChange: (page: number, limit: number) => {
              setPageLimit({
                page,
                limit,
              });
            },
          }}
        />
      </div>
    </>
  );
};

export default UserTable;
