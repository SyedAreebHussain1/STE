import { Button, Col, Form, Modal, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../helpers/inputs/TextInput";
import {
  addManagerApi,
  getAllCompanyUsersApi,
  getAllDepartmentApi,
} from "../../../redux/api/Department";
import SelectFieldComponent from "../../../helpers/inputs/SelectFieldComponent";
import { RootState } from "../../../redux/store";
import RoundedButton from "../../../helpers/button/RoundedButton";
import { errorMessage } from "../../../utils/message";

interface Props{
  open: boolean;
  close: () => void;
  departmentId: any;
  setDepartmentId: any;
};

const AddManagerModal = ({
  open,
  close,
  departmentId,
  setDepartmentId,
}: Props) => {
  const [upload, setUpload] = useState(false);
  const [managers, setManagers] = useState<any>([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [form] = useForm();
  const dispatch = useDispatch();
  const getAllCompanyUsers = useSelector(
    (state: RootState) => state.getAllCompanyUsers
  );
  const onFinish = (values: any) => {
    if (!selectedUser) {
      errorMessage("Please select a user");
      return;
    }

    addManagerApi(dispatch, departmentId, { UserId: selectedUser }, onSuccess);
  };

  useEffect(() => {
    getAllCompanyUsersApi(departmentId, dispatch, { page: 1, limit: 10 });
  }, []);

  const onSuccess = () => {
    setDepartmentId(null);
    close();
    getAllDepartmentApi(dispatch, { page: 1, limit: 10 });
  };

  return (
    <Modal
      title={<span className="text-[1rem] font-medium">Add Manager</span>}
      centered
      width={561}
      open={open}
      onCancel={() => {
        close();
        setDepartmentId(null);
      }}
      footer={false}
    >
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="editCampaignName"
      >
        <Row gutter={16} className="py-1">
          <Col span={24} className="mt-4">
            <span className="text-[#292D35] dark:text-white font-medium text-base dark-input-label">
              Company Users
            </span>
            <SelectFieldComponent
              className={"dark-input"}
              api={getAllCompanyUsersApi}
              onChange={(e) => setSelectedUser(e)}
              byId={departmentId}
              name={"UserId"}
              labelCustom={(value: any) => value?.companyUserProfile?.name}
              loading={getAllCompanyUsers.loading}
              placeholder={<p className="dark:text-gray-500">Select User</p>}
            ></SelectFieldComponent>
          </Col>
        </Row>
        <div className="flex justify-end w-[100%] mt-10">
          <RoundedButton
            htmlType="submit"
            title={"Add Manager"}
            type="primary"
            className=""
          />
        </div>
      </Form>
    </Modal>
  );
};
export default AddManagerModal;
