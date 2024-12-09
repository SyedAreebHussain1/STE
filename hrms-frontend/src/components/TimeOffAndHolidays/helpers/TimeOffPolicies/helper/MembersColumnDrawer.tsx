import React, { useEffect, useState } from "react";
import { Drawer, Space, Col, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { getLeaveMembersByPolicyApi } from "../../../../../redux/api/TimeOffAndHoliday/TimeOfPolicies";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

interface MembersColumn {
  open?: boolean;
  setOpen?: any;
  updateData: any;
}

const MembersColumnDrawer: React.FC<MembersColumn> = ({
  open,
  setOpen,
  updateData,
}: MembersColumn) => {
  const dispatch = useDispatch();
  const [members, setMembers] = useState<[] | any>([]);
  const getLeaveMembersByPolicy = useSelector(
    (state: RootState) => state.getLeaveMembersByPolicyId
  );
  useEffect(() => {
    if (updateData?.id) {
      getLeaveMembersByPolicyApi(dispatch, updateData?.id);
    }
  }, [updateData?.id, open]);

  useEffect(() => {
    if (getLeaveMembersByPolicy?.data) {
      const data: [] = getLeaveMembersByPolicy?.data?.data?.map(
        (item: any, i: number) => {
          return item?.companyUser?.companyUserProfile?.name;
        }
      );
      setMembers(data);
    }
  }, [getLeaveMembersByPolicy?.data]);

  return (
    <>
      <Drawer
        title={<span className="text-[1.25rem]  font-bold">All members</span>}
        closable={false}
        placement="right"
        width={448}
        onClose={() => setOpen(false)}
        open={open}
        className="bg-[#fff] h-[100vh] "
        extra={
          <Space>
            <CloseOutlined onClick={() => setOpen(false)} />
          </Space>
        }
      >
        <Row gutter={16}>
          {members.length > 0 ? (
            members?.map((item: any, i: number) => {
              return (
                <Col sm={24} xs={24} lg={24} md={24} key={i}>
                  <div className="flex justify-between items-center border-b-2 mt-3 p-[10px]">
                    <div className="flex gap-1 items-center justify-center">
                      <div className="rounded-full border bg-[#EFE3FF] p-[7px] w-[30px] h-[30px] flex items-center justify-center">
                        {item?.[0]?.toUpperCase()}
                      </div>
                      <div>
                        <p className="text-[.8125rem] dark:text-white text-[#344054] font-medium">
                          {item?.[0]?.toUpperCase()}
                          {item?.substring(1, item?.length)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })
          ) : (
            <div className="flex justify-center items-center mt-64 ml-16">
              <h1 className="text-6xl">No data</h1>
            </div>
          )}
        </Row>
      </Drawer>
    </>
  );
};

export default MembersColumnDrawer;
