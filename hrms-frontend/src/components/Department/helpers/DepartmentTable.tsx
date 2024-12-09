import React, { useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import departmentColumns from "../../../utils/tableColumns/departmentColumns.json";
import { AppDispatch } from "../../../redux/store";
import {
  deleteDepartmentApi,
  getAllDepartmentApi,
} from "../../../redux/api/Department";
import deleteIcon from "../../../assets/deleteIcon.png";
import editPenIcon from "../../../assets/editPenIcon.png";
import AddDepartmentModal from "./AddDepartmentModal";
import AddManagerModal from "./AddManagerModal";
import useToggle from "../../../hooks/useToggle";
import { UserAddOutlined } from "@ant-design/icons";

const DepartmentTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const [dataSource, setDataSource] = useState([]);
  const [updateId, setUpdateId] = useState<
    number | null | undefined | boolean | any
  >(null);
  const [addManagerModal, toggleAddManagerModal] = useToggle();
  const [departmentId, setDepartmentId] = useState(null);
  const createDepartment = useSelector((state: any) => state?.createDepartment);
  const getAllDepartmentTable = useSelector(
    (state: any) => state?.getAllDepartmentTable
  );
  const deleteDepartment = useSelector((state: any) => state?.deleteDepartment);
  const updateDepartment = useSelector((state: any) => state?.updateDepartment);
  useEffect(() => {
    getAllDepartmentApi(dispatch, pageLimit);
  }, [
    pageLimit,
    createDepartment?.data,
    deleteDepartment?.data,
    updateDepartment.data,
  ]);

  useEffect(() => {
    if (getAllDepartmentTable.data?.data?.items?.length > 0) {
      const data: any = getAllDepartmentTable.data?.data?.items?.map(
        (item: any, i: number) => {
          return {
            key: i,
            sno: i + 1,
            title: item?.title || "-",
            date: item?.createdAt
              ? moment(item?.createdAt).format("dddd, MMMM Do YYYY")
              : "-",
            action: (
              <div className="flex gap-2">
                <button onClick={() => setUpdateId(item)}>
                  <img src={editPenIcon} />
                </button>
                <button onClick={() => deleteDepartmentApi(dispatch, item?.id)}>
                  <img src={deleteIcon} />
                </button>
                {!item?.managerId && (
                  <div className="border border-light-primary text-light-primary dark:border-dark-purple dark:text-dark-purple p-1 h-[30px] w-[30px] rounded-full flex justify-center items-center text-lg">
                    <UserAddOutlined
                      onClick={() => {
                        setDepartmentId(item?.id);
                      }}
                    />
                  </div>
                )}
              </div>
            ),
          };
        }
      );
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAllDepartmentTable?.data]);

  useEffect(() => {
    if (departmentId) toggleAddManagerModal();
  }, [departmentId]);

  return (
    <>
      {addManagerModal && departmentId && (
        <AddManagerModal
          open={addManagerModal}
          close={toggleAddManagerModal}
          departmentId={departmentId}
          setDepartmentId={setDepartmentId}
        />
      )}
      {updateId && <AddDepartmentModal open={updateId} onClose={setUpdateId} />}
      <div className="bg-white dark:bg-dark-grayprimary rounded-lg p-3 mt-4">
        <Divider />
        <Table
          scroll={{ x: true }}
          columns={departmentColumns}
          loading={getAllDepartmentTable?.loading}
          dataSource={dataSource}
          pagination={{
            total: getAllDepartmentTable?.data?.data?.meta?.totalItems,
            onChange: (total: number, range: number) => {
              setPageLimit({
                page: total,
                limit: range,
              });
            },
          }}
        />
      </div>
    </>
  );
};

export default DepartmentTable;
