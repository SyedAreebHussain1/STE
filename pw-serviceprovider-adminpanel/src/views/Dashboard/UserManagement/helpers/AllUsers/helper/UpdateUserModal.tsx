import React, { useEffect } from "react";
import { Button, Col, Divider, Form, Modal, Row, Select } from "antd";
import { TextInput } from "../../../../../../components";
import Upload from "../../../../../../components/inputs/UpLoad";
import { useUpload } from "../../../../../../hooks/useUpload";
import { CgClose, CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../../store/store";
import { updateSystemUsersApi } from "../../../../../../services/api/Dashboard/UserManagment";
import { useForm } from "antd/es/form/Form";

type ArchiveModalProps = {
  data: any;
  open?: boolean;
  setOpen?: any;
};

const UpdateUserModal: React.FC<ArchiveModalProps> = ({
  data,
  open,
  setOpen,
}: ArchiveModalProps) => {
  const [profilePic, setProfilePic, logoPreview, deleteFile]: any = useUpload();
  const [form] = useForm();
  const formData: any = new FormData();
  const dispatch: AppDispatch = useDispatch();
  const updateSystemUser = useSelector((state: any) => state?.updateSystemUser);

  const onFinish = (values: any) => {
    formData.append("file", profilePic[0]);
    formData.append("name", values?.name);
    formData.append("phoneNo", values?.phoneNo);
    formData.append("email", values?.email);
    updateSystemUsersApi(dispatch, formData, data?.id, onSuccess);
  };
  const onSuccess = () => {
    setOpen(false);
  };
  useEffect(() => {
    form.setFieldValue("name", data?.profile?.name);
    form.setFieldValue("email", data?.email);
    form.setFieldValue("phoneNo", data?.phone);
  }, [data]);

  const title = (
    <h3 className="!text-[1.17rem] dark:text-white text-[#1D2939] !font-semibold ">
      Update Users
    </h3>
  );

  return (
    <div className="people-delete">
      <Modal
        title={title}
        centered
        width={739}
        footer={null}
        open={open}
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
                    <img
                      className="h-40 w-40 "
                      src={
                        !profilePic[0]
                          ? data?.profile?.profilePhoto
                          : profilePic
                      }
                      alt="img"
                    />
                    {logoPreview?.length > 0 && (
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
                    )}
                  </div>
                )}
              </div>
            </Col>
            <Col lg={12} sm={24} xs={24} md={24}>
              <span className="text-[#667085] font-medium text-[.975rem]  ">
                Name
              </span>
              <TextInput name="name" className="h-[48px] rounded-md" />
            </Col>
            <Col lg={12} sm={24} xs={24} md={24}>
              <span className="text-[#667085] font-medium text-[.975rem]  ">
                Email
              </span>

              <TextInput name="email" className="h-[48px] rounded-md" />
            </Col>
            <Col lg={12} sm={24} xs={24} md={24}>
              <span className="text-[#667085] font-medium text-[.975rem]  ">
                Phone No
              </span>

              <TextInput
                name="phoneNo"
                className="h-[48px] rounded-md"
                isNumber
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
                loading={updateSystemUser?.loading}
                type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
              >
                Update User
              </Button>
            </div>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateUserModal;
