import { Button, Col, Form, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { addCampaignsApi } from "../../../../../redux/api/SalesPlus/Campaigns";

type Props = {
  open: boolean;
  close: () => void;
  setBgBlurBox: any;
};

const CreateNewCampaignsModal = ({ open, close, setBgBlurBox }: Props) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const addCampaigns = useSelector((state: any) => state?.addCampaigns);
  const onFinish = (value: any) => {
    const body = {
      title: value.title,
    };
    addCampaignsApi(dispatch, body, onSuccess);
  };
  const onSuccess = () => {
    setBgBlurBox(false);
  };

  return (
    <Modal
      title={<span className=" text-[1rem] font-medium">Create Campaign</span>}
      centered
      width={561}
      open={open}
      onCancel={close}
      footer={false}
    >
      <Form onFinish={onFinish} autoComplete="off" form={form}>
        <Col sm={24} className="mt-5">
          <label
            htmlFor="title"
            className="text-[.8125rem] font-medium text-[#667085] dark-input-label"
          >
            Campaign Name
          </label>
          <TextInput
            name="title"
            id="title"
            className="h-[48px] mt-2 dark-input "
            placeholder="Enter Name"
            rules={[{ required: true, message: "Please Enter campaign names" }]}
          />
        </Col>
        <div className="flex justify-end w-[100%] mt-10">
          <Button
            className="dark:bg-dark-primary bg-light-primary text-white border-none h-[40px] font-normal"
            type="primary"
            htmlType="submit"
            loading={addCampaigns?.loading}
          >
            Create Campaign
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default CreateNewCampaignsModal;
