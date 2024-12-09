import React, { useState } from "react";
import { Button, Col, Form, Input, Modal, Result, Row, Select } from "antd";

import { useForm } from "antd/lib/form/Form";
import {
  addNewWithDrawRequestAction,
  banksAction,
} from "../../../../../store/action/saleOrderAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import swal from "sweetalert";

const WithdrawModal = ({ visible, handleClose, data }) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const { banks } = useSelector((state) => state.saleOrder);

  const user = JSON.parse(localStorage.getItem("user"));

  const [sucess, setIsucess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    handleClose(false);
    setIsucess(false);
    form.resetFields();
  };
  const { Option } = Select;
  const onSuccuess = (success) => {
    setIsucess(true);
    setLoading(false);
  };

  const onFailure = (fail) => {
    swal("Sorry!", `${fail?.message}`, "error");
    setLoading(false);
  };
  const onFinish = (values) => {
    console.log(values);
    setLoading(true);

    dispatch(
      addNewWithDrawRequestAction(
        { ...values, InvestorId: user?.id },
        onSuccuess,
        onFailure
      )
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    dispatch(banksAction());
  }, []);
  return (
    <Modal
      title={
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "27px",
            display: "flex",
            alignItems: "center",
            color: "#181818",
          }}
        >
          Withdraw Request
        </div>
      }
      visible={visible}
      onCancel={handleCancel}
      width={700}
      footer={null}
      centered
      bodyStyle={{ height: "auto" }}
    >
      {sucess ? (
        <Result
          status="success"
          title="Your request has been sent successfully to the management"
          subTitle="We acknowledge receipt of your request, and thank you for submitting it! Your payment details have been duly forwarded to our dedicated Property Wallet Management team. They will carefully review and process your payment within the designated timeframe. Be assured that your payment will be promptly cleared within the specified number of days."
        />
      ) : (
        <>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={form}
            className="sales-log-project-steps"
          >
            <Row>
              <Col span={24}>
                <div
                  style={{
                    borderColor: "#F3F3F3",
                    borderWidth: 1,
                    borderStyle: "solid",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <p style={{ fontWeight: "500", fontSize: "18px" }}>
                    Withdraw Amount
                  </p>
                  <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>
                    <Row gutter={16}>
                      <Col
                        span={3}
                        style={{ marginTop: "6px", marginRight: "-25px" }}
                      >
                        PKR{" "}
                      </Col>
                      <Col span={21}>
                        {" "}
                        <Form.Item
                          name="amount"
                          rules={[
                            {
                              required: true,
                              message: "Required!",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Enter amount"
                            style={{
                              width: "100%",
                              height: 41,
                              borderWidth: 2,
                              borderTop: "none",
                              borderRight: "none",
                              borderLeft: "none",
                              marginTop: "-3px",
                              marginBottom: "0px",
                              fontWeight: "bold",
                              fontSize: "18px",
                            }}
                            onKeyPress={(event) => {
                              if (!/[0-9,.]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            autoFocus
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </h5>
                </div>
              </Col>
            </Row>

            <h5 style={{ fontSize: "14px", marginTop: "4%" }}>
              Account Information
            </h5>

            <Row style={{ marginTop: "2%" }} gutter={16}>
              <Col span={8}>
                <p
                  style={{
                    padding: "0",
                    margin: "0px 0px 5px 0px",
                    fontWeight: "600",
                    color: "grey",
                  }}
                >
                  Select Bank
                </p>

                <div className="my-select-container">
                  <Form.Item
                    name="bankName"
                    rules={[
                      {
                        required: true,
                        message: "Required!",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      placeholder="Select bank"
                      style={{
                        textAlign: "start",
                        width: "100%",
                      }}
                      allowClear
                    >
                      {banks?.map((item, index) => {
                        return (
                          <Option key={index} value={item?.bank}>
                            {item?.bank}
                          </Option>
                        );
                      })}
                      {/* <Option value="Meezan">Meezan</Option>
                      <Option value="BankIslami">Bank Islami</Option> */}
                    </Select>
                  </Form.Item>
                </div>
              </Col>
              <Col span={8}>
                <p
                  style={{
                    padding: "0",
                    margin: "0px 0px 5px 0px",
                    fontWeight: "600",
                    color: "grey",
                  }}
                >
                  Account No.
                </p>
                <Form.Item
                  name="accountNo"
                  rules={[
                    {
                      required: true,
                      message: "Required!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your account No"
                    style={{
                      width: "100%",
                      height: 41,
                      borderRadius: "8px",
                      borderWidth: 2,
                      margin: 0,
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <p
                  style={{
                    padding: "0",
                    margin: "0px 0px 5px 0px",
                    fontWeight: "600",
                    color: "grey",
                  }}
                >
                  Account Title Name
                </p>
                <Form.Item
                  name="accountTitleName"
                  rules={[
                    {
                      required: true,
                      message: "Required!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your account Title "
                    style={{
                      width: "100%",
                      height: 41,
                      borderRadius: "8px",
                      borderWidth: 2,
                      margin: 0,
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <p
                  style={{
                    padding: "0",
                    margin: "0px 0px 5px 0px",
                    fontWeight: "600",
                    color: "grey",
                  }}
                >
                  CNIC
                </p>
                <Form.Item
                  name="cnic"
                  rules={[
                    {
                      required: true,
                      message: "Required!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your cnic no."
                    style={{
                      width: "100%",
                      height: 41,
                      borderRadius: "8px",
                      borderWidth: 2,
                      margin: 0,
                    }}
                    onKeyPress={(event) => {
                      if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    maxLength={13}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <p
                  style={{
                    padding: "0",
                    margin: "0px 0px 5px 0px",
                    fontWeight: "600",
                    color: "grey",
                  }}
                >
                  Phone No
                </p>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      validator: (_, value) => {
                        if (!/^03\d{2}-?\d{7}$/.test(value)) {
                          return Promise.reject(
                            "Phone number should be like this 03XXXXXXXXX!"
                          );
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your phone no."
                    style={{
                      width: "100%",
                      height: 41,
                      borderRadius: "8px",
                      borderWidth: 2,
                      margin: 0,
                    }}
                    inputMode="numeric"
                    maxLength={11}
                    onKeyPress={(event) => {
                      if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <p
                  style={{
                    padding: "0",
                    margin: "0px 0px 5px 0px",
                    fontWeight: "600",
                    color: "grey",
                  }}
                >
                  Email
                </p>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please enter a valid email address!",
                    },
                    {
                      required: true,
                      message: "Required!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    style={{
                      width: "100%",
                      height: 41,
                      borderRadius: "8px",
                      borderWidth: 2,
                      margin: 0,
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    style={{
                      float: "right",
                      borderColor: "#27A3A3",
                      backgroundColor: "#27A3A3",
                      borderRadius: "8px",
                      marginLeft: "2%",
                      // marginTop: "-5%",
                    }}
                    htmlType="submit"
                    // onClick={() => {
                    //   setIsucess(true);
                    // }}
                    key="4"
                    type="primary"
                    loading={loading}
                  >
                    Send Request
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </>
      )}
    </Modal>
  );
};

export default WithdrawModal;
