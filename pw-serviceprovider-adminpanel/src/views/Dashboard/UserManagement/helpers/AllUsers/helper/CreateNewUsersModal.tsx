import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Form, Modal, Row } from "antd";
import { SelectFieldComponent, TextInput } from "../../../../../../components";
import Upload from "../../../../../../components/inputs/UpLoad";
import { useUpload } from "../../../../../../hooks/useUpload";
import { CgClose, CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../../store/store";
import {
  createUserApi,
  getSystemRoleApi,
} from "../../../../../../services/api/Dashboard/UserManagment";
import { useForm } from "antd/es/form/Form";

type ArchiveModalProps = {
  open?: boolean;
  setOpen?: any;
};

const CreateNewUsersModal: React.FC<ArchiveModalProps> = ({
  open,
  setOpen,
}: ArchiveModalProps) => {
  const [profilePic, setProfilePic, logoPreview, deleteFile]: any = useUpload();
  const [form] = useForm();
  const [role, setRole] = useState("");
  const formData: any = new FormData();
  const dispatch: AppDispatch = useDispatch();
  const getSystemRole = useSelector((state: any) => state?.getSystemRole);
  const { loading } = useSelector((state: any) => state?.createUser);
  const onFinish = (values: any) => {
    formData.append("file", profilePic[0]);
    formData.append("name", values.name);
    formData.append("phoneNo", values.phoneNo);
    formData.append("email", values.email);
    formData.append("systemRoleId", role);
    createUserApi(dispatch, formData, onSuccess);
  };
  const onSuccess = () => {
    setOpen(false);
  };
  const onChange = (id: any) => {
    setRole(id);
  };

  const title = (
    <h3 className="!text-[1.17rem] dark:text-white text-[#1D2939] !font-semibold ">
      Add New User
    </h3>
  );

  return (
    <div className="people-delete">
      <Modal
        title={title}
        centered
        open={open}
        width={739}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Divider />
        <Form
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={28}>
            <Col lg={12} xs={24} sm={24}>
              <div className="mb-[20px] flex justify-center items-center">
                <Upload
                  name="Profile"
                  label="Picture"
                  files={profilePic}
                  setFiles={setProfilePic}
                  supportedFileTypes={["png", "jpg", "jpeg"]}
                  fileUploadLimit={1}
                  icon={
                    <CgProfile className="w-[50px] h-[50px] text-center text-[#667085] dark:text-dark-borderColor" />
                  }
                />
              </div>
            </Col>
            <Col lg={8} xs={24}>
              <div className="h-[170px]">
                {logoPreview?.length > 0 ? (
                  <div className="relative w-fit h-[100%]">
                    <img
                      src={logoPreview?.[0]?.url}
                      alt=""
                      className="h-[80%] w-[100%] object-contain"
                    />
                    <span
                      className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                      onClick={() =>
                        deleteFile(
                          logoPreview?.length > 0 && logoPreview?.[0]?.name
                        )
                      }
                    >
                      <CgClose />
                    </span>
                  </div>
                ) : (
                  <div>
                    <img src={profilePic} alt="" />
                  </div>
                )}
              </div>
            </Col>
            <Col lg={12} sm={24} xs={24} md={24}>
              <span className="text-[#667085] font-medium text-[.975rem]  ">
                Name
              </span>
              <TextInput name="name" className="h-[48px] rounded-md" required />
            </Col>
            <Col lg={12} sm={24} xs={24} md={24}>
              <span className="text-[#667085] font-medium text-[.975rem]  ">
                Email
              </span>

              <TextInput
                name="email"
                className="h-[48px] rounded-md"
                required
              />
            </Col>
            <Col lg={12} sm={24} xs={24} md={24}>
              <span className="text-[#667085] font-medium text-[.975rem]  ">
                Phone No
              </span>

              <TextInput
                name="phoneNo"
                required
                className="h-[48px] rounded-md"
                isNumber
              />
            </Col>

            <Col lg={12} sm={24} xs={24} md={24}>
              <span className="text-[#667085] font-medium text-[.975rem]  ">
                Assign Role
              </span>

              <SelectFieldComponent
                name="systemRoleId "
                onChange={onChange}
                apiwithoutId={getSystemRoleApi}
                loading={getSystemRole?.loading}
              />
            </Col>
            <div className="flex justify-end mt-[30px] gap-3">
              <Button
                className=" py-[11px] px-[33px] flex items-center font-semibold h-[40px]"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="middle"
                key="1"
                loading={loading}
                type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
              >
                Add User
              </Button>
            </div>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateNewUsersModal;
