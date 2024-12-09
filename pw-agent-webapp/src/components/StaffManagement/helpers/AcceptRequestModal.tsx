import { Button, Col, Form, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { RoleType } from "./AddNewStaffDrawer";
import {
  acceptStaffRequestApi,
  getonlyStaffManagerApi,
} from "../../../redux/api/StaffManagement";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../../utils/storage";

type Props = {
  open: boolean;
  setOpen: any;
  data: any;
};

const AcceptRequestModal = ({ open, setOpen, data }: Props) => {
  const [role, setRole] = useState<any>();
  const dispatch = useDispatch();
  let user = getFromStorage("user");

  const [form] = useForm();
  const getOnlyStaffManager = useSelector(
    (state: any) => state.getOnlyStaffManager
  );

  const onFinish = (value: any) => {
    const body: any = {
      roleTitle: value.roleType,
      userId: data?.id,
    };
    if (role == RoleType.agentStaff) {
      body.managerId = value.managerId;
    } else {
      body.managerId = user.userId;
    }
    acceptStaffRequestApi(body, dispatch, onSuccess);
  };
  const onSuccess = () => {
    setOpen(false);
  };

  useEffect(() => {
    getonlyStaffManagerApi(dispatch, user.userId);
  }, [user.userId]);

 
  return (
    <Modal
      title="Assign Role"
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={false}
    >
      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24} md={24}>
            <div className="mt-1 mb-1">
              <p className="text-[#292D35] font-medium text-[1rem]">
                Role<span className="text-[red]">*</span>
              </p>
            </div>
            <Form.Item
              name="roleType"
              rules={[{ required: true, message: "Please Select Role!" }]}
            >
              <Select
                className="h-[48px] w-full"
                placeholder="Select"
                onChange={(e: any) => setRole(e)}
                options={[
                  {
                    label: "Manager",
                    value: RoleType.agentManager,
                  },
                  {
                    label: "Staff",
                    value: RoleType.agentStaff,
                  },
                ]}
              />
            </Form.Item>
          </Col>
          {role == RoleType.agentStaff && (
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="mt-1 mb-1">
                <p className="text-[#292D35] font-medium text-[1rem]">
                  Manager<span className="text-[red]">*</span>
                </p>
              </div>

              <Form.Item
                name="managerId"
                rules={[{ required: true, message: "Please Select Manager!" }]}
              >
                <Select
                  className="h-[48px] w-full"
                  placeholder="Select"
                  options={[
                    {
                      label: "NO TEAM",
                      value: getFromStorage("user").userId,
                    },
                    ...getOnlyStaffManager?.data.map((val: any) => ({
                      label: val?.profile?.fullName,
                      value: val.id,
                    })),
                  ]}
                />
              </Form.Item>
            </Col>
          )}
          <div className="flex justify-end w-[100%]">
            <Button
              htmlType="submit"
              type="primary"
              className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
            >
              Accept
            </Button>
          </div>
        </Row>
      </Form>
    </Modal>
  );
};
export default AcceptRequestModal;
