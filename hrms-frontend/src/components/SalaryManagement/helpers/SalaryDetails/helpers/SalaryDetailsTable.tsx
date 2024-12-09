import React, { useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";
import SalaryDetailsTableColumn from "../../../../../utils/tableColumns/SalaryDetailsTableColumn.json";
import {
  getAllUserPayrollApi,
  markAsPaidApi,
} from "../../../../../redux/api/SalaryManagement/SalaryDetails";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { UpdateSalaryDrawer } from "./UpdateSalaryDrawer";
import editIcon from "../../../../../assets/editPenIcon.png";
import dayjs from "dayjs";

interface DataType {
  key: React.Key;
  totalHours: React.ReactNode;
  deductionAmount: React.ReactNode;
  amountPayable: React.ReactNode;
  workingHours: React.ReactNode;
  action: React.ReactNode;
}

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({}),
};

const SalaryDetailsTable: React.FC<any> = ({
  empolyeeId,
  name,
  department,
  endDate,
  startDate,
}) => {
  const [selectedId, setSelectedId] = useState<any>([]);
  const [updateSalary, setUpdateSalary] = useState<any>(null);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const createUserPayroll = useSelector(
    (state: any) => state?.createUserPayroll
  );
  const getAllUserPayroll = useSelector(
    (state: any) => state?.getAllUserPayroll
  );
  const updateUserPayroll = useSelector(
    (state: any) => state?.updateUserPayroll
  );
  const markAsPaid = useSelector((state: any) => state?.markAsPaid);
  const [dataSource, setDataSource] = useState([]);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const bodyEndDate = endDate ? dayjs(endDate).format("YYYY-MM-DD") : null;
    const bodyStartDate = startDate
      ? dayjs(startDate).format("YYYY-MM-DD")
      : null;

    getAllUserPayrollApi(dispatch, pageLimit, {
      empolyeeId,
      name,
      department,
      endDate: bodyEndDate,
      startDate: bodyStartDate,
    });
  }, [
    createUserPayroll?.data,
    markAsPaid.data,
    empolyeeId,
    name,
    department,
    endDate,
    updateUserPayroll.data,
  ]);
  const rowSelection = {
    hideSelectAll: true,
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setSelectedId([...selectedRowKeys]);
    },
  };
  useEffect(() => {
    if (getAllUserPayroll.data?.data?.items?.length > 0) {
      const data: any = getAllUserPayroll.data?.data?.items?.map(
        (item: any) => {
          return {
            key: item.id,
            email: item?.companyUser?.email || "-",
            name: item?.companyUser?.companyUserProfile?.name || "-",
            designation: item?.companyUser?.designation || "-",
            deductionAmount: item?.deductionAmount || "-",
            amountPayable: item?.paidAmount || "-",
            workingHours: item?.workingHours + "/" + item?.totalHours || "-",
            createdBy: item?.createdBy || "-",
            status: item?.status || "-",
            action: (
              <>
                {item?.status === "UNPAID" ? (
                  <button onClick={() => setUpdateSalary(item)}>
                    <img src={editIcon} alt="" />
                  </button>
                ) : (
                  <></>
                )}
              </>
            ),
          };
        }
      );
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAllUserPayroll?.data]);

  function onSucces() {
    setSelectedId([]);
  }

  return (
    <>
      {updateSalary && (
        <UpdateSalaryDrawer
          data={updateSalary}
          onClose={() => setUpdateSalary(null)}
        />
      )}
      <div className="bg-white dark:bg-dark-grayprimary px-[16px] rounded-[.625rem] ">
        <Divider />
        <div className="w-full overflow-hidden rounded-md">
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            scroll={{ x: 1300 }}
            columns={SalaryDetailsTableColumn}
            loading={getAllUserPayroll.loading}
            dataSource={dataSource}
            pagination={{
              total: getAllUserPayroll?.data?.meta?.totalItems,
              onChange: (total: number, range: number) => {
                setPageLimit({
                  page: total,
                  limit: range,
                });
              },
            }}
          />
        </div>
        {selectedId.length > 0 && (
          <div className="fixed bottom-10 shadow-lg shadow-black-500/50 z-20 w-[600px] left-[50%] translate-x-[-50%] bg-white  p-[20px] rounded-xl">
            <div className="flex justify-between items-center font-semibold">
              <div className="flex items-center ">
                <span className="text-[1rem] text-[#344054]">
                  {selectedId.length} Items Selected
                </span>
              </div>
              <div className="flex items-center">
                <Button
                  className="border-[#71BC1C] text-[#71BC1C]"
                  onClick={() =>
                    markAsPaidApi(
                      dispatch,
                      {
                        id: selectedId,
                      },
                      onSucces
                    )
                  }
                >
                  Mark as Paid
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SalaryDetailsTable;
