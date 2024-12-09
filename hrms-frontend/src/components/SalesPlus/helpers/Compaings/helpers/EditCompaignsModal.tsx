import { useState } from "react";
import { Button, Col, Form, Modal, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import TextInput from "../../../../../helpers/inputs/TextInput";
import metaIconWithBg from "../../../../../assets/metaIconWithBg.png";
import goUpperIcon from "../../../../../assets/goUpperIcon.png";
import deleteIcon from "../../../../../assets/delete.png";

type Props = {
  open: boolean;
  close: () => void;
};

const EditCompaignsModal = ({ open, close }: Props) => {
  const [connectWithFb, setConnectWithFb] = useState(false);
  const [updatePipeline, setUpdatePipeline] = useState(true);
  const [form] = useForm();
  const dispatch = useDispatch();

  const onFinish = (formData: any) => {
    if (!updatePipeline) {
      close();
    }
    if (updatePipeline) {
      setUpdatePipeline(false);
    }
  };

  return (
    <Modal
      title={
        <span className="text-[#475467] text-[1rem] font-medium">
          Edit Facebook Compaign
        </span>
      }
      centered
      width={609}
      open={open}
      onCancel={close}
      footer={false}
    >
      {updatePipeline ? (
        <Form onFinish={onFinish} autoComplete="off" form={form}>
          <Row gutter={16} className="py-1">
            <Col sm={24}>
              <div className="min-h-[156px] rounded-[5px] p-[20px] bg-[#F2F4F7]">
                {!connectWithFb ? (
                  <div className="flex justify-between">
                    <div>
                      <img src={metaIconWithBg} alt="" />
                    </div>
                    <div>
                      <h1 className="text-[#344054] text-[1rem] font-medium">
                        Connect your account with facebook
                      </h1>
                      <p className="text-[#667085] font-medium text-[.8125rem]">
                        Before creating new facebook campaign you should attach
                        your account so that we can fetch the facebook leads
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => setConnectWithFb(!connectWithFb)}
                          className="bg-[#0081FB] text-[#FCFCFD] rounded-[5px] flex items-center gap-1 text-[.8125rem] font-medium p-2"
                        >
                          Connect With Facebook <img src={goUpperIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <div className="w-full">
                      <h1 className="text-[#344054] text-[1rem] font-medium">
                        Account Info
                      </h1>
                      <div className="bg-[rgb(255,255,255)] p-2 flex rounded-[5px] justify-between items-center mt-5">
                        <div className="flex items-center gap-1">
                          <div className="flex justify-center text-center items-center">
                            <span
                              className={`w-[32px] bg-[#EFE3FF] h-[32px] flex justify-center items-center rounded-[50%] `}
                            >
                              KG
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-[.8125rem] text-[#344054] cursor-pointer flex items-center gap-1">
                              Khyber Golf City
                            </p>
                            <p className="text-[#98A2B3] text-[.75rem] font-medium">
                              Ad account ID: Act_4906506-590-056
                            </p>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={() => setConnectWithFb(!connectWithFb)}
                          >
                            <img src={deleteIcon} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Col>

            <Col sm={24} className="mt-4">
              <label
                htmlFor="selectCampaign"
                className="text-[.8125rem] font-medium text-[#667085]"
              >
                Select Campaign
              </label>
              <Form.Item
                name={"selectCampaign"}
                rules={[{ required: true, message: "Please Select Campaign" }]}
              >
                <Select
                  id="selectCampaign"
                  className="h-[48px] mt-2"
                  options={[{ label: "New Project Campaign", value: "0" }]}
                  placeholder="Select"
                />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <label
                htmlFor="selectAdd"
                className="text-[.8125rem] font-medium text-[#667085]"
              >
                Select Add
              </label>
              <Form.Item
                name={"Select Add"}
                rules={[{ required: true, message: "Please Select Add" }]}
              >
                <Select
                  id="selectAdd"
                  className="h-[48px] mt-2"
                  options={[{ label: "Al-Raheem", value: "0" }]}
                  placeholder="Select"
                />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <label
                htmlFor="compaignName"
                className="text-[.8125rem] font-medium text-[#667085]"
              >
                Compaign Name
              </label>
              <TextInput
                name="compaignName"
                id="compaignName"
                className="h-[48px] mt-2"
                placeholder="Enter Name"
                rules={[
                  { required: true, message: "Please Enter Compaign Name" },
                ]}
              />
            </Col>
          </Row>
          <div className="flex justify-end w-[100%]">
            <Button
              htmlType="submit"
              type="primary"
              disabled={!connectWithFb}
              className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
            >
              Edit Compaign
            </Button>
          </div>
        </Form>
      ) : (
        <Form
          name="pipeline"
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Row gutter={16} className="py-1">
            <Col sm={24} lg={24}>
              <div className=" rounded-[8px] p-[20px] bg-[#F2F4F7]">
                <div className="flex justify-between">
                  <div className="w-full">
                    <h1 className="text-[#344054] text-[1rem] font-medium">
                      Select From Existing Template
                    </h1>
                    <p>
                      Streamline Your Workflow, Select from your existing
                      Pipeline
                    </p>
                    <div className="mt-2 w-full">
                      <Select
                        id="selectTemplate"
                        className="h-[48px] w-full"
                        options={[
                          { label: "New Project Campaign", value: "0" },
                        ]}
                        placeholder="Select Template"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <div className="flex  w-full items-center p-[15px] ">
              <hr className="w-full border border-[rgb(242,244,247)]" />
              <span className="text-[rgb(178,180,182)] ml-4 mr-4">OR</span>
              <hr className="w-full border border-[rgb(242,244,247)]" />
            </div>
            <Col sm={24}>
              <label
                htmlFor="upatePipeline"
                className="text-[.8125rem] font-medium text-[#667085]"
              >
                Edit Pipeline
              </label>
              <TextInput
                name="upatePipeline"
                id="upatePipeline"
                className="h-[48px] mt-2"
                placeholder="Enter Name"
                rules={[{ required: true, message: "Please Enter Pipeline" }]}
              />
            </Col>
          </Row>
          <div className="flex justify-end w-[100%]">
            <Button
              htmlType="submit"
              type="primary"
              className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
            >
              Edit Template
            </Button>
          </div>
        </Form>
      )}
    </Modal>
  );
};
export default EditCompaignsModal;
