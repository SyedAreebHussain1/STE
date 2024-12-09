import { Button, Col, Divider, Form, Row, Select } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { useForm } from "antd/es/form/Form";
import { CgClose, CgProfile } from "react-icons/cg";
import { useUpload } from "../../../../../hooks/useUpload";
import Upload from "../../../../../helpers/inputs/UpLoad";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getCitiesApi,
  getCountriesApi,
} from "../../../../../redux/api/CreateCompany";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import {
  createCompanyUserApi,
  getAllDepartmentApi,
  getAllUserByIdApi,
  getCompanyUserTypeApi,
  getNationalityApi,
} from "../../../../../redux/api/UserManaegement/UserProfile";
import { getCompanyRoleApi } from "../../../../../redux/api/UserManaegement/RoleManagement";
import CreateRoleModal from "../../RolesManagement/helper/CreateRoleModal";
import useToggle from "../../../../../hooks/useToggle";
import SelectFieldComponent from "../../../../../helpers/inputs/SelectFieldComponent";
import { DatePicker } from "antd";
import { getWorkScheduleApi } from "../../../../../redux/api/WorkSchedule";
import { infoMessage } from "../../../../../utils/message";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import moment from "moment";

const AddUserAndEditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    assignRoleID: "",
    city: "",
    nationality: "",
    userType: "",
  });
  const [countryID, setCountryID] = useState(0);
  const [callRoleApi, setCallRoleApi] = useState(false);
  const [flexibility, setFlexibility] = useState(0);

  const [userId, setUserID] = useState("");

  const getWorkSchedule = useSelector(
    (state: RootState) => state.GetWorkSchedule
  );

  const { loading: nationalityLoading } = useSelector(
    (state: RootState) => state.getNationality
  );
  const { loading: companyRoleLoading } = useSelector(
    (state: RootState) => state.getCompanyRole
  );
  const { loading: companyUserTypeLoading } = useSelector(
    (state: RootState) => state.getcompanyUserType
  );

  const getCities = useSelector((state: RootState) => state.getCities);
  const getCountries = useSelector((state: RootState) => state.getCountries);
  const getAllDepartment = useSelector(
    (state: RootState) => state.getAllDepartment
  );
  const createUser = useSelector((state: RootState) => state.CreateUser);
  const createCompanyRole = useSelector(
    (state: RootState) => state.createCompanyRole
  );

  const [profilePic, setProfilePic, logoPreview, deleteFile] = useUpload();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = useForm();
  const [open, toggleOpen] = useToggle();
  const getAllUserById = useSelector(
    (state: RootState) => state.getAllUserById
  );

  const currentPathname: string = window.location.pathname;
  const pathParts: string[] = currentPathname.split("/");
  const lastPartOfUrl: string = pathParts[pathParts.length - 2];

  useEffect(() => {
    if (lastPartOfUrl == "edit" && pathParts[pathParts.length - 1]) {
      setUserID(pathParts[pathParts.length - 1]);
    }
  }, [lastPartOfUrl]);

  const onFinish = (values: any) => {
    const formData = new FormData();
    if (!profilePic[0]) {
      infoMessage("Please Choose Picture");
      return;
    }
    let phoneno = state?.phone;
    if (values?.phone?.[0] == "0") {
      phoneno = `+92${values?.phone?.substring(1, values?.phone?.length)}`;
    } else {
      phoneno = `+92${values?.phone}`;
    }
    if (userId) {
      formData.append("name", state.name);
      formData.append("file", profilePic[0]);
      // editApi

      // createCompanyUserApi(dispatch, formData, backPage);
    } else {
      formData.append("name", state.name);

      formData.append("file", profilePic[0]);
      formData.append("email", state.email);
      formData.append("phoneNo", phoneno);
      formData.append("cityId", state.city);
      formData.append("companyRoleId", state.assignRoleID);
      formData.append("companyUserTypeId", state.userType);
      formData.append("nationalityId", state.nationality);
      formData.append("designation", values.designation);
      formData.append("companyDepartmentId", values.companyDepartmentId);
      formData.append("dateOfBirth", values?.dateOfBirth);
      formData.append("joiningDate", values?.joiningDate);
      formData.append("salary", values?.salary);
      formData.append("taxableAmount", values?.taxableAmount);
      formData.append("worksheetId", values?.workSchedule);
      createCompanyUserApi(dispatch, formData, backPage);
    }
  };
  const backPage = () => {
    navigate(-1);
  };

  const handleCountryChange = (value: string | number, name: string) => {
    onChange(value, name);
    form.setFieldValue("city", "");
    let id;
    if (typeof value === "string") {
      id = parseInt(value);
    } else {
      id = value;
    }
    setCountryID(id);
  };

  const onChange = (value: string | number, name: string) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  useEffect(() => {
    setCallRoleApi((pre) => !pre);
  }, [createCompanyRole?.data]);

  useEffect(() => {
    if (userId) {
      getAllUserByIdApi(dispatch, userId);
    }
  }, [
    userId,
    dispatch,
    getAllUserById?.data?.data?.companyUserProfile?.profilePhoto,
  ]);
  return (
    <div className="p-[20px]">
      {open && <CreateRoleModal open={open} toggleOpen={toggleOpen} />}
      <div>
        <div
          className="flex items-center text-primary cursor-pointer dark:text-white"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack className="text-[1.4rem]" />
          <span className="text-[.8rem] font-medium leading-[0px]">
            Back to All Users
          </span>
        </div>
        <h1 className="text-[1.404rem] font-semibold h-[2rem] p-0 m-[10px] dark:text-dark-secondary">
          {userId ? "Edit User" : "Add New User"}
        </h1>
      </div>
      <div className="px-[1rem] bg-white mt-[1rem] w-full dark:bg-dark-grayprimary">
        <Form
          form={form}
          name="User"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="pt-[15px] flex items-center justify-between dark:text-white ">
            <div>
              <h2 className="text-[1.125rem] font-semibold">User Details</h2>
            </div>
          </div>
          <Divider />
          <div className="w-full  py-0">
            <Row gutter={28}>
              <Col lg={24} xs={24} sm={24}>
                <Row gutter={28}>
                  <Col lg={8} xs={24} sm={24}>
                    <div className="mb-[20px]">
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
                      {logoPreview.length > 0 && (
                        <div className="relative w-fit h-[100%]">
                          <img
                            src={logoPreview[0]?.url}
                            alt=""
                            className="h-[100%] object-contain"
                          />
                          <span
                            className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                            onClick={() =>
                              deleteFile(
                                logoPreview.length > 0
                                  ? logoPreview[0].name
                                  : getAllUserById?.data?.data
                                    ?.companyUserProfile?.profilePhoto
                              )
                            }
                          >
                            <CgClose />
                          </span>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Full Name <span className="text-[red]">*</span>
                </span>
                <TextInput
                  name="name"
                  onChange={(e) => onChange(e.target.value, "name")}
                  placeholder="Enter your name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                  className="w-full h-[50px] dark-input "
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Phone No <span className="text-[red]">*</span>
                </span>
                <TextInput
                  disabled={userId ? true : false}
                  name="phone"
                  placeholder="3XXXXXXXXX"
                  prefix="+92"
                  onKeyDown={(e: any) => {
                    if (
                      e.key === "Backspace" ||
                      e.key === "Delete" ||
                      e.key === "ArrowLeft" ||
                      e.key === "ArrowRight" ||
                      e.key === "Tab"
                    ) {
                      return;
                    }

                    const value = e.target.value + e.key;
                    const regex = /^[1-9][0-9]*$/;

                    // If the value is empty, allow any digit except '0'
                    if (e.target.value === "" && e.key === "0") {
                      e.preventDefault();
                      return;
                    }

                    // Prevent input if the value doesn't match the regex
                    if (!regex.test(value)) {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => onChange(e.target.value, "phone")}
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone!",
                    },
                  ]}
                  className="w-full h-[50px]  dark-input"
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Email <span className="text-[red]">*</span>
                </span>
                <TextInput
                  disabled={userId ? true : false}
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => onChange(e.target.value, "email")}
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                  className="w-full h-[50px]  dark-input"
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Designation <span className="text-[red]">*</span>
                </span>
                <TextInput
                  name="designation"
                  placeholder="Enter your Designation"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Designation!",
                    },
                  ]}
                  className="w-full h-[50px]  dark-input"
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Salary <span className="text-[red]">*</span>
                </span>
                <TextInput
                  name="salary"
                  className="w-full h-[50px] dark-input "
                  rules={[
                    {
                      required: true,
                      message: "Please input your Salary!",
                    },
                  ]}
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Taxable Amount <span className="text-[red]">*</span>
                </span>
                <TextInput
                  name="taxableAmount"
                  className="w-full h-[50px]  dark-input"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Taxable Amount!",
                    },
                  ]}
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Date Of Birth <span className="text-[red]">*</span>
                </span>
                <Form.Item
                  name="dateOfBirth"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Taxable dob!",
                    },
                  ]}
                >
                  <DatePicker
                    name="dateOfBirth"
                    disabledDate={(current) => {
                      return current && current > moment().endOf("day");
                    }}
                    className="w-full h-[50px]  dark-input"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Joining Date <span className="text-[red]">*</span>
                </span>
                <Form.Item
                  name="joiningDate"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Joining Date!",
                    },
                  ]}
                >
                  <DatePicker
                    name="joiningDate"
                    className="w-full h-[50px]  dark-input"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Department <span className="text-[red]">*</span>
                </span>

                <SelectFieldComponent
                  name="companyDepartmentId"
                  apiwithoutId={getAllDepartmentApi}
                  loading={getAllDepartment?.loading}
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Country <span className="text-[red]">*</span>
                </span>

                <SelectFieldComponent
                  name="nationalityIdNoSend"
                  onChange={handleCountryChange}
                  apiwithoutId={getCountriesApi}
                  loading={getCountries?.loading}
                  searching={true}
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  City <span className="text-[red]">*</span>
                </span>
                <SelectFieldComponent
                  byId={countryID}
                  name="city"
                  onChange={onChange}
                  api={getCitiesApi}
                  loading={getCities.loading}
                  searching={true}
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Nationality <span className="text-[red]">*</span>
                </span>
                <SelectFieldComponent
                  name="nationality"
                  onChange={onChange}
                  apiwithoutId={getNationalityApi}
                  loading={nationalityLoading}
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  User Type <span className="text-[red]">*</span>
                </span>
                <SelectFieldComponent
                  name="userType"
                  onChange={onChange}
                  apiwithoutId={getCompanyUserTypeApi}
                  loading={companyUserTypeLoading}
                />
              </Col>

              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Select Flexibility <span className="text-[red]">*</span>
                </span>
                <Form.Item
                  name={"flexibility"}
                  rules={[
                    {
                      required: true,
                      message: `Please input your Flexibility!`,
                    },
                  ]}
                >
                  <Select
                    className="w-full  h-[50px] "
                    onChange={(e) => {
                      setFlexibility(e);
                      form.setFieldValue("workSchedule", null);
                    }}
                  >
                    <Select.Option value="1">Fixed</Select.Option>
                    <Select.Option value="2">Flexible</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Work Schedule <span className="text-[red]">*</span>
                </span>
                <SelectFieldComponent
                  disable={!flexibility}
                  name="workSchedule"
                  byId={flexibility}
                  onChange={onChange}
                  api={getWorkScheduleApi}
                  loading={getWorkSchedule?.loading}
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <div className="flex justify-between items-center h-[28px]">
                  <div>
                    <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                      Assign Role <span className="text-[red]">*</span>{" "}
                    </span>
                  </div>
                  <div
                    className="flex items-center cursor-pointer text-[#3E54AC] dark:text-dark-borderColor font-medium text-[.9rem] text-center gap-2 "
                    onClick={() => {
                      toggleOpen();
                    }}
                  >
                    <div className=" text-[1.5rem] ">+</div>
                    <div className="leading-[0px] ">Add New Role</div>
                  </div>
                </div>
                <SelectFieldComponent
                  disable={userId ? true : false}
                  name="assignRoleID"
                  onChange={onChange}
                  apiwithoutId={getCompanyRoleApi}
                  loading={companyRoleLoading}
                  callaApi={callRoleApi}
                />
              </Col>
            </Row>
          </div>
          <div className="flex justify-end gap-2">
            <RoundedButton
              onClick={backPage}
              title={"Cancel"}
              className="dark:bg-dark-primary dark:text-white"
            />
            <RoundedButton
              loading={createUser.loading}
              title={userId ? "Update" : "Add User"}
              className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
              htmlType="submit"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
export default AddUserAndEditUser;
