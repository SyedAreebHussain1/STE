import React, { useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";
import type { TableColumnsType } from "antd";
import deleteIcon from "../../../../../assets/deleteIcon.png";
import editIcon from "../../../../../assets/editPenIcon.png";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { getCompanyLeavePolicyApi } from "../../../../../redux/api/TimeOffAndHoliday/TimeOfPolicies";
import { useDispatch, useSelector } from "react-redux";
import EditTimeOffPolicyDrawer from "./EditTimeOffPolicyDrawer";
import { RootState } from "../../../../../redux/store";
import { IoEyeOutline, IoSearchOutline } from "react-icons/io5";
import MembersColumnDrawer from "./MembersColumnDrawer";
interface DataType1 {
  key: "1";
  id: number;
  name: string;
  compensation: string;
  units: string;
  member: string;
  action: any;
}

const columns: TableColumnsType<DataType1> = [
  {
    title: "Leave type",
    dataIndex: "id",
    defaultSortOrder: "descend",
  },
  {
    title: "Leave Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
  },
  {
    title: "Number of leaves",
    dataIndex: "leaves",
    defaultSortOrder: "descend",
  },
  {
    title: "Member",
    dataIndex: "member",
    defaultSortOrder: "descend",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const TimeOffPoliciesTable: React.FC = () => {
  const [dataSource, setDataSource] = useState([]);
  const [openUpdate, setOpenUpdate] = useState<boolean | undefined>(false);
  const [open, setOpen] = useState<boolean | undefined>(false);
  const [updateData, setUpdateData] = useState<any>(null);
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState<any>({ page: 1, limit: 10 });
  const getCompanyLeavePolicy = useSelector(
    (state: any) => state?.getCompanyLeavePolicy
  );

  const createCompanyLeavePolicy = useSelector(
    (state: RootState) => state.createCompanyLeavePolicy
  );

  const updateCompanyLeavePolicy = useSelector(
    (state: RootState) => state.updateCompanyLeavePolicy
  );
  useEffect(() => {
    getCompanyLeavePolicyApi(dispatch, pageLimit, title);
  }, [
    dispatch,
    createCompanyLeavePolicy?.data,
    updateCompanyLeavePolicy?.data,
    title,
  ]);
  useEffect(() => {
    if (getCompanyLeavePolicy?.data?.data?.items) {
      const data: any = getCompanyLeavePolicy?.data?.data?.items.map(
        (item: any, i: number) => {
          return {
            key: i,
            id: (
              <span className="font-medium text-[.975rem]">
                {item?.policyType}
              </span>
            ),
            name: (
              <span className="font-medium text-[.975rem] ">{item?.title}</span>
            ),
            leaves: (
              <span className="font-medium text-[.975rem] ">
                {item?.accure}
              </span>
            ),

            member: (
              <span className="font-medium text-[.975rem] ">
                {item?.NoOfMembersCount}
              </span>
            ),
            action: (
              <div className={`flex  gap-2 items-center`}>
                <Button
                  onClick={() => {
                    setUpdateData(item);
                    setOpen(true);
                  }}
                >
                  View Members{" "}
                </Button>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setUpdateData(item);
                    setOpenUpdate(true);
                  }}
                >
                  <img src={editIcon} alt="" />
                </span>

                <span className="cursor-pointer">
                  <img src={deleteIcon} alt="" />
                </span>
              </div>
            ),
          };
        }
      );
      setDataSource(data);
    }
  }, [getCompanyLeavePolicy?.data]);

  return (
    <>
      {openUpdate && (
        <EditTimeOffPolicyDrawer
          open={openUpdate}
          setOpen={setOpenUpdate}
          updateData={updateData}
        />
      )}
      {open && (
        <MembersColumnDrawer
          open={open}
          setOpen={setOpen}
          updateData={updateData}
        />
      )}
      <div>
        <div>
          <div className="w-[243px]">
            <p className="font-normal dark:text-white text-[#344054] text-[.8125rem] ">
              {" "}
              Search for Leaves
            </p>
            <div>
              <TextInput
                className=" !h-[39px]  dark-input"
                placeholder="Enter leave name"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <Divider />
          <div>
            <Table
              scroll={{ x: true }}
              loading={getCompanyLeavePolicy?.loading}
              columns={columns}
              dataSource={dataSource}
              pagination={{
                total: getCompanyLeavePolicy?.data?.data?.meta?.totalItems,
                onChange: (total: number, range: number) => {
                  setPageLimit({
                    page: total,
                    limit: range,
                  });
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeOffPoliciesTable;
