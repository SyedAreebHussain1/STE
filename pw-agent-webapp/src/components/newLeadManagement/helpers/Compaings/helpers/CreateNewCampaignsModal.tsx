import { Button, Col, Form, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { createNewCampaignApi } from "../../../../../redux/api/Campaigns";

type Props = {
  open: boolean;
  close: () => void;
  setBgBlurBox: any;
};

const CreateNewCampaignsModal = ({ open, close, setBgBlurBox }: Props) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const onFinish = (formData: any) => {
    const body = {
      title: formData.campaignName,
    };
    createNewCampaignApi(body, dispatch, onSuccess);
  };
  const onSuccess = () => {
    setBgBlurBox(false);
  };

  return (
    <Modal
      title={
        <span className="text-[#475467] text-[1rem] font-medium">
          Create Campaign
        </span>
      }
      centered
      width={561}
      open={open}
      onCancel={close}
      footer={false}
    >
      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Col sm={24} className="mt-5">
          <label
            htmlFor="campaignName"
            className="text-[.8125rem] font-medium text-[#667085]"
          >
            campaign Name
          </label>
          <TextInput
            name="campaignName"
            id="campaignName"
            className="h-[48px] mt-2"
            placeholder="Enter Name"
            rules={[{ required: true, message: "Please Enter campaign Name" }]}
          />
        </Col>
        <div className="flex justify-end w-[100%] mt-10">
          <Button
            htmlType="submit"
            type="primary"
            className="bg-primary text-[#fff] h-[45px] border-none  py-[10px] px-[20px]  text-[1rem] font-semibold"
          >
            Create Campaign
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default CreateNewCampaignsModal;
