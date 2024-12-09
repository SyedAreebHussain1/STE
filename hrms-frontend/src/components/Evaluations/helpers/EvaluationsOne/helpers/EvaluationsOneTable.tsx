import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";
import evaluationsOneColumns from "../../../../../utils/tableColumns/evaluationsOneColumns.json";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import editPenIcon from "../../../../../assets/editPenIcon.png";
import { getAllEvaluationsForManagmntApi } from "../../../../../redux/api/Evolution";
import { EditEvalutionDrawer } from "./EditEvalutionDrawer";
import useToggle from "../../../../../hooks/useToggle";

const EvaluationsOneTable: React.FC<any> = ({ forApiCalling }) => {
  const dispatch: AppDispatch = useDispatch();
  const [dataSource, setDataSource] = useState([]);
  const [evaluationId, setEvaluationId] = useState<any>(null);
  const getAllEvaluationsForManagmnt = useSelector(
    (state: any) => state?.getAllEvaluationsForManagmnt
  );
  const editEvaluationForm = useSelector(
    (state: any) => state?.editEvaluationForm
  );
  const createEvaluationForDepartment = useSelector(
    (state: any) => state?.createEvaluationForDepartment
  );
  const [open, toggle] = useToggle();
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  useEffect(() => {
    getAllEvaluationsForManagmntApi(dispatch, pageLimit);
  }, [
    dispatch,
    pageLimit,
    editEvaluationForm,
    createEvaluationForDepartment,
    forApiCalling,
  ]);
  useEffect(() => {
    if (getAllEvaluationsForManagmnt?.data?.data?.items?.length > 0) {
      const data: any = getAllEvaluationsForManagmnt?.data?.data?.items.map(
        (item: any) => {
          return {
            key: item?.id,
            evaluation: item?.title,
            department: item?.companyDepartment?.title,
            action: (
              <div className="flex gap-2">
                <button onClick={() => [toggle(), setEvaluationId(item)]}>
                  <img src={editPenIcon} />
                </button>
              </div>
            ),
          };
        }
      );
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAllEvaluationsForManagmnt?.data?.data]);

  return (
    <React.Fragment>
      {open && evaluationId ? (
        <EditEvalutionDrawer open={open} onClose={toggle} data={evaluationId} />
      ) : (
        <></>
      )}
      <div className="bg-white dark:bg-dark-grayprimary px-[16px] rounded-[.625rem] ">
        <Divider />
        <div className="w-full overflow-hidden rounded-md">
          <Table
            scroll={{ x: true }}
            columns={evaluationsOneColumns}
            loading={getAllEvaluationsForManagmnt?.loading}
            dataSource={dataSource}
            pagination={{
              total: getAllEvaluationsForManagmnt?.data?.data?.meta?.totalItems,
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
    </React.Fragment>
  );
};

export default EvaluationsOneTable;
