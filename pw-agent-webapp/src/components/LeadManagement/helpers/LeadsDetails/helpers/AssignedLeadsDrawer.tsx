import React, { useState } from "react";
import { Button, Col, Drawer, Form, Row, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import deleleIcon from "../../../../../assets/delete.png";
import { leadRemoveLeadPermissionApi } from "../../../../../redux/api/LeadManagement";
import { useParams } from "react-router-dom";

type AddNewStaffDrawerPorps = {
  toggle: any;
  setToggle: any;
  data: any;
};

const AssignedLeadsDrawer: React.FC<AddNewStaffDrawerPorps> = ({
  toggle,
  setToggle,
  data,
}: AddNewStaffDrawerPorps) => {
  const dispatch: AppDispatch = useDispatch();
  const leadRemoveLeadPermission = useSelector(
    (state: any) => state?.leadRemoveLeadPermission
  );

  const onFinish = () => { };

  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium text-[#475467]">
            Assigned Lead
          </h3>
        }
        placement="right"
        width={460}
        open={toggle}
        closable={false}
        onClose={() => setToggle(false)}
        extra={
          <Space>
            <CloseOutlined onClick={() => setToggle(false)} />
          </Space>
        }
      >
        <Form
          onFinish={onFinish}
          name="assignedLead"
          autoComplete="off"
          initialValues={{ remember: true }}
        >
          <Row gutter={16}>
            {data?.leadPermission.map((item: any, i: number) => {
              return (
                <Col sm={24} xs={24} lg={24} md={24} key={i}>
                  <div className="flex justify-between items-center border-b-2 mt-3 p-[10px]">
                    <div className="flex gap-1 items-center justify-center">
                      <div className="rounded-full border bg-[#EFE3FF] p-[7px] w-[30px] h-[30px] flex items-center justify-center">
                        {item?.user.profile?.fullName[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="text-[.8125rem] text-[#344054] font-medium">
                          {item?.user.profile?.fullName[0].toUpperCase()}
                          {item?.user.profile?.fullName.substring(
                            1,
                            item?.user.profile?.fullName.length
                          )}
                        </p>
                        <p className="text-[.75rem] text-[#98A2B3] font-medium">
                          {item?.user.phone}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          leadRemoveLeadPermissionApi(dispatch, {
                            userId: item?.userId,
                            leadId: item?.leadId,
                          })
                        }
                      >
                        <img src={deleleIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default AssignedLeadsDrawer;
