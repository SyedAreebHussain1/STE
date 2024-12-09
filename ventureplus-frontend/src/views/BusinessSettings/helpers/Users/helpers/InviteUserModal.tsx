import { Button, Divider, Form, Modal, Select } from "antd";
import { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../../components/button/RoundedButton";
import TextInput from "../../../../../components/inputs/TextInput";
import { RootState } from "../../../../../redux/store";
import {
  createCompanyUserApi,
  getCompanyUsersApi,
} from "../../../../../services/api/Business";
import { errorMessage } from "../../../../../utils/message";
import { getBusinessCountApi } from "../../../../../services/api/GetBusinessCount";

interface InviteUserModalProps {
  open?: any | undefined;
  onClose?: any;
}

const InviteUserModal = ({ open, onClose }: InviteUserModalProps) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [file, setFile] = useState<any | null>(null);
  const [upload, setUpload] = useState(false);
  const inputRef = useRef<any>(null);
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );

  type onFinishType = {
    name: string;
    email: string;
    phoneNo: string;
    designation: string;
    businessId: string;
  };

  const onFinish = ({
    name,
    email,
    phoneNo,
    designation,
    businessId,
  }: onFinishType) => {
    //  hit the create user api
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("designation", designation);
    formData.append("businessId", currentSelectedBusiness?.business?.id);
    if (phoneNo) formData.append("phoneNo", phoneNo);
    if (file) formData.append("file", file);
    createCompanyUserApi(dispatch, formData, onSuccess);
  };

  const onSuccess = () => {
    onClose(false);
    getCompanyUsersApi(dispatch);
    getBusinessCountApi(dispatch);
  };

  const uploadHandler = (ref: any) => {
    ref.current.click();
  };

  const changeHandler = (e: any) => {
    const { files } = e.target;
    if (files.length === 0) return;
    if (
      files[0]?.name.includes(".png") ||
      files[0]?.name.includes(".jpg") ||
      files[0]?.name.includes(".jpeg")
    ) {
      let formData: any = new FormData();
      setUpload(true);
      setFile(files[0]);
      formData.append("resume", files[0]);
    } else {
      errorMessage("Invalid file type. Please select an Doc file or PDF file.");
    }
  };

  return (
    <Modal
      title={"Invite New User"}
      centered
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
    >
      <Divider />
      <Form
        onFinish={onFinish}
        name="inviteNewUsers"
        form={form}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <div>
          <label htmlFor="name" className="input-label-sm">
            Name
          </label>
          <TextInput
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
            id="name"
            name="name"
            className="min-h-[40px] "
            placeholder="e.g. John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="input-label-sm">
            Email
          </label>
          <TextInput
            rules={[
              {
                required: true,
                message: "This field is required",
              },
              {
                type: "email",
                message: "Please input valid Email!",
              },
            ]}
            id="email"
            name="email"
            className="min-h-[40px] "
            placeholder="e.g. Johndow@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="phoneNo" className="input-label-sm">
            Phone No.
          </label>
          <TextInput
            isNumber
            id="phoneNo"
            name="phoneNo"
            className="min-h-[40px] "
            placeholder="Enter your number"
          />
        </div>

        <div className="flex gap-2 justify-between">
          <div className="w-full">
            <label htmlFor="designation" className="input-label-sm">
              User Role
            </label>
            <Form.Item
              className="w-full min-h-[40px]"
              id="designation"
              name="designation"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <TextInput
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                id="designation"
                name="designation"
                className="min-h-[40px] "
                placeholder="e.g. John Doe"
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-[#292D35] font-medium text-base dark-input-label">
            Upload File
          </span>
          <Button
            onClick={() => uploadHandler(inputRef)}
            className="gap-[8px] h-[48px] border rounded-full flex justify-center items-center cursor-pointer bg-white"
          >
            <input
              type="file"
              ref={inputRef}
              onChange={(e) => changeHandler(e)}
              className="hidden w-0"
              accept=".png,.jpg,.jpeg"
            ></input>
            <span className="text-[#475467] text-[1rem] font-semibold">
              Browse files
            </span>
          </Button>
          {upload && (
            <div className="flex justify-between">
              <div className="w-full">
                <div className="bg-gray-100 p-4 flex rounded-[5px] justify-between items-center gap-5 my-4">
                  <div className="flex items-center gap-1">
                    <div>
                      <p className="font-medium text-[.8125rem] text-[#344054] cursor-pointer flex items-center gap-1">
                        {file?.name}
                      </p>
                      <p className="text-[#98A2B3] text-[.75rem] font-medium">
                        {file?.bytes} bytes
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        if (inputRef?.current?.value) {
                          inputRef.current.value = null;
                        }
                        setUpload(false);
                        setFile(null);
                      }}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between gap-2">
          <RoundedButton
            onClick={() => onClose(false)}
            type="danger"
            title={"Cancel"}
            sm
          />

          <RoundedButton
            title={"Send Invitation"}
            type="primary"
            htmlType="submit"
            sm
          />
        </div>
      </Form>
    </Modal>
  );
};

export default InviteUserModal;
