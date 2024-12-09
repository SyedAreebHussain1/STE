import { Button, Col, Divider, Form, Row, Select } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { CheckCircleOutlined } from "@ant-design/icons";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { useForm } from "antd/es/form/Form";
import { CgClose, CgProfile } from "react-icons/cg";
import { useUpload } from "../../../../../hooks/useUpload";
import Upload from "../../../../../helpers/inputs/UpLoad";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getCitiesApi,
  getCountriesApi,
} from "../../../../../redux/api/CreateCompany";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import {
  companyUserTypeForDropdownApi,
  getAllCountriesForDropdownApi,
  getAllDepartmentApi,
  getAllNationalityForDropdownApi,
  getAllUserByIdApi,
  getCompanyUserTypeApi,
  getNationalityApi,
  updateUserApi,
  updateUserEmailAndPhoneNoApi,
} from "../../../../../redux/api/UserManaegement/UserProfile";
import { getCompanyRoleApi } from "../../../../../redux/api/UserManaegement/RoleManagement";
import CreateRoleModal from "../../RolesManagement/helper/CreateRoleModal";
import useToggle from "../../../../../hooks/useToggle";
import SelectFieldComponent from "../../../../../helpers/inputs/SelectFieldComponent";
import { DatePicker } from "antd";
import { getWorkScheduleApi } from "../../../../../redux/api/WorkSchedule";
import { errorMessage, infoMessage } from "../../../../../utils/message";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import moment from "moment";
import { clearUpdateUserEmailAndPhoneNo } from "../../../../../redux/slices/UserManaegement/UserProfile/updateUserEmailAndPhoneNoSlice";

const UpdateUserData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = useForm();
  const [open, toggleOpen] = useToggle();
  const params = useParams();
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
  const [countrySearch, setCountrySearch] = useState<string>("");
  const [profilePic, setProfilePic, logoPreview, deleteFile]: any = useUpload();
  const getWorkSchedule = useSelector(
    (state: RootState) => state.GetWorkSchedule
  );

  const nationalityLoading = useSelector(
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
  const getAllCountriesForDropdown = useSelector(
    (state: RootState) => state.getAllCountriesForDropdown
  );
  const usersForUpdate = useSelector(
    (state: RootState) => state.usersForUpdate
  );

  const createCompanyRole = useSelector(
    (state: RootState) => state.createCompanyRole
  );
  const getAllUserById = useSelector(
    (state: RootState) => state.getAllUserById
  );
  const getAllNationalityForDropdown = useSelector(
    (state: RootState) => state.getAllNationalityForDropdown
  );
  const companyUserTypeForDropdown = useSelector(
    (state: RootState) => state.companyUserTypeForDropdown
  );
  const updateUserEmailAndPhoneNo = useSelector(
    (state: RootState) => state.updateUserEmailAndPhoneNo
  );

  useEffect(() => {
    getAllDepartmentApi(dispatch, { page: 1, limit: 1000 });
    getAllNationalityForDropdownApi(dispatch);
    companyUserTypeForDropdownApi(dispatch);
  }, []);
  useEffect(() => {
    if (params.id) {
      getAllUserByIdApi(dispatch, params.id);
    }
  }, [params.id]);

  const onFinish = (values: any) => {
    const formData = new FormData();
    if (params.id) {
      formData.append("name", values.name);
      formData.append(
        "file",
        profilePic?.[0] ||
        getAllUserById?.data?.data?.companyUserProfile?.profilePhoto
      );
      formData.append(
        "companyRoleId",
        Number(values?.assignRoleID)
          ? values?.assignRoleID
          : getAllUserById?.data?.data?.companyRole?.id
      );
      formData.append("companyUserTypeId", values.userType);
      formData.append(
        "nationalityId",
        Number(values?.nationality)
          ? values?.nationality
          : getAllUserById?.data?.data?.companyUserProfile?.nationalityId
      );
      formData.append(
        "cityId",
        Number(state.city)
          ? state.city
          : getAllUserById?.data?.data?.companyUserProfile?.city?.id
      );
      formData.append("designation", values?.designation);
      formData.append(
        "companyDepartmentId",
        Number(values.companyDepartmentId)
          ? values.companyDepartmentId
          : getAllDepartment?.data?.data?.items?.filter(
            (val: any) =>
              val?.id == getAllUserById?.data?.data?.companyDepartmentId
          )?.[0]?.id
      );
      formData.append("dateOfBirth", values?.dateOfBirth);
      formData.append("joiningDate", values?.joiningDate);
      formData.append("salary", values?.salary);
      formData.append("taxableAmount", values?.taxableAmount);
      formData.append("worksheetId", values?.workSchedule);

      updateUserApi(dispatch, formData, backPage, params?.id);
    }
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
    if (getAllUserById?.data?.data) {
      form.setFieldsValue({
        name: getAllUserById?.data?.data?.companyUserProfile?.name,
        email: getAllUserById?.data?.data?.email,
        phone: getAllUserById?.data?.data?.phoneNo,
        salary: getAllUserById?.data?.data?.salary,
        taxableAmount: getAllUserById?.data?.data?.taxableAmount,
        dateOfBirth: getAllUserById?.data?.data?.dateOfBirth
          ? moment(getAllUserById?.data?.data?.dateOfBirth)
          : null,
        joiningDate: getAllUserById?.data?.data?.joiningDate
          ? moment(getAllUserById?.data?.data?.joiningDate)
          : null,
        designation: getAllUserById?.data?.data?.designation,
        Profile: getAllUserById?.data?.data?.companyUserProfile?.profilePhoto,
        nationalityIdNoSend:
          getAllUserById?.data?.data?.companyUserProfile?.city?.country?.title,
        city: getAllUserById?.data?.data?.companyUserProfile?.city?.title,
        companyDepartmentId: getAllDepartment?.data?.data?.items?.filter(
          (val: any) =>
            val?.id == getAllUserById?.data?.data?.companyDepartmentId
        )?.[0]?.title,
        assignRoleID: getAllUserById?.data?.data?.companyRole.title,
        nationality: getAllNationalityForDropdown?.data?.data?.filter(
          (val: any) =>
            val?.id ==
            getAllUserById?.data?.data?.companyUserProfile?.nationalityId
        )?.[0]?.title,
        userType: getAllUserById?.data?.data?.companyUserTypeId,
      });
      setProfilePic(
        getAllUserById?.data?.data?.companyUserProfile?.profilePhoto
      );
    }
  }, [getAllUserById?.data?.data]);
  const backPage = () => {
    navigate(-1);
    dispatch(clearUpdateUserEmailAndPhoneNo(""));
  };
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
          Edit User
        </h1>
      </div>
      <div className="px-[1rem] bg-white mt-[1rem] w-full dark:bg-dark-grayprimary">
        <Form
          form={form}
          name="updateUser"
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
                  <Col lg={6} xs={24} sm={24}>
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
                      {logoPreview?.length > 0 ? (
                        <div className="relative w-fit h-[100%]">
                          <img
                            src={logoPreview?.[0]?.url}
                            alt=""
                            className="h-[100%] object-contain"
                          />
                          <span
                            className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                            onClick={() =>
                              deleteFile(
                                logoPreview?.length > 0
                                  ? logoPreview?.[0]?.name
                                  : getAllUserById?.data?.data
                                    ?.companyUserProfile?.profilePhoto
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
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Full Name
                </span>
                <TextInput
                  name="name"
                  onChange={(e) => onChange(e.target.value, "name")}
                  placeholder="Enter your name"
                  className="w-full h-[50px] dark-input "
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Phone No
                </span>
                <TextInput
                  name="phone"
                  placeholder="3XXXXXXXXX"
                  isNumber
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
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label flex justify-between">
                  <span>Email </span>
                  <div>
                    {!updateUserEmailAndPhoneNo.data ? (
                      <RoundedButton
                        loading={updateUserEmailAndPhoneNo?.loading}
                        onClick={() => {
                          updateUserEmailAndPhoneNoApi(dispatch, {
                            phoneNo: form.getFieldValue("phone"),
                            email: form.getFieldValue("email"),
                            userId: params?.id,
                          });
                        }}
                        title={"Number/Email"}
                        className="dark:bg-dark-primary h-8 dark:text-white mb-1"
                      />
                    ) : (
                      <CheckCircleOutlined />
                    )}
                  </div>
                </span>
                <TextInput
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
                  Designation
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
                  Salary
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
                  Taxable Amount
                </span>
                <TextInput
                  name="taxableAmount"
                  className="w-full h-[50px]  dark-input"
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Date Of Birth
                </span>
                <Form.Item name="dateOfBirth">
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
                  Joining Date
                </span>
                <Form.Item name="joiningDate">
                  <DatePicker
                    name="joiningDate"
                    className="w-full h-[50px]  dark-input"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Department
                </span>


                <Form.Item
                  name={"companyDepartmentId"}
                  rules={[
                    {
                      required: true,
                      message: `Please select your Department!`,
                    },
                  ]}
                >
                  <Select className="w-full  h-[50px] ">
                    {getAllDepartment?.data?.data?.items.map((item: any) => {
                      return (
                        <Select.Option value={item.id} key={item.id}>
                          {item.title}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Country
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
                  City
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
                  Nationality
                </span>
                <SelectFieldComponent
                  name="nationality"
                  onChange={onChange}
                  apiwithoutId={getNationalityApi}
                  loading={nationalityLoading.loading}
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  User Type
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
                  Select Flexibility
                </span>
                <Form.Item name={"flexibility"}>
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
                  Work Schedule
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
              loading={usersForUpdate?.loading}
              title={"Update"}
              className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
              htmlType="submit"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
export default UpdateUserData;
