import React, { useState } from "react";
import Container from "../../../../components/Container";
import { Button, Col, Input, Row, Select } from "antd";
import { CiLocationOn } from "react-icons/ci";
import { FaSortAmountDown } from "react-icons/fa";

const FilterSection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const propertiesSelect = [
    {
      label: "Manager",
      options: [
        {
          label: "Jack",
          value: "jack",
        },
        {
          label: "Lucy",
          value: "lucy",
        },
      ],
    },
    {
      label: "Engineer",
      options: [
        {
          label: "yiminghe",
          value: "Yiminghe",
        },
      ],
    },
  ];
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="bg-[#FFFFFF] border-solid border-b-[1px] border-[#E6E6E6] py-[12px] h-[90px] ">
        <Container>
          <div className="relative py-[16px] bg-white z-40 flex items-center ">
            <div
              className="absolute right-[20px] "
              onClick={() => setShowFilter((pre) => !pre)}
            >
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
            <span className="text-[1.5rem]">Filter</span>
          </div>
        </Container>
        <div
          className="bg-white z-[1] relative border-solid border-b-[1px] border-[#E6E6E6] pb-[20px] transition-all duration-400 origin-top"
          style={{
            transform: showFilter ? " scaleY(1)" : " scaleY(0)",
          }}
        >
          <Container>
            <div
              className="border-solid border-b-[1px] border-[#E6E6E6] pb-[20px] "
              style={{
                opacity: showFilter ? " 1" : " 0",
                transition: "opacity 1s ease-in-out",
              }}
            >
              <Row gutter={[16, 20]}>
                <Col xs={24} sm={24} lg={8}>
                  <Row gutter={16}>
                    <Col sm={8} xs={8} lg={8}>
                      <h2 className="mb-[5px]">Property</h2>
                      <Select
                        defaultValue="lucy"
                        style={{
                          width: "100%",
                        }}
                        onChange={handleChange}
                        options={propertiesSelect}
                      />
                    </Col>
                    <Col sm={16} xs={16} lg={16}>
                      <h2 className="mb-[5px]">Location</h2>
                      <Input prefix={<CiLocationOn />} />
                    </Col>
                  </Row>
                </Col>
                <Col sm={24} lg={8} xs={24}>
                  <Row gutter={16}>
                    <Col sm={12} xs={12} lg={12}>
                      <h2 className="mb-[5px]">City</h2>
                      <Select
                        defaultValue="lucy"
                        style={{
                          width: "100%",
                        }}
                        onChange={handleChange}
                        options={propertiesSelect}
                      />
                    </Col>
                    <Col sm={12} lg={12} xs={12}>
                      <h2 className="mb-[5px]">Property Type</h2>
                      <Select
                        defaultValue="lucy"
                        style={{
                          width: "100%",
                        }}
                        onChange={handleChange}
                        options={propertiesSelect}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col sm={24} lg={8} xs={24}>
                  <Row gutter={16}>
                    <Col sm={14} xs={14} lg={14}>
                      <h2 className="mb-[5px]">Price (PKR)</h2>
                      <Row>
                        <Col sm={11} xs={11} lg={11}>
                          <Select
                            defaultValue="20,000"
                            style={{
                              width: "100%",
                            }}
                            onChange={handleChange}
                            options={propertiesSelect}
                          />
                        </Col>
                        <Col sm={2} xs={2} lg={2}>
                          <div className="flex items-center w-[100%] justify-center">
                            _
                          </div>
                        </Col>
                        <Col sm={11} xs={11} lg={11}>
                          <Select
                            defaultValue="40,000"
                            style={{
                              width: "100%",
                            }}
                            onChange={handleChange}
                            options={propertiesSelect}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={10} xs={10} lg={10}>
                      <h2 className="mb-[5px]">Beds</h2>
                      <Row>
                        <Col sm={11} xs={11} lg={11}>
                          <Select
                            defaultValue="Min"
                            style={{
                              width: "100%",
                            }}
                            onChange={handleChange}
                            options={propertiesSelect}
                          />
                        </Col>
                        <Col sm={2} xs={2} lg={2}>
                          <div className="flex items-center w-[100%] justify-center">
                            _
                          </div>
                        </Col>
                        <Col sm={11} xs={11} lg={11}>
                          <Select
                            defaultValue="Max"
                            style={{
                              width: "100%",
                            }}
                            onChange={handleChange}
                            options={propertiesSelect}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col sm={24} lg={8} xs={24}>
                  <Row gutter={16}>
                    <Col sm={12} xs={12} lg={12}>
                      <h2 className="mb-[5px]">Baths</h2>
                      <Row>
                        <Col sm={11} xs={11} lg={11}>
                          <Select
                            defaultValue="2"
                            style={{
                              width: "100%",
                            }}
                            onChange={handleChange}
                            options={propertiesSelect}
                          />
                        </Col>
                        <Col sm={2} xs={2} lg={2}>
                          <div className="flex items-center w-[100%] justify-center">
                            _
                          </div>
                        </Col>
                        <Col sm={11} xs={11} lg={11}>
                          <Select
                            defaultValue="4"
                            style={{
                              width: "100%",
                            }}
                            onChange={handleChange}
                            options={propertiesSelect}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={12} xs={12} lg={12}>
                      <h2 className="mb-[5px]">Year Built</h2>
                      <Select
                        defaultValue="1998"
                        style={{
                          width: "100%",
                        }}
                        onChange={handleChange}
                        options={propertiesSelect}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className="relative flex items-center py-[20px]">
              <div className="absolute right-0 gap-x-[10px] flex items-center">
                <span className="text-[red] text-[.8rem] cursor-pointer">
                  Reset Filters
                </span>
                <Button>
                  <div className="flex items-center gap-1">
                    Sort by <FaSortAmountDown style={{ fontSize: "1rem" }} />
                  </div>
                </Button>
              </div>
              <div>
                <span className="bold text-[1rem]">4900</span> Results found
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
export default FilterSection;
