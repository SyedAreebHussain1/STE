import React, { useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";
import evaluationsUsersColumns from "../../../../../utils/tableColumns/evaluationsUsersColumns.json";
import { useDispatch, useSelector } from "react-redux";
import editPenIcon from "../../../../../assets/editPenIcon.png";
import UpdateEvaluatedDrawer from "./UpdateEvaluatedDrawer";
import useToggle from "../../../../../hooks/useToggle";
import { getEvaluatedUsersApi } from "../../../../../redux/api/Evolution";
import EvaluatedDetailDrawer from "./EvaluatedDetailDrawer";

const EvaluatedUsersTable: React.FC<any> = ({ forApiCalling }) => {
  const [dataSource, setDataSource] = useState([]);
  const [userId, setUserId] = useState(null);
  const [forUpdateUserId, setForUpdateUserId] = useState(null);
  const [showDetail, showDetailToggle] = useToggle();
  const [open, toggle] = useToggle();
  const dispatch = useDispatch();
  const getEvaluatedUsers = useSelector(
    (state: any) => state?.getEvaluatedUsers
  );
  const updateEvaluationsForUser = useSelector(
    (state: any) => state?.updateEvaluationsForUser
  );

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  useEffect(() => {
    getEvaluatedUsersApi(dispatch, pageLimit);
  }, [dispatch, pageLimit, forApiCalling, updateEvaluationsForUser]);
  useEffect(() => {
    const data: any = getEvaluatedUsers?.data?.data?.items?.map(
      (item: any, i: any) => {
        return {
          key: i,
          name: item.companyUserProfile?.name,
          department: item?.companyDepartment?.title,
          evaluationSkill: (
            <div>
              <Button onClick={() => [showDetailToggle(), setUserId(item)]}>
                View Detail
              </Button>
            </div>
          ),
          action: (
            <div className="flex gap-2">
              <button onClick={() => [toggle(), setForUpdateUserId(item)]}>
                <img src={editPenIcon} />
              </button>
            </div>
          ),
        };
      }
    );
    setDataSource(data);
  }, [getEvaluatedUsers]);

  return (
    <>
      {open && forUpdateUserId && (
        <UpdateEvaluatedDrawer
          open={open}
          onClose={toggle}
          forUpdateUserId={forUpdateUserId}
        />
      )}
      {showDetail && (
        <EvaluatedDetailDrawer
          open={showDetail}
          onClose={showDetailToggle}
          forUpdateUserId={userId}
        />
      )}
      <div className="bg-white dark:bg-dark-grayprimary px-[16px] rounded-[.625rem] ">
        <Divider />
        <div className="w-full overflow-hidden rounded-md">
          <Table
            scroll={{ x: true }}
            columns={evaluationsUsersColumns}
            loading={getEvaluatedUsers?.loading}
            dataSource={dataSource}
            pagination={{
              total: getEvaluatedUsers?.data?.data?.meta?.totalItems,
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
    </>
  );
};

export default EvaluatedUsersTable;
