import React from "react";
import { Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";

const InterestedForm = () => {
  const [form] = useForm();
  return (
    <div className="absolute left-6 top-6 w-[31.25rem] p-[18px] bg-[#DEE0E3] rounded-lg">
      <div>
        <div className="flex gap-[10px]">
          <div
            className=" rounded-full w-[58px] h-[58px] overflow-hidden"
            style={{
              backgroundImage: `url(https://placehold.co/58x58)`,
            }}
          />
          <div>
            <div className="w-[226px]">
              <h4 className="text-[#344054] font-bold text-[1rem] leading-[27.68px] ">
                Muhammad Ali, Karchi
              </h4>
              <h4 className="text-[#344054] font-medium text-[1rem] text-[#667085] tracking-tight leading-[25.6px]">
                5+ years experience
              </h4>
            </div>
          </div>
        </div>
        <div>
          <Form
            name="interested"
            form={form}
            initialValues={{ remember: true }}
            style={{
              marginTop: -5,
            }}
          >
            <Row gutter={16}>
              <Col sm={24} xs={12} lg={12} className="mt-[22px]">
                <h2 className="mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Name
                </h2>
                <Input
                  value={"Zakaullah"}
                  className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                />
              </Col>
              <Col sm={24} xs={12} lg={12} className="mt-[22px]">
                <h2 className="mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Email
                </h2>
                <Input
                  value={"zakaullahq@outlook.com"}
                  className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                />
              </Col>
              <Col sm={24} xs={12} lg={12} className="mt-[22px]">
                <h2 className="mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Phone no
                </h2>
                <Input
                  value={"+923153968946"}
                  className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                />
              </Col>
              <Col sm={24} xs={12} lg={12} className="mt-[22px]">
                <h2 className="mb-[5px] text-[#667085] font-medium text-[1rem]">
                  City
                </h2>
                <Input
                  value={"Karachi"}
                  className="bg-[#FFFFFF] text-[#667085] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8 h-[48px]"
                />
              </Col>
              <Col sm={24} xs={24} lg={24} className="mt-[22px]">
                <h2 className="mb-[5px] text-[#667085] font-medium text-[1rem]">
                  Comments
                </h2>
                <TextArea
                  placeholder="Comment"
                  value={
                    "Hello, I am interested in [Genuine Resale | Maid’s Room | PaymentPlan]"
                  }
                  style={{
                    height: 188,
                    resize: "none",
                  }}
                  className="text-[#667085] bg-[#FFFFFF] p-[10px] pr-[14px] pb-[10px] pl-[14px] rounded-8"
                />
              </Col>
              <Col sm={24} xs={24} lg={24} className="mt-[22px]">
                <button
                  className={`px-[8px] py-[10px] text-[#fff] bg-[#6C47FF] text-[1rem] rounded-[10px] transition hover:bg-[whitesmoke] hover:text-[#6C47FF] border border-[#6C47FF] w-full`}
                >
                  I am interested
                </button>
              </Col>
              <Col sm={24} xs={24} lg={24} className="mt-[22px]">
                <div className="flex justify-around gap-2">
                  <button
                    className={`w-full px-[8px] py-[10px] border-[1px] border-[#C7C1C1] text-[1rem] text-[#344054] bg-[#DEE0E3] rounded-[10px]  transition hover:bg-[whitesmoke]`}
                  >
                    Book Appointment
                  </button>
                  <button
                    className={`w-full px-[8px] py-[10px] border-[1px] border-[#C7C1C1] text-[1rem] text-[#344054] bg-[#DEE0E3] rounded-[10px]  transition hover:bg-[whitesmoke]`}
                  >
                    Live Chat
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InterestedForm;
