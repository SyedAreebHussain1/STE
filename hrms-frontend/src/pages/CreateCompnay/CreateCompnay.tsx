import React, { useEffect, useState } from "react";
import { Col, DatePicker, Form, Row, Select } from "antd";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../helpers/inputs/TextInput";
import InputButton from "../../helpers/inputs/InputButton";
import demoImg from "../../assets/pwdemo.png";
import leftSideImg from "../../assets/loginside.png";
import logo from "../../assets/managematelogo.png";
import { useForm } from "antd/es/form/Form";
import { useUpload } from "../../hooks/useUpload";
import Upload from "../../helpers/inputs/UpLoad";
import { CgClose } from "react-icons/cg";
import { LocationDrawer } from "./LocationDrawer";
import { MdMyLocation } from "react-icons/md";
import {
  createCompanyApi,
  getBusinessTypeApi,
  getCitiesApi,
  getCountriesApi,
  getTimeZoneApi,
} from "../../redux/api/CreateCompany";
import SelectFieldComponent from "../../helpers/inputs/SelectFieldComponent";
import useToggle from "../../hooks/useToggle";

const CreateCompnay: React.FC = () => {
  const [state, setState] = useState({
    name: "",
    address: "",
    type: "",
    founded: "",
    city: "",
    timeZone: "",
  });
  const [markers, setMarkers] = useState<any[]>([]);
  const [countryID, setCountryID] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState({ address: "" });
  const { loading } = useSelector((state: RootState) => state.companyCreate);
  const businessType = useSelector((state: RootState) => state.businessType);
  const getCities = useSelector((state: RootState) => state.getCities);
  const getCountries = useSelector((state: RootState) => state.getCountries);
  const getTimeZone = useSelector((state: RootState) => state.getTimeZone);
  const dispatch: AppDispatch = useDispatch();
  const [form] = useForm();
  const [builderLogo, setBuilderLogo, logoPreview, deleteFile] = useUpload();

  const [open, troggle] = useToggle();

  function onSave() {
    if (selectedPlace) {
      if (selectedPlace?.address !== "") {
        form.setFieldsValue({
          address: selectedPlace.address,
        });
      }
      if (markers[0].lat !== "" && markers[0].lng !== "") {
        form.setFieldsValue({
          location: selectedPlace.address,
        });
      }
      troggle();
    }
  }

  const onFinish = (formValue: any) => {
    if (formValue?.password !== formValue?.cPassword) {
      form.setFields([
        {
          name: "cPassword",
          errors: ["Password Not match"],
        },
      ]);
      return;
    }
    const formData = new FormData();

    if (builderLogo[0]) {
      formData.append("file", builderLogo[0]);
    }
    formData.append("name", state.name);
    formData.append("address", selectedPlace.address);
    formData.append("latitude", markers[0].lat);
    formData.append("longitude", markers[0].lng);
    formData.append("businessTypeId", state.type);
    formData.append("establishedYear", state.founded);
    formData.append("cityId ", state.city);
    formData.append("timeZoneId ", state.timeZone);
    createCompanyApi(formData, dispatch);
  };

  useEffect(() => {
    getBusinessTypeApi(dispatch);
  }, []);

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
  const dateChange = (date: any, dateString: any) => {
    setState({
      ...state,
      founded: dateString,
    });
  };
  return (
    <div className="h-screen w-full ">
      <LocationDrawer
        open={open}
        onClose={troggle}
        markers={markers}
        setMarkers={setMarkers}
        setSelectedPlace={setSelectedPlace}
        onSave={onSave}
      />
      <Row
        gutter={0}
        className="h-full  !ml-[0px] !mr-[0px] flex justify-center w-[100%]"
      >
        <Col
          xs={24}
          lg={10}
          sm={24}
          md={24}
          className="hidden sm:block bg-gradient-to-b from-blue-700 to-indigo-800 pl-[0px] pr-[0px]"
        >
          <div className=" w-full  h-full flex items-center  justify-end">
            <div>
              <div className="p-[70px]">
                <div>
                  <img src={logo} alt="" />
                </div>
                <div className="mt-[50px]">
                  <p className="font-semibold text-[2.0219rem] text-[#FFFFFF]">
                    Keep tabs on your staff's work hours for payroll, attendance
                    and performance assessment.
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-[0px] md:mt-[-90px]">
                <img
                  src={leftSideImg}
                  className="w-full h-auto  md:h-[589.84px] md:w-[792.53px] "
                  alt=""
                />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={14} sm={24} xs={24} md={24}>
          <div className="w-full bg-[white] h-full flex justify-center md:justify-start  px-[20px] my-[20px] md:px-[82px]  md:py-[53px]">
            <div>
              <div className="flex sm:hidden justify-center mt-4 mb-4">
                <img src={demoImg} className="w-[40%]" alt="" />
              </div>
              <div>
                <div>
                  <span className="font-bold text-[.8rem] md:text-[1rem]  text-[#667085] leading-[1.5rem] md:leading-[1.365rem] h-[22px] mb-[5px] md:mb-[2px]">
                    Create your Company
                  </span>
                </div>
                <div>
                  <h1 className="font-bold text-[1.404rem] text-[#1D2939] leading-[1.965rem] p-[0] m-[0]">
                    Enter your Company Details.
                  </h1>
                </div>
              </div>
              <div className="w-full sm:flex justify-center mt-[30px] sm:mt-[50px]">
                <Form
                  form={form}
                  name="signup"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Row gutter={28}>
                    <Col xs={24} sm={24} md={24}>
                      <span className="font-medium text-[.975rem] text-[#344054]">
                        Name <span className="text-[red]">*</span>
                      </span>
                      <TextInput
                        name="name"
                        onKeyDown={(e: any) => {
                          const regex = /^[a-zA-Z]+$/;

                          // Allow control keys like Backspace, Space, and Shift
                          if (e.code === "Space") {
                            return;
                          }
                          const allowedKeys = [
                            "Backspace",
                            "Space",
                            "Shift",
                            "ArrowLeft",
                            "ArrowRight",
                            "ArrowUp",
                            "ArrowDown",
                            "Tab",
                          ];

                          if (allowedKeys.includes(e.key)) {
                            return;
                          }

                          if (!regex.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => onChange(e.target.value, "name")}
                        placeholder="Enter your name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your name!",
                          },
                        ]}
                        className="w-full h-[50px] dark-input"
                      />
                    </Col>

                    <Col lg={10} xs={24}>
                      <div className="mb-[20px]">
                        <Upload
                          name="Company Logo"
                          files={builderLogo}
                          setFiles={setBuilderLogo}
                          supportedFileTypes={["png", "jpg", "jpeg"]}
                          fileUploadLimit={1}
                        />
                      </div>
                    </Col>
                    <Col lg={14} xs={24}>
                      <div className="h-[159px]">
                        {logoPreview.length > 0 && (
                          <div className="relative w-fit h-[100%]">
                            <img
                              src={logoPreview[0].url}
                              alt=""
                              className="h-[100%] object-contain"
                            />
                            <span
                              className="absolute right-[5px] top-[5px] w-[20px] h-[20px] bg-white flex justify-center items-center cursor-pointer"
                              onClick={() => deleteFile(logoPreview[0].name)}
                            >
                              <CgClose />
                            </span>
                          </div>
                        )}
                      </div>
                    </Col>

                    <Col xs={24} sm={24} md={12}>
                      <span className="font-medium text-[.975rem] text-[#344054]">
                        Address <span className="text-[red]">*</span>
                      </span>
                      <TextInput
                        name="address"
                        onChange={(e) => onChange(e.target.value, "address")}
                        placeholder="Enter your Address"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Address!",
                          },
                        ]}
                        className="w-full h-[50px] dark-input "
                      />
                    </Col>

                    <Col xs={24} sm={24} md={12}>
                      <span className="font-medium text-[.975rem] text-[#344054]">
                        Location <span className="text-[red]">*</span>
                      </span>
                      <TextInput
                        name="location"
                        onClick={troggle}
                        placeholder="Enter your location"
                        suffix={<MdMyLocation />}
                        rules={[
                          {
                            required: true,
                            message: "Please input your location!",
                          },
                        ]}
                        className="w-full h-[50px] dark-input "
                      />
                    </Col>

                    <Col xs={24} sm={24} md={12}>
                      <span className="font-medium text-[.975rem] text-[#344054]">
                        Type <span className="text-[red]">*</span>
                      </span>

                      <Form.Item
                        name="type"
                        rules={[
                          {
                            required: true,
                            message: "Please input your type!",
                          },
                        ]}
                      >
                        <Select
                          className="w-full h-[50px]"
                          onChange={(e) => onChange(e, "type")}
                          options={
                            businessType?.data?.data?.items?.length > 0
                              ? businessType?.data?.data?.items.map(
                                  (item: any) => {
                                    return {
                                      value: item.id,
                                      label: item.title,
                                    };
                                  }
                                )
                              : []
                          }
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12}>
                      <span className="font-medium text-[.975rem] text-[#344054]">
                        Founded <span className="text-[red]">*</span>
                      </span>
                      <Form.Item
                        name="founded"
                        rules={[
                          {
                            required: true,
                            message: "Please input your date",
                          },
                        ]}
                      >
                        <DatePicker
                          className="w-full h-[50px]"
                          picker="year"
                          onChange={dateChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <span className="font-medium text-[.975rem] text-[#344054]">
                        Country <span className="text-[red]">*</span>
                      </span>
                      <SelectFieldComponent
                        name="country"
                        onChange={handleCountryChange}
                        apiwithoutId={getCountriesApi}
                        loading={getCountries?.loading}
                        searching={true}
                      />
                    </Col>

                    <Col xs={24} sm={24} md={12}>
                      <span className="font-medium text-[.975rem] text-[#344054]">
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

                    <Col xs={24} sm={24} md={24}>
                      <span className="font-medium text-[.975rem] text-[#344054]">
                        Date & Time zone <span className="text-[red]">*</span>
                      </span>
                      <SelectFieldComponent
                        byId={countryID}
                        name="timeZone"
                        onChange={onChange}
                        api={getTimeZoneApi}
                        lebal="zoneName"
                        loading={getTimeZone?.loading}
                      />
                    </Col>
                  </Row>

                  <div className="mt-5">
                    <InputButton
                      className="w-[300px] h-[50px]  bg-light-primary text-[white] text-[1rem] font-bold"
                      loading={loading}
                      name="Create Company"
                      htmlType="submit"
                    />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreateCompnay;
