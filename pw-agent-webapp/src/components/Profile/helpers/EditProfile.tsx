import { Button, DatePicker, Form, Input, Modal, Upload } from "antd";
import { useEffect, useState } from "react";
import { getFromStorage } from "../../../utils/storage";
import { MdModeEdit } from "react-icons/md";
import { getProfileApi, updateProfileApi } from "../../../redux/api/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { successMessage } from "../../../utils/message";
import { uploadImageApi } from "../../../redux/api/InventoryManagement";
const EditProfile = ({
  isModalOpen,
  handleCancel,
  form,
  url,
  NoProfile,
  setIsModalOpen,
}: any) => {
  const user = getFromStorage("user");
  const dispatch: AppDispatch = useDispatch();

  const data = form.getFieldsValue();

  const [file, setFile] = useState<any>(!url ? NoProfile : url);

  const handleUpdate = (value: any) => {
    setIsModalOpen(false);
    successMessage("Profile updated successfully");
    const body = { ...value, profile_picture_url: file };


    updateProfileApi(dispatch, body,onSuccessProfileedit);
    
  };
  function handleChange(event: any) {
    const formData = new FormData();
    formData.append("files", event.target.files[0]);
    uploadImageApi(dispatch, formData, onSuccess, "profile");
  }
  const onSuccess = (res: any, name: any) => {
    setFile(res?.[0]);
  };
  const onSuccessProfileedit = () => {
    getProfileApi(dispatch);
  };


  return (
    <div>
      <Modal
       
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex justify-center items-center text-[20px]">Profile</div>
        <Form
          onFinish={handleUpdate}
          name="submit"
          layout="vertical"
          form={form}
        >
          <div className="mt-4 flex justify-center items-center mb-14">
            <img
              className="h-[90px] w-[90px] border-2 rounded-full border-[#27A3A3] object-cover"
              src={file}
              alt=""
            />
            <label htmlFor="profile_picture_url" style={{ cursor: "pointer" }}>
              <MdModeEdit
                className="text-[15px]    text-[#27A3A3] text-center rounded-full items-center flex"
                size={20}
              />

              <input
                id="profile_picture_url"
                name="profile_picture_url"
                type="file"
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Form.Item
              name={"fullName"}
              label="FullName"
              rules={[
                {
                  required: true,
                  message: "Please input Fullname",
                },
              ]}
            >
              <Input className=" p-2" />
            </Form.Item>
            <Form.Item name={"dob"} initialValue={data?.dob} label="DOB">
              <DatePicker
                className=" text-[gray] p-2 md:w-[240px]"
               
              />
            </Form.Item>
          </div>
        
            <>
              <div className="grid grid-cols-2 gap-2">
                <Form.Item label="City" name={"city"}>
                  <Input className=" text-[gray] p-2" placeholder="City" />
                </Form.Item>
                <Form.Item name={"country"} label="Country">
                  <Input className=" text-[gray] p-2" placeholder="Country" />
                </Form.Item>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Form.Item label="Pin Code" name={"pinCode"}>
                  <Input className=" text-[gray] p-2" placeholder="Pin Code" />
                </Form.Item>

                <Form.Item
                  label="Past Experiance"
                  name={"pastExperience"}
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Experiance (year)",
                    },
                  ]}
                >
                  <Input
                    className=" text-[gray] p-2"
                    placeholder="Experiance (Year)"
                  />
                </Form.Item>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Form.Item label="Address">
                  <Input className=" text-[gray] p-2" placeholder="address" />
                </Form.Item>
                <Form.Item
                  label="About Me"
                  name="shortDescription"
                  rules={[
                    {
                      required: true,
                      message: "Please enter About Me",
                    },
                  ]}
                >
                  <Input.TextArea
                    className="text-[gray] p-2"
                    placeholder="About me"
                  />
                </Form.Item>
              </div>
              <div className="grid ">
                <Button
                  htmlType="submit"
                  className="bg-[#27A3A3] text-[17px] font-medium text-white  rounded-lg  items-center flex justify-center p-5"
                >
                  Save Changes
                </Button>
              </div>
            </>
        
        </Form>
      </Modal>
    </div>
  );
};

export default EditProfile;
