import React, { useEffect, useState } from "react";
import { Button, Drawer, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
  assignUserNewApi,
  getLeadsAssignUsersOrnotAssignUsersApi,
} from "../../../redux/api/LeadManagement";
import { AppDispatch } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage } from "../../../utils/message";
type AssignLeadDrawerProps = {
  toggle: boolean;
  setToggle: (e: boolean) => void | undefined | null;
  selectedId: number | string | undefined | null | [number];
};

const AssignLeadDrawer: React.FC<AssignLeadDrawerProps> = ({
  toggle,
  setToggle,
  selectedId,
}: AssignLeadDrawerProps) => {
  const [form] = useForm();
  const dispatch: AppDispatch = useDispatch();
  const [dropDown, setDropDown] = useState(false);
  const [userDataId, setUserDataId] = useState<any>([]);
  const [limit, setLimit] = useState(2);
  const getLeadsAssignUsersOrnotAssignUsers = useSelector(
    (state: any) => state?.getLeadsAssignUsersOrnotAssignUsers
  );

  useEffect(() => {
    if (selectedId) {
      getLeadsAssignUsersOrnotAssignUsersApi(dispatch, selectedId);
    }
  }, [selectedId]);
  function handleSubmit() {
    if (userDataId.length > 0) {
      const body = {
        userId: userDataId,
        leadId: selectedId,
      };
      assignUserNewApi(dispatch, body, onSuccess);
    } else {
      errorMessage("Select atleast one user");
    }
  }
  function onSuccess() {
    setToggle(false);
  }
  return (
    <>
      <Drawer
        title={
          <h3 className="text-[1.2rem] font-medium text-[#475467]">
            Assign Lead
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
        footer={
          <div className="flex gap-2 mt-4">
            <Button
              onClick={() => setToggle(false)}
              className="border text-[#475467] h-[48px]  text-[1rem] font-semibold w-full"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={handleSubmit}
              className="bg-primary text-[#fff] border-none h-[48px]  text-[1rem] font-medium  w-full"
            >
              Assign Leads
            </Button>
          </div>
        }
      >
        <div>
          <h5>Select Project inventory</h5>
          <div className="border border-gray-300 p-2 rounded-lg mt-2">
            <div
              onClick={() => [setDropDown(!dropDown), setLimit(2)]}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="text-[#475467] text-[.8125rem]">Select</div>
              <div>
                <IoIosArrowDown className="text-[20px] text-[#475467]" />
              </div>
            </div>
          </div>
          {dropDown && (
            <div className="border border-gray-300 p-2 rounded-lg mt-2 bg-[rgb(249,249,249)]">
              <div className="rounded-[8px]">
                <div className="flex justify-between">
                  <div className="text-[#475467] text-[.8125rem] font-medium">
                    {userDataId.length ? userDataId.length : ""} Select Users
                  </div>
                  <div className="flex">
                    {limit <= 2 ? (
                      <div
                        onClick={() =>
                          setLimit(
                            getLeadsAssignUsersOrnotAssignUsers?.data?.length
                          )
                        }
                        className="flex text-[#27A3A3] font-semibold text-[.8125rem] cursor-pointer"
                      >
                        {" "}
                        View All{" "}
                        <IoIosArrowDown className="text-[20px] text-[#27A3A3]" />
                      </div>
                    ) : (
                      <div
                        onClick={() => setLimit(2)}
                        className="flex text-[#27A3A3] font-semibold text-[.8125rem] cursor-pointer"
                      >
                        {" "}
                        View All{" "}
                        <IoIosArrowUp className="text-[20px] text-[#27A3A3]" />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={
                    getLeadsAssignUsersOrnotAssignUsers.data.length > 3
                      ? "overflow-auto max-h-[190px]"
                      : ""
                  }
                >
                  {getLeadsAssignUsersOrnotAssignUsers?.data
                    ?.filter((val: any) => !val?.profile?.checked)
                    .map((item: any, i: number) => {
                      if (limit > i) {
                        return (
                          <div
                            className={
                              userDataId.includes(item?.id)
                                ? "flex gap-2 mt-2 cursor-pointer border rounded-sm p-1"
                                : "flex gap-2 mt-2 cursor-pointer p-1"
                            }
                            onClick={() => {
                              const userDataInclude = userDataId.includes(
                                item?.id
                              );
                              if (userDataInclude) {
                                const filter = userDataId.filter(
                                  (val: any) => val !== item.id
                                );
                                setUserDataId(filter);
                              } else {
                                setUserDataId((prev: any) => {
                                  return [...prev, item?.id];
                                });
                              }
                            }}
                          >
                            <div className="flex gap-3 items-center ">
                              <div className="rounded-full w-[32px] h-[31.84px] bg-[#EFE3FF] justify-center flex items-center text-[#000000] text-[.7275rem] font-medium">
                                {item?.profile?.fullName[0].toUpperCase()}
                              </div>
                              <div>
                                <p className="text-[.8125rem] font-medium text-[#344054]">
                                  {" "}
                                  {item?.profile?.fullName}
                                </p>
                                <p className="text-[.75rem] text-[#98A2B3] font-medium">
                                  {" "}
                                  {item?.phone}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default AssignLeadDrawer;
