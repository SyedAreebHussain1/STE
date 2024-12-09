import { Button, Col, Divider, Form, Row, Select } from "antd";
import { IoIosArrowBack } from "react-icons/io";
import { CheckCircleOutlined } from "@ant-design/icons";
import { TextInput } from "../../../../../../components";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";

import CreateRoleModal from "../../RolesManagement/helper/CreateRoleModal";
import useToggle from "../../../../../../hooks/useToggle";
import { SelectFieldComponent } from "../../../../../../components";
import { DatePicker } from "antd";
import { RoundedButton } from "../../../../../../components";
import moment from "moment";

const ViewUserData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = useForm();
  const [open, toggleOpen] = useToggle();
  const params = useParams();
  const [countryID, setCountryID] = useState(0);
  const [callRoleApi, setCallRoleApi] = useState(false);
  const [flexibility, setFlexibility] = useState(0);
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

  const createCompanyRole = useSelector(
    (state: RootState) => state.createCompanyRole
  );
  const getAllUserById = useSelector(
    (state: RootState) => state.getAllUserById
  );
  const getAllNationalityForDropdown = useSelector(
    (state: RootState) => state.getAllNationalityForDropdown
  );
  const updateUserEmailAndPhoneNo = useSelector(
    (state: RootState) => state.updateUserEmailAndPhoneNo
  );

  useEffect(() => {
  }, []);
  useEffect(() => {
    if (params.id) {
    }
  }, [params.id]);

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
    }
  }, [getAllUserById?.data?.data]);

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
          View User
        </h1>
      </div>
      <div className="px-[1rem] bg-white mt-[1rem] w-full dark:bg-dark-grayprimary">
        <Form
          form={form}
          name="updateUser"
          initialValues={{ remember: true }}
          disabled
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
              {getAllUserById?.data?.data?.companyUserProfile.length > 0 && (
                <Col lg={24} xs={24} sm={24}>
                  <div className="h-[170px]">
                    <img
                      src={
                        getAllUserById?.data?.data?.companyUserProfile
                          ?.profilePhoto
                      }
                      alt=""
                    />
                  </div>
                </Col>
              )}

              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Full Name
                </span>
                <TextInput
                  name="name"
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
                  disable={true}
                  // apiwithoutId={getCountriesApi}
                  loading={getCountries?.loading}
                  searching={true}
                />
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  City
                </span>

              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Nationality
                </span>
                {/* <SelectFieldComponent
                  disable={true}
                  name="nationality"
                // apiwithoutId={getNationalityApi}
                // loading={nationalityLoading.loading}
                /> */}
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  User Type
                </span>
                {/* <SelectFieldComponent
                  name="userType"
                  disable={true}
                // apiwithoutId={getCompanyUserTypeApi}
                // loading={companyUserTypeLoading}
                /> */}
              </Col>

              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Select Flexibility
                </span>
                <Form.Item>
                  <Select className="w-full  h-[50px] ">
                    <Select.Option value="1">Fixed</Select.Option>
                    <Select.Option value="2">Flexible</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                  Work Schedule
                </span>
                {/* <SelectFieldComponent
                  disable={true}
                  name="workSchedule"
                  byId={flexibility}
                // api={getWorkScheduleApi}
                // loading={getWorkSchedule?.loading}
                /> */}
              </Col>
              <Col xs={24} sm={24} md={8}>
                <div className="flex justify-between items-center h-[28px]">
                  <div>
                    <span className="font-medium text-[.975rem] text-[#344054] dark-input-label">
                      Assign Role <span className="text-[red]">*</span>{" "}
                    </span>
                  </div>
                </div>
                {/* <SelectFieldComponent
                  disable={true}
                  name="assignRoleID"
                  // apiwithoutId={getCompanyRoleApi}
                  // loading={companyRoleLoading}
                  callaApi={callRoleApi}
                /> */}
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default ViewUserData;
