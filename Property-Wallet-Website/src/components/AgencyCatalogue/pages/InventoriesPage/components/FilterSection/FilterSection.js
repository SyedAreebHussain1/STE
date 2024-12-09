import React, { useEffect, useRef, useState } from "react";
import Container from "../../../../components/Container";
import { Button, Col, Input, Row, Select, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { CiLocationOn } from "react-icons/ci";
import { FaSortAmountDown } from "react-icons/fa";
import { errorMessage } from "./../../../../utils/message";
import {
  getCatalogueDetailByAgencyIdApi,
  getLandAreaApi,
  getProjectSubTypesApi,
  getProjectTypesApi,
} from "../../../../redux/api/Inventories";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const FilterSection = () => {
  const getlisting = useSelector((state) => state?.getInventoriesDetail);
  const [showFilter, setShowFilter] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [isResetFilterEnabled, setIsResetFilterEnabled] = useState(true);
  const [form] = useForm();
  const getProjectTypes = useSelector((state) => state.getProjectTypes);
  const getProjectSubTypes = useSelector((state) => state.getProjectSubTypes);
  const getLandArea = useSelector((state) => state.getLandArea);
  const dispatch = useDispatch();
  const params = useParams();
  const timeoutRef = useRef();
  const [totalResults, setTotalResults] = useState(0);

  function onSuccess(data) {
    setTotalResults(data.length);
    setIsResetFilterEnabled(false);
  }

  function onFinish(e) {
    let str = "&";

    for (const key in e) {
      if (e[key]) {
        str += `${key}=${e[key]}&`;
      }
    }
    if (str[str.length - 1] === "&") {
      str = str.substring(0, str.length - 1);
    }
    if (!str) {
      errorMessage("Input atleast 1 field to continue!");
      return;
    }
    if (searchData !== "") {
      str += `&title=${searchData}`;
    }

    // api call
    getCatalogueDetailByAgencyIdApi(
      dispatch,
      { page: 1, limit: 999 },
      params?.id,
      str,
      onSuccess
    );
  }

  useEffect(() => {
    getProjectTypesApi(dispatch, { page: 1, limit: 999 });
    getLandAreaApi(dispatch);
  }, []);

  function onChangePropertyType(id) {
    form.setFieldValue("projectSubTypeId", null);
    getProjectSubTypesApi(dispatch, id);
  }
  const handleSearch = (value) => {
    let str = value !== "" ? `&title=${value}` : "";
    getCatalogueDetailByAgencyIdApi(
      dispatch,
      { page: 1, limit: 999 },
      params?.id,
      str,
      onSuccess
    );
  };

  // validation for min & max Price start

  const maximumPriceInput = async (_, value) => {
    const maxVal = Number(value);
    let minVal = Number(form.getFieldValue("minimumPrice"));
    form.setFields([
      {
        name: "minimumPrice",
        errors: false,
      },
    ]);
    if (!minVal && !maxVal) {
      return;
    }
    if (!minVal && maxVal) {
      form.setFields([
        {
          name: "minimumPrice",
          errors: ["Enter the Min Price "],
        },
      ]);
    } else if (!maxVal) {
      throw new Error("Max price should be greater then min");
    }
    if (maxVal <= minVal) {
      throw new Error("Max price should be greater then min");
    }
  };
  const minimumPriceInput = async (_, value) => {
    const minVal = Number(value);
    let maxVal = Number(form.getFieldValue("maximumPrice"));
    form.setFields([
      {
        name: "maximumPrice",
        errors: false,
      },
    ]);
    if (!minVal && !maxVal) {
      return;
    }
    if (!maxVal && minVal) {
      form.setFields([
        {
          name: "maximumPrice",
          errors: ["Enter the Max Price "],
        },
      ]);
      return;
    } else if (!minVal) {
      throw new Error("Min price should be less then max");
    }

    if (maxVal <= minVal) {
      throw new Error("Min price should be less then max");
    }
  };

  // validation for min & max Price end
  // validation for min ,max land size and Land Area start
  const landAreaIdInput = async (_, value) => {
    const landArea = value;
    let maxlandSize = Number(form.getFieldValue("maxlandSize"));
    let minlandSize = Number(form.getFieldValue("minlandSize"));
    form.setFields([
      {
        name: "maxlandSize",
        errors: false,
      },
    ]);
    form.setFields([
      {
        name: "minlandSize",
        errors: false,
      },
    ]);

    if (!landArea && !maxlandSize && !minlandSize) {
      return;
    }

    if ((!maxlandSize && landArea) || (!minlandSize && landArea)) {
      if (!maxlandSize) {
        form.setFields([
          {
            name: "maxlandSize",
            errors: ["Enter the Max Land Size "],
          },
        ]);
      }
      if (!minlandSize) {
        form.setFields([
          {
            name: "minlandSize",
            errors: ["Enter the Min Land Size "],
          },
        ]);
      }
      return;
    } else if (!landArea) {
      throw new Error("Select Land Area Unit");
    }
  };

  const maxlandSizeInput = async (_, value) => {
    const maxlandSize = Number(value);
    let landArea = form.getFieldValue("landAreaId");
    let minlandSize = Number(form.getFieldValue("minlandSize"));
    form.setFields([
      {
        name: "landAreaId",
        errors: false,
      },
    ]);
    form.setFields([
      {
        name: "minlandSize",
        errors: false,
      },
    ]);

    if (!landArea && !maxlandSize && !minlandSize) {
      return;
    }

    if ((maxlandSize && !landArea) || (!minlandSize && maxlandSize)) {
      if (!landArea) {
        form.setFields([
          {
            name: "landAreaId",
            errors: ["Select Land Area Unit "],
          },
        ]);
      }
      if (!minlandSize) {
        form.setFields([
          {
            name: "minlandSize",
            errors: ["Enter the Min Land Size "],
          },
        ]);
      }
      return;
    } else if (!maxlandSize) {
      if (!minlandSize) {
        form.setFields([
          {
            name: "minlandSize",
            errors: ["Enter Min land Size"],
          },
        ]);
      }
      if (!maxlandSize) {
        throw new Error("Enter Max land Size");
      }
    }
    if (maxlandSize <= minlandSize) {
      throw new Error("Max land Size Should Be Greater then Min land Size");
    }
  };
  const minlandSizeInput = async (_, value) => {
    const minlandSize = Number(value);
    let landArea = form.getFieldValue("landAreaId");
    let maxlandSize = Number(form.getFieldValue("maxlandSize"));
    form.setFields([
      {
        name: "landAreaId",
        errors: false,
      },
    ]);
    form.setFields([
      {
        name: "maxlandSize",
        errors: false,
      },
    ]);

    if (!landArea && !maxlandSize && !minlandSize) {
      return;
    }

    if ((minlandSize && !landArea) || (minlandSize && !maxlandSize)) {
      if (!landArea) {
        form.setFields([
          {
            name: "landAreaId",
            errors: ["Select Land Area Unit "],
          },
        ]);
      }
      if (!maxlandSize) {
        form.setFields([
          {
            name: "maxlandSize",
            errors: ["Enter the Max Land Size "],
          },
        ]);
      }
      return;
    } else if (!minlandSize || !maxlandSize) {
      if (!maxlandSize) {
        form.setFields([
          {
            name: "maxlandSize",
            errors: ["Enter Max land Size"],
          },
        ]);
      }
      if (!minlandSize) {
        throw new Error("Enter Min land Size");
      }
    }
    if (maxlandSize <= minlandSize) {
      throw new Error("Min land Size Should Be Less then Max land Size");
    }
  };

  // validation for min ,max land size and Land Area end

  const onKeyDownHandler = (value) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => handleSearch(value), 500);
  };

  return (
    <>
      <div className="bg-[#FFFFFF] border-solid border-b-[1px] border-[#E6E6E6] py-[12px] h-[90px] filterStyle">
        <Container>
          <div className="relative py-[16px] bg-white z-40 flex items-center ">
            <div
              className="absolute right-[1px] top-6 md:top-5 !md:right-[20px]  gap-1 items-center hidden md:flex"
              onClick={() => setShowFilter((pre) => !pre)}
            >
              <span className="text-[1.5rem] hidden md:block ">Filters</span>
              <div className="w-[100px] flex justify-center ">
                {showFilter ? (
                  <span className="flex items-center gap-1 cursor-pointer ">
                    Close
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="12"
                      viewBox="0 0 384 512"
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 cursor-pointer">
                    View All
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </span>
                )}
              </div>
            </div>

            <div
              style={{
                // width: "72%",
                marginLeft: "2%",
                display: "flex",
              }}
              className="w-full md:w-[72%]"
            >
              {" "}
              <div
                className=" block md:hidden w-full"
                style={{ height: "80px" }}
              >
                <Input
                  placeholder="Search inventory"
                  onKeyDown={(e) => {}}
                  onChange={(e) => {
                    setSearchData(e.target.value);
                    onKeyDownHandler(e.target.value);
                  }}
                  value={searchData}
                />
                <div
                  className=" block md:hidden mt-3 w-full"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: "50px",
                    right: "0px",
                  }}
                >
                  <div>
                    <span className="text-[1rem] ml-1">Filters</span>
                  </div>
                  <div onClick={() => setShowFilter((pre) => !pre)}>
                    {showFilter ? (
                      <span className="flex items-center gap-1 cursor-pointer">
                        Close
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="12"
                          viewBox="0 0 384 512"
                        >
                          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 cursor-pointer">
                        View All
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="14"
                          viewBox="0 0 448 512"
                        >
                          <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Input
                placeholder="Search inventory"
                onKeyDown={(e) => {}}
                onChange={(e) => {
                  setSearchData(e.target.value);
                  onKeyDownHandler(e.target.value);
                }}
                value={searchData}
                className="hidden md:block w-full"
              />
              <Button
                icon={<SearchOutlined />}
                style={{ height: "40px", width: "50px" }}
                onClick={() => {
                  handleSearch(searchData);
                }}
              />
            </div>
          </div>
        </Container>
        <div
          className="bg-white z-[1] relative  mt-[12%] md:mt-[1%] border-solid border-b-[1px] border-[#E6E6E6] pb-[20px] transition-all duration-400 origin-top"
          style={{
            transform: showFilter ? " scaleY(1)" : " scaleY(0)",
          }}
        >
          <Form form={form} onFinish={onFinish}>
            <Container>
              <div
                className="border-solid border-b-[1px] border-[#E6E6E6] pb-[20px] "
                style={{
                  opacity: showFilter ? " 1" : " 0",
                  transition: "opacity 1s ease-in-out",
                }}
              >
                <Row gutter={[16, 20]}>
                  <Col sm={6} xs={24} lg={4}>
                    <h2 className="mb-[5px]">Sell/Rent</h2>
                    <Form.Item name="inVentoryType">
                      <Select
                        style={{
                          width: "100%",
                        }}
                        className="h-[35px]"
                        options={[
                          {
                            label: "Sell",
                            value: "ForSell",
                          },
                          {
                            label: "Rent",
                            value: "ForRent",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col sm={6} xs={24} lg={4}>
                    <h2 className="mb-[5px]">City</h2>
                    <Form.Item name="city">
                      <Input className="h-[35px]" />
                    </Form.Item>
                  </Col>
                  <Col sm={6} lg={4} xs={24}>
                    <h2 className="mb-[5px]">Property Type</h2>
                    <Form.Item name="projectTypeId">
                      <Select
                        style={{
                          width: "100%",
                        }}
                        className="h-[35px]"
                        onChange={onChangePropertyType}
                        options={getProjectTypes?.data?.data?.items?.map(
                          (item) => {
                            return {
                              label: item?.title,
                              value: item?.id,
                            };
                          }
                        )}
                      />
                    </Form.Item>
                  </Col>

                  <Col sm={6} lg={4} xs={24}>
                    <h2 className="mb-[5px]">Category</h2>
                    <Form.Item name="projectSubTypeId">
                      <Select
                        style={{
                          width: "100%",
                        }}
                        className="h-[35px]"
                        multipleItemBg="red"
                        options={
                          form.getFieldValue("projectTypeId")
                            ? getProjectSubTypes?.data?.data?.map((item) => {
                                return {
                                  label: item?.title,
                                  value: item?.id,
                                };
                              })
                            : [
                                {
                                  label: (
                                    <div className="text-[11px] bg-white w-[100%] h-[100%]">
                                      <span className="text-[red] ">
                                        First select Property Type
                                      </span>
                                    </div>
                                  ),
                                },
                              ]
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col sm={12} xs={24} lg={8}>
                    <h2 className="mb-[5px]">Price (PKR)</h2>
                    <Row>
                      <Col sm={11} xs={11} lg={11}>
                        <Form.Item
                          name="minimumPrice"
                          rules={[
                            {
                              validator: minimumPriceInput,
                            },
                          ]}
                        >
                          <Input
                            className="h-[35px]"
                            placeholder="From"
                            onKeyPress={(event) => {
                              if (!/[0-9,.]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          />
                        </Form.Item>
                      </Col>
                      <Col sm={2} xs={2} lg={2}>
                        <div className="flex items-center w-[100%] justify-center">
                          _
                        </div>
                      </Col>
                      <Col sm={11} xs={11} lg={11}>
                        <Form.Item
                          rules={[
                            {
                              validator: maximumPriceInput,
                            },
                          ]}
                          name="maximumPrice"
                        >
                          <Input
                            className="h-[35px]"
                            placeholder="To"
                            onKeyPress={(event) => {
                              if (!/[0-9,.]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={6} xs={24} lg={4}>
                    <h2 className="mb-[5px]">Beds</h2>
                    <Form.Item name="bedRooms">
                      <Input className="h-[35px]" />
                    </Form.Item>
                  </Col>
                  <Col sm={6} xs={24} lg={4}>
                    <h2 className="mb-[5px]">Baths</h2>
                    <Form.Item name="washRooms">
                      <Input className="h-[35px]" />
                    </Form.Item>
                  </Col>
                  <Col sm={6} xs={24} lg={4}>
                    <h2 className="mb-[5px]">Year Built</h2>
                    <Form.Item name="buildInYear">
                      <Input className="h-[35px]" />
                    </Form.Item>
                  </Col>
                  <Col sm={12} xs={24} lg={8}>
                    <h2 className="mb-[5px]">Land Size</h2>
                    <Row>
                      <Col sm={11} xs={11} lg={11}>
                        <Form.Item
                          name="minlandSize"
                          rules={[
                            {
                              validator: minlandSizeInput,
                            },
                          ]}
                        >
                          <Input
                            className="h-[35px]"
                            placeholder="From"
                            onKeyPress={(event) => {
                              if (!/[0-9,.]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          />
                        </Form.Item>
                      </Col>
                      <Col sm={2} xs={2} lg={2}>
                        <div className="flex items-center w-[100%] justify-center">
                          _
                        </div>
                      </Col>
                      <Col sm={11} xs={11} lg={11}>
                        <Form.Item
                          name="maxlandSize"
                          rules={[
                            {
                              validator: maxlandSizeInput,
                            },
                          ]}
                        >
                          <Input
                            className="h-[35px]"
                            placeholder="To"
                            onKeyPress={(event) => {
                              if (!/[0-9,.]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} lg={4} xs={24}>
                    <h2 className="mb-[5px]">Land Area Unit</h2>
                    <Form.Item
                      name="landAreaId"
                      rules={[
                        {
                          validator: landAreaIdInput,
                        },
                      ]}
                    >
                      <Select
                        allowClear
                        style={{
                          width: "100%",
                        }}
                        className="h-[35px]"
                        options={getLandArea?.data?.data?.items?.map((item) => {
                          return {
                            label: item?.title,
                            value: item?.id,
                          };
                        })}
                      />
                    </Form.Item>
                  </Col>

                  {/* <Col sm={9} xs={24} lg={6}>
                        <h2 className="mb-[5px]">Land Size</h2>
                        <Row>
                          <Col sm={11} xs={11} lg={11}>
                            <Form.Item name="minlandSize">
                              <Input className="h-[35px]" />
                            </Form.Item>
                          </Col>
                          <Col sm={2} xs={2} lg={2}>
                            <div className="flex items-center w-[100%] justify-center">
                              _
                            </div>
                          </Col>
                          <Col sm={11} xs={11} lg={11}>
                            <Form.Item name="maxlandSize">
                              <Input className="h-[35px]" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col> */}
                </Row>
              </div>
              <div className="relative flex items-center py-[20px]">
                <div className="absolute right-0 gap-x-[10px] flex items-center h-[60px]">
                  <button
                    disabled={isResetFilterEnabled}
                    style={{
                      color: isResetFilterEnabled ? "grey" : "red",
                      cursor: isResetFilterEnabled ? "not-allowed" : "pointer",
                    }}
                    className="text-[.8rem]"
                    onClick={() => {
                      getCatalogueDetailByAgencyIdApi(
                        dispatch,
                        { page: 1, limit: 999 },
                        params?.id
                      );
                      form.resetFields();
                      setTotalResults(0);
                      setIsResetFilterEnabled(true);
                      setSearchData("");
                    }}
                  >
                    Reset Filters
                  </button>
                  {/* <Button>
                    <div className="flex items-center gap-1">
                      Sort by <FaSortAmountDown style={{ fontSize: "1rem" }} />
                    </div>
                  </Button> */}
                  <Button htmlType="submit">
                    <div className="flex items-center gap-1">Filter</div>
                  </Button>
                </div>
                {!isResetFilterEnabled && (
                  <div>
                    <span className="bold text-[1rem]">{totalResults}</span>{" "}
                    Results found
                  </div>
                )}
              </div>
            </Container>
          </Form>
        </div>
      </div>
    </>
  );
};
export default FilterSection;
