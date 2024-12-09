import { CloseOutlined } from "@ant-design/icons";
import { Col, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileIcon } from "../../../../../assets/filledPlanSetupAssets";
import RoundedButton from "../../../../../components/button/RoundedButton";
import TextInput from "../../../../../components/inputs/TextInput";
import { RootState } from "../../../../../redux/store";
import {
  getCompanyUserByIdApi,
  updateCompanyUserByIdApi,
} from "../../../../../services/api/CompanyUser";
import { infoMessage } from "../../../../../utils/message";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getFromStorage } from "../../../../../utils/storage";

const ProfileForm = () => {
  const [form] = useForm();
  const ref = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const { isAuth, userData } = useSelector((state: RootState) => state.user);
  const getCompanyUserById = useSelector(
    (state: RootState) => state.getCompanyUserById?.data
  );
  const updateCompanyUserById = useSelector(
    (state: RootState) => state.updateCompanyUserById
  );
  const user = getFromStorage("user");

  useEffect(() => {
    if (userData?.companyUser?.id)
      getCompanyUserByIdApi(dispatch, userData?.companyUser?.id);
  }, [userData?.companyUser?.id]);

  useEffect(() => {
    form.setFieldsValue({
      name: getCompanyUserById?.name,
      designation: getCompanyUserById?.designation,
      email: getCompanyUserById?.email,
    });
    setPhoneNumber(getCompanyUserById?.phoneNo);
  }, [getCompanyUserById]);

  const onUpdateCompanyUser = () => {
    getCompanyUserByIdApi(dispatch, userData?.companyUser?.id, onSuccess);
    setFile(null);
  };

  const onSuccess = (response: any) => {
    const updatedUser = {
      ...user,
      companyUser: {
        ...user.companyUser,
        profilePhoto: response?.data?.profilePhoto,
      },
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    location.reload();
  };

  const onFinish = (values: any) => {
    const formData = new FormData();
    for (const property in values) {
      if (property !== "email") formData.append(property, values[property]);
    }

    if (file) {
      formData.append("file", file);
    }

    formData.append("phoneNo", phoneNumber);

    updateCompanyUserByIdApi(
      dispatch,
      getCompanyUserById?.id,
      formData,
      onUpdateCompanyUser
    );
  };

  const changeHandler = (e: any) => {
    const { files } = e.target;
    if (
      files[0]?.name.includes(".png") ||
      files[0]?.name.includes(".jpg") ||
      files[0]?.name.includes(".jpeg")
    ) {
      if (files.length === 0) return;
      setFile(files[0]);
      return;
    }

    infoMessage("File Not Support");
  };

  return (
    <>
      <input
        type="file"
        ref={ref}
        onChange={changeHandler}
        className="hidden w-0"
        accept=".png,.jpg,.jpeg"
      ></input>
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="updateProfileForm"
      >
        <Row gutter={16} className="!w-full">
          {/* left side of form */}
          <Col className="w-full" xl={12} lg={24} sm={14}>
            <Col>
              <div>
                <label htmlFor="name" className="input-label">
                  Your Name
                </label>
                <TextInput
                  className="w-full min-h-[48px] mt-2"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                />
              </div>
            </Col>
            <Col>
              <div>
                <label htmlFor="designation" className="input-label">
                  Designation
                </label>
                <TextInput
                  className="w-full min-h-[48px] mt-2"
                  name="designation"
                  id="designation"
                  placeholder="Enter designation"
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                  ]}
                />
              </div>
            </Col>
            <Col>
              <div>
                <label htmlFor="phoneNo" className="input-label">
                  Phone Number
                </label>
                <PhoneInput
                  country={"us"}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                  }}
                  inputProps={{
                    name: "phoneNo",
                    required: true,
                    maxLength: 15,
                  }}
                />
              </div>
            </Col>
          </Col>

          {/* right side of form */}
          <Col xl={12} lg={24} sm={14} className="w-full sm:mt-0 mt-4">
            <Col>
              <div>
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <TextInput
                  className="w-full min-h-[48px] mt-2"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  disabled
                  rules={[
                    {
                      required: true,
                      message: "This field is required",
                    },
                    {
                      type: "email",
                      message: "Please provide valid email",
                    },
                  ]}
                />
              </div>
            </Col>
            <Col>
              <RoundedButton
                title={"Upload Profile Image"}
                type="primary"
                sm
                onClick={() => ref?.current?.click()}
              />
            </Col>
            {file && (
              <Col sm={16}>
                <div className="flex gap-3 items-center bg-gray-100 mt-4 rounded-xl p-4 relative">
                  <CloseOutlined
                    className="text-danger absolute top-2 right-2 cursor-pointer"
                    onClick={() => {
                      setFile(null);
                    }}
                  />
                  <img src={fileIcon} alt="" />
                  <div className="flex gap-1 w-full overflow-ellipsis">
                    <p className="font-medium text-body whitespace-nowrap">
                      {" "}
                      File Name:{" "}
                    </p>
                    <p className=" text-para w-24 whitespace-nowrap overflow-hidden text-ellipsis">
                      {file?.name}
                    </p>
                  </div>
                </div>
              </Col>
            )}
          </Col>
          <Col xl={8} md={24} xs={24} className="mt-10">
            <RoundedButton
              htmlType="submit"
              title={"Save"}
              type="primary"
              className="!w-full"
              loading={
                getCompanyUserById?.loading || updateCompanyUserById?.loading
              }
              disabled={
                getCompanyUserById?.loading || updateCompanyUserById?.loading
              }
              sm
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ProfileForm;
