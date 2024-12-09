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

const CreatePipelineModal = ({ open, close }: Props) => {
  const [createPipeline, setCreatePipeline] = useState(true);
  const [form] = useForm();
  const dispatch = useDispatch();
  const onFinish = (formData: any) => {
    close();
  };

  return (
    <Modal
      title={
        <span className="text-[#475467] text-[1rem] font-medium">
          Create Pipeline
        </span>
      }
      centered
      width={createPipeline ? 609 : 577}
      open={open}
      onCancel={close}
      footer={false}
    >
      <Form name="pipeline" onFinish={onFinish} autoComplete="off" form={form}>
        <Row gutter={16} className="py-1">
          <Col sm={24} lg={24}>
            <div className=" rounded-[8px] p-[20px] bg-[#F2F4F7]">
              <div className="flex justify-between">
                <div className="w-full">
                  <h1 className="text-[#344054] text-[1rem] font-medium">
                    Select From Existing Template
                  </h1>
                  <p>
                    Streamline Your Workflow, Select from your existing Pipeline
                  </p>
                  <div className="mt-2 w-full">
                    <Select
                      id="selectTemplate"
                      className="h-[48px] w-full"
                      options={[{ label: "New Project Campaign", value: "0" }]}
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
              htmlFor="createNewPipeline"
              className="text-[.8125rem] font-medium text-[#667085]"
            >
              Create New Pipeline
            </label>
            <TextInput
              name="createNewPipeline"
              id="createNewPipeline"
              className="h-[48px] mt-2"
              placeholder="Enter Name"
              rules={[
                { required: true, message: "Please Enter Pipeline Name" },
              ]}
            />
          </Col>
        </Row>
        <div className="flex justify-end w-[100%]">
          <Button
            htmlType="submit"
            type="primary"
            className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
          >
            Create Template
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default CreatePipelineModal;
