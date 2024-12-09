import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";
import rolesManagementColumns from "../../../../../../utils/tableColumns/rolesManagementColumns.json";
import deleteIcon from "../../../../../../assets/deleteIcon.png";
import editIcon from "../../../../../../assets/editPenIcon.png";
import { TextInput } from "../../../../../../components";
import UpdateRoleModal from "./UpdateRoleModal";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { IoSearchOutline } from "react-icons/io5";
import { getSystemRoleApi } from "../../../../../../services/api/Dashboard/UserManagment";

interface GetCompanyRoleType {
  id: number;
  title: string;
  companyId: number | null;
  createdAt: string | null;
  updatedAt: string;
  deletedAt: string | null;
  createdBy: string | null;
  updatedBy: string | null;
}

interface DataSourceItem {
  key: number;
  id: JSX.Element;
  roleTitle: JSX.Element;
  createDate: JSX.Element;
  action: JSX.Element;
}

type ArchiveModalProps = {
  open?: boolean;
  toggleOpen?: any;
};

type DataSource = DataSourceItem[];

const RolesManagementTable: React.FC<ArchiveModalProps> = () => {
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState<DataSource>([]);
  const [openUpdate, setOpenUpdate] = useState<boolean | undefined>(false);
  const [updateData, setUpdateData] = useState<Record<string, any>>({});
  const [roleTitle, setRoleTitle] = useState<string>("");
  const getSystemRole = useSelector((state: any) => state?.getSystemRole);
  const createSystemRole = useSelector((state: any) => state?.createSystemRole);

  useEffect(() => {
    getSystemRoleApi(dispatch, pageLimit);
  }, [dispatch, pageLimit, createSystemRole]);

  useEffect(() => {
    if (getSystemRole?.data?.data?.items?.length > 0) {
      const rolesFilter = getSystemRole?.data?.data?.items?.filter(
        (item: GetCompanyRoleType) =>
          item.title.toLowerCase().includes(roleTitle.toLowerCase())
      );

      const data: DataSource = rolesFilter?.map(
        (item: GetCompanyRoleType, i: number) => {
          return {
            key: i,
            id: <span className="font-medium text-[.975rem]  ">{item.id}</span>,
            roleTitle: (
              <span className="font-medium text-[.975rem] ">{item.title}</span>
            ),
            createDate: (
              <span className="font-medium text-[.975rem] ">
                {moment(item.createdAt).format("MMM. D, YYYY [at] h:mm a z")}
              </span>
            ),
            action: (
              <div className={`flex  gap-2 items-center`}>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setOpenUpdate(true), setUpdateData(item);
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
  }, [getSystemRole?.data, roleTitle]);

  const handleInputChange = (event: any) => {
    setRoleTitle(event.target.value);
  };

  return (
    <>
      {openUpdate && (
        <UpdateRoleModal
          open={openUpdate}
          roleData={updateData}
          setOpen={setOpenUpdate}
        />
      )}
      <div>
        <div>
          <div className="w-[243px]">
            <p className="font-normal ml-4 dark:text-white text-[#344054] text-[.8125rem] ">
              Search for Role
            </p>
            <div className="flex justify-center gap-[1px] items-center">
              <TextInput
                className="dark-input !h-[39px]"
                placeholder="Enter role"
                prefix={<IoSearchOutline size={"18"} />}
                value={roleTitle}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <Divider />
          <div>
            <Table
              scroll={{ x: true }}
              columns={rolesManagementColumns}
              dataSource={dataSource}
              loading={getSystemRole?.loading}
              pagination={{
                total: getSystemRole?.data?.data?.meta?.totalItems,
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

export default RolesManagementTable;
